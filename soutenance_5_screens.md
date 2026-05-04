# 5 écrans clés — Testing_Claude_code

Fil rouge de la soutenance : **CLI → Abstraction → Extensibilité → Exécution → Parallélisme & Évaluation.**
Chaque extrait tient sur un écran et illustre un point précis du projet.

---

## Écran 1 — `main.py` : le pipeline en un coup d'œil

> **À dire :** « C'est le chef d'orchestre. On parse les arguments, on initialise les agents, on lit le CSV, on boucle sur chaque repo, et on agrège les résultats en JSON. »

```python
def main():
    args = parse_arguments()

    # 1. Initialisation du système d'agents
    initialize_default_agents()

    # 2. Validation de l'agent choisi
    available_agents = get_available_agents()
    if args.agent not in available_agents:
        logger.error(f"Agent '{args.agent}' indisponible : {available_agents}")
        sys.exit(1)

    # 3. Lecture du CSV (repos + tâches)
    repos_data = parse_csv_file(args.csv)
    if args.repos and args.repos < len(repos_data):
        repos_data = repos_data[:args.repos]

    # 4. Traitement séquentiel des repos (parallélisme interne)
    all_results = []
    for repo_count, repo_data in enumerate(repos_data, 1):
        logger.info(f"Repo {repo_count}/{len(repos_data)}")
        results = process_repo(
            repo_data, args.max_instances, args.output,
            args.timeout, args.evaluate, args.agent
        )
        all_results.append((repo_data['name'], results))

    # 5. Agrégation finale + évaluation
    create_json_aggregations(all_results, args.output)
    if args.evaluate:
        merge_all_evaluations()

    total = sum(len(r) for _, r in all_results)
    ok = sum(sum(1 for _, s, _, _ in r if s) for _, r in all_results)
    logger.info(f"Bilan : {ok}/{total} tâches réussies")
```

---

## Écran 2 — `agents/base_agent.py` : l'abstraction commune

> **À dire :** « Tous les agents IA partagent le même contrat. J'utilise une classe abstraite + des dataclasses pour figer les entrées/sorties. C'est ce qui rend le système ouvert à de nouveaux agents. »

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Dict, List, Any, Optional

@dataclass
class TaskParams:
    task: str
    clone_dir: str
    output_file: str
    repo_name: str
    task_num: int
    repo_url: str
    timeout: int

@dataclass
class AgentResult:
    success: bool
    output_file: str
    metadata: Dict[str, Any]
    error: Optional[str] = None

@dataclass
class AgentConfig:
    name: str
    display_name: str
    description: str
    supported_formats: List[str]
    default_timeout: int
    requires_isolation: bool = True

class Agent(ABC):
    """Contrat commun à tous les agents IA."""
    def __init__(self, config: AgentConfig):
        self.config = config
        self._validate_config()

    @abstractmethod
    def execute_task(self, task_params: TaskParams) -> AgentResult: ...

    @abstractmethod
    def validate_environment(self) -> bool: ...

    def get_name(self) -> str:        return self.config.name
    def get_display_name(self) -> str: return self.config.display_name
    def requires_isolation(self) -> bool: return self.config.requires_isolation
```

---

## Écran 3 — `agents/agent_factory.py` : Factory + Registry

> **À dire :** « Pour ajouter un nouvel agent il suffit d'une classe + un `register_agent`. Le `main` ne connaît même pas le nom des classes : il demande "claude" ou "grok" et la factory livre l'instance. »

```python
from .base_agent import Agent
from .agent_registry import agent_registry
from .claude_agent     import ClaudeAgent
from .gemini_agent     import GeminiAgent
from .grok_agent       import GrokAgent
from .opencode_agent   import OpenCodeAgent
from .fondation_agent  import FondationAgent
from .codex_agent      import CodexAgent

def initialize_default_agents() -> None:
    """Enregistre tous les agents disponibles dans le registre."""
    for AgentCls in (ClaudeAgent, FondationAgent, GeminiAgent,
                     OpenCodeAgent, GrokAgent, CodexAgent):
        config = AgentCls.create_default_config()
        agent_registry.register_agent(AgentCls, config)

    # Validation automatique de l'environnement de chaque agent
    for name, ok in agent_registry.validate_all_agents().items():
        status = "OK" if ok else "KO"
        logger.info(f"  [{status}] {name}")

def get_available_agents() -> list:
    return [n for n in agent_registry.list_available_agents()
            if agent_registry.is_agent_available(n)]

def create_agent_from_name(agent_name: str) -> Agent:
    """Le main demande un agent par son nom — la factory livre l'instance."""
    if not agent_registry.is_agent_available(agent_name):
        raise ValueError(
            f"Agent '{agent_name}' indisponible. "
            f"Disponibles : {get_available_agents()}"
        )
    return agent_registry.get_agent(agent_name)
```

---

## Écran 4 — `agents/claude_agent.py` : exécution concrète d'un agent

> **À dire :** « Voilà ce que fait concrètement un agent : il lance le CLI Claude dans le repo cloné, capture la sortie en stream JSON, et écrit le résultat structuré sur disque. Tous les autres agents suivent ce même pattern. »

```python
class ClaudeAgent(Agent):

    @classmethod
    def create_default_config(cls) -> AgentConfig:
        return AgentConfig(
            name="claude", display_name="Claude",
            description="Claude CLI (Anthropic)",
            supported_formats=["json", "stream-json"],
            default_timeout=600, requires_isolation=True,
            additional_params={"cli_args": [
                "-p", "--dangerously-skip-permissions",
                "--verbose", "--output-format", "stream-json", "--print"
            ]}
        )

    def execute_task(self, task_params: TaskParams) -> AgentResult:
        metadata = self._create_metadata(task_params, {"tool": "claude"})
        cli_args = self.config.additional_params.get("cli_args", [])
        cmd = ["claude"] + cli_args + [task_params.task]

        # Lancement isolé dans le repo cloné
        process = subprocess.Popen(
            cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            text=True, cwd=os.path.abspath(task_params.clone_dir)
        )
        try:
            stdout, _ = process.communicate(timeout=task_params.timeout)
            # Parsing du stream JSON ligne par ligne
            conversation = []
            for line in stdout.strip().split('\n'):
                try:
                    conversation.append(json.loads(line))
                except json.JSONDecodeError:
                    conversation.append({"type": "text", "content": line})
            output, success = {"metadata": metadata, "conversation": conversation,
                               "status": "completed"}, True
        except subprocess.TimeoutExpired:
            process.kill(); process.wait()
            output, success = {"metadata": metadata, "conversation": [],
                               "status": "timeout"}, False

        with open(task_params.output_file, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        return AgentResult(success=success, output_file=task_params.output_file,
                           metadata=metadata, error=output.get("error"))
```

---

## Écran 5 — `task_processor.py` + `evaluation.py` : parallélisme & évaluation

> **À dire :** « Pour aller plus vite, je traite les tâches d'un même repo en parallèle avec un ThreadPoolExecutor, et l'évaluation lance plusieurs prompts simultanés. Chaque réponse est notée sur Pédagogie / Clarté / Pertinence. »

```python
# --- task_processor.py : parallélisme par repo ----------------------------
def process_repo(repo_data, max_agent_instances, output_dir,
                 timeout, enable_evaluation, agent_name="claude"):
    """Traite toutes les tâches d'un repo en parallèle."""
    with concurrent.futures.ThreadPoolExecutor(
            max_workers=max_agent_instances) as executor:

        futures = [(num, executor.submit(
            process_repo_task, repo_data, num, task,
            output_dir, timeout, enable_evaluation, agent_name
        )) for num, task in repo_data['tasks']]

        results = []
        for task_num, future in futures:
            try:
                ok, scores, just = future.result(timeout=timeout * 2)
                results.append((task_num, ok, scores, just))
            except concurrent.futures.TimeoutExpired:
                results.append((task_num, False,
                                {'pedagogie': 'TIMEOUT', 'clarte': 'TIMEOUT',
                                 'pertinence': 'TIMEOUT'}, {}))
        return results

# --- evaluation.py : évaluation multi-prompts simultanée -------------------
def run_text_evaluation(conversation_text, task, repo_name, task_num, timeout):
    prompts = get_all_prompts()  # Pédagogie, Clarté, Pertinence...
    with concurrent.futures.ThreadPoolExecutor(
            max_workers=len(prompts)) as executor:
        futures = [executor.submit(run_single_evaluation,
                                   name, data, task, conversation_text,
                                   "evaluations", repo_name, task_num, timeout)
                   for name, data in prompts.items()]
        results = [f.result() for f in concurrent.futures.as_completed(futures)]

    save_individual_task_evaluation(task_num, results)
    scores, justifs = {}, {}
    for r in results:
        scores.update(r.get('scores', {}))
        justifs.update(r.get('justifications', {}))
    return scores, justifs
```

---

## Plan de soutenance suggéré (≈ 8 min)

| # | Écran                                | Message clé                                                          |
|---|--------------------------------------|----------------------------------------------------------------------|
| 1 | `main.py`                            | Le flux global : CSV → agents → résultats JSON                       |
| 2 | `base_agent.py`                      | Une abstraction claire = un projet maintenable                       |
| 3 | `agent_factory.py`                   | Patterns Factory + Registry → ajouter un agent en 2 lignes           |
| 4 | `claude_agent.py`                    | Le travail réel : `subprocess` isolé + parsing stream JSON           |
| 5 | `task_processor.py` + `evaluation.py`| `ThreadPoolExecutor` pour la perf, évaluation automatisée 3 critères |
