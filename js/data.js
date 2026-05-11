// Données du Portfolio BTS SIO SLAM
// C'est ici que vous modifiez le contenu de votre site !

export const personalInfo = {
    name: "Mathieu Gallienne",
    title: "Étudiant BTS SIO - Option SLAM (en alternance)",
    heroTitle: "Mathieu Gallienne — Développeur d'applications en devenir",
    heroDescription: "Étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) au Lycée Louis Bascan de Rambouillet, en alternance chez Siccardi Tech-Leads. Passionné par le développement, je recherche une alternance pour poursuivre ma montée en compétences.",
    email: "mathieugallienne@orange.fr",
    phone: "06 75 34 38 77",
    location: "Saint Arnoult en Yvelines (78730)",
    github: "https://github.com/MathieuGal",
    linkedin: "https://www.linkedin.com/in/mathieu-gallienne-54a992318/",
    cvLink: "assets/documents/cv.pdf"
};

export const skills = [
    { name: "Python", level: 85, icon: "fa-python" },
    { name: "HTML5 / CSS3", level: 80, icon: "fa-html5" },
    { name: "C#", level: 65, icon: "fa-code" },
    { name: "Git / GitHub", level: 85, icon: "fa-git-alt" },
    { name: "API REST / JSON / HTTP", level: 75, icon: "fa-network-wired" },
    { name: "Tests unitaires & linting", level: 70, icon: "fa-vial" }
];

export const projects = [
    {
        id: 1,
        title: "Comparateur d'IA Automatisé",
        description: "Comparaison automatisé d'IA et analyse de performance.",
        longDescription: `Ce projet consiste en un framework automatisé conçu pour comparer objectivement les réponses de divers LLMs.
Le fonctionnement repose sur un orchestrateur qui lance des requêtes asynchrones en parallèle vers les APIs.
Cette parallélisation permet d'évaluer plusieurs modèles simultanément, réduisant drastiquement le temps de test.
Une fois les réponses collectées, un module d'évaluation automatique analyse la pertinence et les temps de réponse.
L'architecture de l'application est conçue de manière modulaire, facilitant l'intégration de nouveaux LLMs.
Chaque agent est défini par un fichier de configuration spécifiant ses capacités et son format d'entrée/sortie.
Les résultats finaux sont agrégés, convertis et exportés sous forme de fichiers JSON ou CSV détaillés.
Ce pipeline permet d'extraire des métriques précises et de générer des rapports comparatifs fiables.
Une interface CLI interactive permet aux utilisateurs de paramétrer facilement les configurations de benchmark.`,
        tags: ["Python", "API LLM", "Automation", "Data Analysis"],
        image: "js/Image/claude.jpg",
        gallery: [],
        features: [
            "Exécution de prompts en parallèle sur plusieurs modèles",
            "Analyse comparative des temps de réponse et de la qualité",
            "Génération automatique de rapports de benchmark",
            "Interface de visualisation des résultats"
        ],
        github: "https://github.com/Fondation-io",
        private: true,
        competences: ["Développer une solution", "Gérer le patrimoine informatique"],
        codeScreens: [
            {
                image: "js/Image/Comparateur-5-orchestrateur.png",
                title: "1. Boucle principale (main.py)",
                description: "Le chef d'orchestre du programme. Après avoir vérifié le fichier CSV et créé le dossier de sortie, il parse les repos à traiter, les limite si l'utilisateur l'a demandé, puis itère dessus. Pour chaque repo, il appelle process_repo() qui lance les tâches en parallèle, et collecte les scores de pédagogie, clarté et pertinence pour le rapport final."
            },
            {
                image: "js/Image/Comparateur-1-dataclasses.png",
                title: "2. Modèles de données (base_agent.py)",
                description: "Deux dataclasses Python qui standardisent les échanges entre le programme et chaque agent IA. TaskParams porte tout ce qu'il faut pour exécuter une tâche (le prompt, le repo cloné, le timeout). AgentResult porte la réponse (succès ou échec, fichier de sortie, métadonnées). Cette standardisation est ce qui permet de brancher Claude, Gemini, Grok ou n'importe quel autre agent sans toucher au reste du code."
            },
            {
                image: "js/Image/Comparateur-2-agents-registry.png",
                title: "3. Enregistrement des agents (agent_factory.py)",
                description: "La fonction initialize_default_agents enregistre tous les agents disponibles (Claude, Fondation, Gemini, OpenCode, Grok, Codex…) dans un registre central. Chaque agent fournit sa propre configuration via create_default_config(). À la fin, validate_all_agents() vérifie que les CLI/clés API sont bien présentes sur la machine et affiche un ✓ ou ✗ pour chaque agent. C'est le pattern Factory + Registry qui rend le projet extensible."
            },
            {
                image: "js/Image/Comparateur-3-claude-execution.png",
                title: "4. Exécution d'une tâche (claude_agent.py)",
                description: "Le cœur de l'agent Claude. On construit la commande CLI avec les bons arguments, on lance subprocess.Popen dans le dossier du repo cloné (cwd=abs_clone_dir pour l'isolation), puis on capture la sortie avec un timeout. Le stream JSON renvoyé par Claude est parsé ligne par ligne : chaque ligne valide est ajoutée à la conversation, les lignes non-JSON sont stockées comme texte brut. Le résultat structuré est ensuite sérialisé en JSON sur disque."
            },
            {
                image: "js/Image/Comparateur-4-threadpool.png",
                title: "5. Parallélisme par repo (task_processor.py)",
                description: "process_repo lance toutes les tâches d'un même repo en parallèle grâce à un ThreadPoolExecutor (max_workers contrôlé en CLI). Chaque future correspond à une tâche IA. La récupération des résultats gère trois cas : succès (on stocke les scores), TimeoutExpired (on marque TIMEOUT pour les 3 critères) et exception (on marque ERROR). Cette gestion robuste évite qu'un échec sur une tâche ne bloque tout le batch."
            }
        ],
        codeExamples: [
            {
                title: "Exécution asynchrone des tests",
                language: "python",
                code: `def process_models(prompt, models):
    # Exécution parallèle sur les LLMs
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(call_llm_api, m, prompt): m for m in models}
        return [f.result() for f in as_completed(futures)]`
            }
        ]
    },
    {
        id: 3,
        title: "AgentSea",
        description: "Intégration et développement d'agents autonomes naviguant sur le web.",
        longDescription: `AgentSea est une plateforme innovante qui permet de développer et d'intégrer des agents IA capables de naviguer de manière autonome sur le web.
Le fonctionnement du système s'appuie sur le contrôle de navigateurs web sans tête (headless browsers) via des protocoles d'automatisation.
L'agent d'IA analyse la structure de la page Web (DOM), l'interprète, et décide des actions à effectuer pour accomplir une tâche donnée.
Pour sa mise en œuvre, la technologie utilise le "prompting" dynamique pour transformer les objectifs de l'utilisateur en séquences d'actions concrètes.
Le système gère également les interactions complexes, comme les clics dynamiques, le défilement de pages ou le remplissage de formulaires.
Les agents sont isolés et exécutés dans des environnements sécurisés (souvent conteneurisés) pour éviter toute corruption des systèmes hôtes.
Une boucle de rétroaction permet à l'agent de vérifier visuellement si son action précédente a réussi avant de passer à l'étape suivante.
Cette approche offre la possibilité d'automatiser des flux de travail rébarbatifs en simulant avec une grande fidélité le comportement humain.
L'architecture facilite grandement l'intégration avec divers LLMs pour piloter le raisonnement des agents en temps réel.`,
        tags: ["Python", "AgentSea", "Agents Autonomes", "Web Automation"],
        image: "js/Image/Dashboard Agentsea.png",
        gallery: [
            "js/Image/Brainstorming.png",
            "js/Image/Kanban Agentsea.png",
            "js/Image/Preview Fichier Agent sea.png",
            "js/Image/Task Agentsea.png"
        ],
        features: [
            "Création d'agents web autonomes",
            "Automatisation d'interactions complexes",
            "Navigation autonome"
        ],
        github: "https://github.com/Fondation-io",
        private: true,
        competences: ["Développer une solution", "Traiter des incidents"],
        codeExamples: [
            {
                title: "Initialisation d'un AgentSea",
                language: "python",
                code: `from agentsea import Agent

# Création d'un agent de navigation autonome
bot = Agent(name="WebSurfer", model="gpt-4-vision")

# Lancement d'une tâche d'automatisation
bot.navigate("https://example.com")
bot.execute_task("Trouve le formulaire de contact.")`
            }
        ]
    }
];

export const personalProjects = [
    {
        id: 4,
        title: "LinkedIn Bot",
        description: "Bot d'automatisation IA pour LinkedIn.",
        longDescription: `Ce bot d'automatisation fonctionne comme un assistant quotidien pour la publication de contenu technique sur LinkedIn.
Le processus démarre par la récupération automatique des derniers articles depuis plusieurs flux RSS, orchestrée par un script Python (news_fetcher).
Chaque article collecté est vérifié via Convex pour garantir qu'aucun contenu n'a été traité en double lors des précédentes exécutions.
Le texte de l'article est ensuite transmis à l'API de Google Gemini, qui est chargée d'en générer un résumé accrocheur et structuré pour le réseau social.
Le prompt fourni à l'IA spécifie le ton à adopter, les hashtags à inclure et la mise en forme globale du post.
Une fois le résumé généré, le module d'intégration formate la requête HTTP POST et l'envoie vers l'API REST de LinkedIn avec le jeton d'authentification.
Le script complet est orchestré par main.py, et il s'exécute automatiquement via une tâche planifiée tous les jours de la semaine à 11h.
L'ensemble est conteneurisé sous Docker, ce qui assure un environnement d'exécution stable et facilite son déploiement sur n'importe quel serveur.
Ce pipeline complet démontre une intégration réussie entre extraction de données, traitement par IA et publication via API.`,
        tags: ["Python", "IA", "Gemini", "API LinkedIn", "Docker"],
        image: "js/Image/linkedin.png",
        gallery: [
            "js/Image/Linkedin post json.png",
            "js/Image/Post linkedin.png",
            "js/Image/Docker.png"
        ],
        features: [
            "Récupération d'articles tech via RSS",
            "Génération de résumés par IA (Gemini)",
            "Publication automatique sur LinkedIn",
            "Déploiement via Docker"
        ],
        github: "https://github.com/MathieuGal/Linkedin-Manager",
        competences: ["Développer une solution", "Mettre à disposition des utilisateurs un service informatique"],
        codeExamples: [
            {
                title: "Génération du résumé via Gemini",
                language: "python",
                code: `def generate_summary(article_text):
    # Appel à l'API Gemini pour résumer l'article
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"Résume cet article tech pour LinkedIn : {article_text}"
    response = model.generate_content(prompt)
    return response.text`
            }
        ]
    },
    {
        id: 6,
        title: "NDC Space Shooter",
        description: "Jeu de tir spatial rétro développé en Python.",
        longDescription: `Ce jeu de tir spatial rétro, baptisé NDC Space Shooter, est entièrement développé en Python en utilisant le moteur de jeu 8-bits Pyxel.
La boucle principale (game loop) du programme gère à la fois la mise à jour des logiques de jeu (update) et l'affichage des graphismes à l'écran (draw).
Le système de jeu fonctionne par la création et la gestion de "vagues" infinies d'ennemis, dont la difficulté augmente progressivement au fil du temps.
Chaque entité du jeu (le vaisseau du joueur, les tirs, les ennemis, les bonus) est modélisée par des classes orientées objet.
La détection des collisions est calculée mathématiquement à chaque frame pour vérifier si un laser touche un ennemi ou si le joueur percute un obstacle.
Des power-ups sont générés aléatoirement et implémentés via un système d'états : s'ils sont récupérés, ils modifient temporairement les attributs du joueur.
L'affichage graphique respecte la contrainte des 16 couleurs imposée par Pyxel, tout en exploitant des animations par sprites.
Les fonctions audio natives de la bibliothèque sont utilisées de manière asynchrone pour déclencher des bruitages en fonction des événements du jeu.
Ce projet illustre de façon pratique les concepts d'architecture d'un jeu vidéo classique et la maîtrise de la programmation orientée objet.`,
        tags: ["Python", "Pyxel", "Game Dev", "Retro"],
        image: "js/Image/NDC base.png",
        gallery: [
            "js/Image/Ennemis.png",
            "js/Image/Game over.png",
            "js/Image/NDC base.png"
        ],
        features: [
            "Moteur de jeu fluide avec Pyxel",
            "Système de vagues infinies",
            "Power-ups et bonus variés",
            "Graphismes Pixel Art animés"
        ],
        github: "https://github.com/MathieuGal/NDC",
        competences: ["Développer une solution", "Concevoir et développer une solution applicative"],
        codeExamples: [
            {
                title: "Boucle de mise à jour Pyxel",
                language: "python",
                code: `def update(self):
    # Gestion des mouvements du vaisseau
    if pyxel.btn(pyxel.KEY_UP):
        self.player_y -= self.speed

    # Apparition aléatoire des ennemis
    if pyxel.frame_count % 30 == 0:
        self.enemies.append(Enemy(120, pyxel.rndi(0, 100)))`
            }
        ]
    }
];

export const veille = {
    sujet: "L'impact écologique de l'Intelligence Artificielle",
    outils: ["Feedly (flux RSS)", "Google Scholar", "Bon Pote", "Le Monde Informatique", "ecologie.gouv.fr", "The Conversation"],
    image: "js/Image/Pollution-numerique-IA-1024x576.jpg",
    description: `L'intelligence artificielle connaît aujourd'hui une croissance fulgurante, portée par des modèles toujours plus complexes et performants (LLMs, génération d'images, agents autonomes). Cette avancée offre des perspectives inédites dans la santé, l'automatisation et la recherche scientifique. Cependant, son développement soulève des questions quant à son coût écologique, qui mérite une analyse nuancée.

L'entraînement de modèles massifs nécessite des infrastructures considérables : des data centers équipés de milliers de GPUs fonctionnant en continu. L'Agence Internationale de l'Énergie estime que la consommation électrique des data centers pourrait doubler d'ici 2026, et l'IA générative pourrait représenter plus de 50% de cette consommation. À titre d'exemple, une requête sur un LLM consomme environ 10 fois plus d'énergie qu'une recherche Google classique.

La consommation d'eau pour le refroidissement des serveurs est également un sujet de préoccupation : Microsoft a vu son usage hydrique progresser de 34% entre 2021 et 2022, et l'entraînement de GPT-3 aurait consommé près de 700 000 litres d'eau. Toutefois, l'industrie innove avec des systèmes de refroidissement en circuit fermé, le "free cooling" (utilisation de l'air extérieur dans les régions froides), ou encore l'immersion des serveurs dans des liquides diélectriques.

Côté matériel, les puces spécialisées comme les TPUs de Google ont vu leur efficacité carbone tripler en quatre ans (TPU v4 → Trillium), et la dernière génération Ironwood est 30 fois plus efficace énergétiquement que la première TPU publique. Côté algorithmique, des techniques comme la quantification (INT8, BF16), le pruning ou la distillation de modèles (DistilBERT) permettent de réduire jusqu'à 50% la consommation tout en conservant 97% des performances.

Par ailleurs, l'IA n'est pas qu'une source de consommation : elle est aussi un outil puissant pour la transition écologique. Elle est utilisée pour piloter les réseaux électriques intelligents (smart grids), optimiser l'agriculture de précision (irrigation, dosage des intrants), et accélérer la recherche sur les nouveaux matériaux durables. En France, la stratégie nationale en IA (SNIA) finance des "démonstrateurs d'IA frugale" dans la mobilité, le bâtiment et l'agriculture.

La question centrale n'est donc pas d'arrêter le développement de l'IA, mais de l'orienter vers la "Green AI" : optimisation algorithmique, matériel spécialisé moins énergivore, énergies renouvelables, et surtout une réflexion sur la frugalité numérique — s'assurer que le déploiement d'une IA apporte une valeur qui justifie son coût énergétique.`,
    articles: [
        {
            titre: "Intelligence artificielle : le vrai coût environnemental de la course à l'IA",
            date: "2024",
            source: "Bon Pote",
            resume: "Analyse approfondie et chiffrée du coût environnemental réel de la course à l'IA générative : électricité, eau, matériaux, et limites des engagements des géants de la tech.",
            lien: "https://bonpote.com/intelligence-artificielle-le-vrai-cout-environnemental-de-la-course-a-lia/"
        },
        {
            titre: "La consommation d'eau liée à l'IA générative inquiète",
            date: "Septembre 2023",
            source: "Le Monde Informatique",
            resume: "Enquête sur la hausse de 34% de la consommation d'eau de Microsoft entre 2021 et 2022, et sur les data centers IA déployés à Des Moines (Iowa) pour entraîner les modèles d'OpenAI.",
            lien: "https://www.lemondeinformatique.fr/actualites/lire-la-consommation-d-eau-liee-a-l-ia-generative-inquiete-91508.html"
        },
        {
            titre: "Pour une intelligence artificielle durable",
            date: "2024",
            source: "Ministère de la Transition écologique",
            resume: "Position officielle française sur l'IA durable : démonstrateurs d'IA frugale, stratégie nationale SNIA et leviers pour réduire l'empreinte environnementale du secteur.",
            lien: "https://www.ecologie.gouv.fr/actualites/intelligence-artificielle-durable"
        },
        {
            titre: "TPUs improved carbon-efficiency of AI workloads by 3x",
            date: "2024",
            source: "Google Cloud Blog",
            resume: "Étude de Google démontrant comment les puces TPU ont vu leur efficacité carbone tripler en quatre ans (de TPU v4 à Trillium), avec une analyse de cycle de vie complète.",
            lien: "https://cloud.google.com/blog/topics/sustainability/tpus-improved-carbon-efficiency-of-ai-workloads-by-3x"
        },
        {
            titre: "L'IA générative est-elle soutenable ? Le vrai coût écologique d'un prompt",
            date: "Décembre 2025",
            source: "The Conversation",
            resume: "Analyse académique vulgarisée du coût écologique réel d'une simple requête envoyée à une IA générative, et des leviers techniques pour réduire ce coût.",
            lien: "https://theconversation.com/lia-generative-est-elle-soutenable-le-vrai-cout-ecologique-dun-prompt-269432"
        },
        {
            titre: "Transition écologique : 12 projets où l'IA change la donne",
            date: "2024",
            source: "IGN",
            resume: "Tour d'horizon de projets concrets où l'IA contribue à la transition écologique : cartographie des forêts, suivi de la biodiversité, gestion des risques naturels, agriculture de précision.",
            lien: "https://www.ign.fr/mag/transition-ecologique-12-projets-ou-lia-change-la-donne"
        }
    ],
    projets: [
        {
            id: 2,
            title: "Scanner de Flux RSS Intelligent",
            description: "Veille automatisée grâce aux flux RSS.",
            longDescription: `Ce scanner intelligent est un outil de veille technologique automatisé qui scrute quotidiennement des centaines de flux RSS.
Son cœur de fonctionnement repose sur un parseur OPML chargé d'importer et d'organiser dynamiquement les différentes sources d'information.
Pour maximiser l'efficacité, un "fetcher" concurrent basé sur un ThreadPoolExecutor récupère les articles de façon asynchrone en parallèle.
Une fois les données acquises, un algorithme de déduplication analyse le contenu brut pour écarter systématiquement tout article identique déjà traité.
Un module de filtrage s'active ensuite en utilisant des mots-clés prédéfinis afin d'isoler uniquement l'information pertinente pour la veille.
En cas d'échec de connexion réseau sur un flux, le système intègre un mécanisme de "retry with exponential backoff" assurant sa résilience.
L'ensemble est formaté pour extraire la date, le titre, le corps du texte complet et l'auteur de façon normalisée (ISO 8601).
Le résultat final produit est exporté proprement en format Markdown ou JSON afin de faciliter sa lecture ou son intégration dans d'autres plateformes.
Ce projet apporte une solution technique optimisée aux problématiques de récupération et de traitement de données textuelles à grand volume.`,
            tags: ["Python", "RSS", "Data Parsing", "Backend"],
            image: "js/Image/RSS-4.jpg",
            gallery: [],
            features: [
                "Agrégation multi-sources de flux RSS",
                "Filtrage intelligent par mots-clés et pertinence",
                "Déduplication automatique des articles",
                "Export et notification des veilles qualifiées"
            ],
            github: "",
            competences: ["Gérer le patrimoine informatique", "Organiser son développement professionnel"],
            codeExamples: [
                {
                    title: "Filtrage et déduplication",
                    language: "python",
                    code: `def filter_and_deduplicate(articles, existing_urls):
    filtered = []
    for article in articles:
        # Vérifie si l'URL est nouvelle
        if article.link not in existing_urls:
            filtered.append(article)
            existing_urls.add(article.link)
    return filtered`
                }
            ]
        }
    ]
};

export const epreuves = {
    e4: [
        {
            id: 101,
            title: "Projet Bourse",
            description: "Application de gestion et simulation boursière.",
            longDescription: `Ce projet Bourse est une application web métier, programmée en PHP natif selon l'architecture logicielle standard Modèle-Vue-Contrôleur (MVC).
Le fonctionnement débute au niveau des contrôleurs, qui interceptent les requêtes des utilisateurs, telles que l'ajout ou la vente d'une action.
Les modèles entrent ensuite en jeu pour interroger la base de données relationnelle MySQL (via PDO) ou consommer les API financières externes.
Lorsque qu'un actif est affiché sur le tableau de bord, une synchronisation en temps réel s'opère pour récupérer dynamiquement son cours boursier actuel.
Afin de ne pas dépasser les quotas stricts des API externes, le système met en cache les cotations pendant quelques minutes avant d'exiger un rafraîchissement.
Un moteur de calcul interne traduit instantanément les fluctuations de prix en plus-values ou moins-values exprimées en pourcentages.
Toutes les interactions au sein de l'application sont protégées par des mécanismes de sécurité comme le hachage des mots de passe ou les requêtes préparées.
Côté interface utilisateur, la vue récupère les données calculées et génère dynamiquement des graphiques de la répartition des actifs.
Cette gestion centralisée offre aux utilisateurs un environnement complet pour suivre et optimiser virtuellement leurs stratégies d'investissement.`,
            tags: ["PHP", "MVC", "MySQL", "API REST", "Finance"],
            image: "assets/img/projets/placeholder-bourse.jpg",
            gallery: [],
            features: [
                "Suivi des cours en temps réel via API",
                "Gestion de portefeuille virtuel",
                "Calcul automatique des gains/pertes",
                "Graphiques d'évolution des actifs"
            ],
            github: "https://github.com/MathieuGal/Projet-Bourse",
            competences: ["Concevoir et développer une solution applicative", "Gérer les données"],
            equipe: ["Mathieu Gallienne", "Amory Danvy"],
            codeExamples: [
                {
                    title: "Appel API et mise en cache du cours",
                    language: "php",
                    code: `public function getStockPrice($symbol) {
    if ($this->cache->has($symbol)) {
        return $this->cache->get($symbol);
    }

    // Appel API externe si absent du cache
    $response = file_get_contents("https://api.finnhub.io/api/v1/quote?symbol=$symbol");
    $price = json_decode($response)->c;

    // Mise en cache pour soulager l'API
    $this->cache->set($symbol, $price, 300);
    return $price;
}`
                }
            ]
        },
        {
            id: 102,
            title: "ArtisanConnect",
            description: "Mise en relation entre artisans et clients.",
            longDescription: `ArtisanConnect est une plateforme d'intermédiation sur mesure visant à digitaliser le lien entre les professionnels artisans et les particuliers locaux.
La mécanique du site repose sur une architecture PHP qui attribue des profils et des droits distincts dans la base de données.
Lors de la navigation, le moteur de recherche interne exécute des requêtes SQL croisées avec des filtres par métier, localisation et disponibilité.
Lorsqu'un visiteur souhaite un service, l'application génère un créneau de rendez-vous stocké et associé à l'identifiant des deux parties concernées.
Un module de messagerie instantanée, basé sur des insertions en base de données et des affichages asynchrones, garantit un échange direct et mémorisé.
Toutes les données sensibles transitent par des variables de session (PHP $_SESSION) permettant d'isoler l'espace membre.
La logique de validation des formulaires back-end effectue un nettoyage préventif (fonction "securiser") afin de bloquer les vulnérabilités XSS.
Les catégories de services sont dynamiquement instanciées depuis MySQL, assurant qu'un artisan puisse toujours choisir une spécialité mise à jour.
Ce projet met particulièrement l'accent sur les flux de communication multi-utilisateurs et le maintien de la consistance des données hébergées.`,
            tags: ["PHP", "MySQL", "CSS", "Responsive"],
            image: "assets/img/projets/placeholder-artisans.jpg",
            gallery: [],
            features: [
                "Annuaire des artisans par catégorie",
                "Système de prise de rendez-vous",
                "Messagerie intégrée",
                "Tableaux de bord personnalisés"
            ],
            github: "https://github.com/MathieuGal/Projet-Sites-Artisan",
            competences: ["Concevoir et développer une solution applicative", "Traiter des incidents"],
            equipe: ["Mathieu Gallienne"],
            codeExamples: [
                {
                    title: "Recherche sécurisée d'artisans",
                    language: "php",
                    code: `function searchArtisans($category_id, $pdo) {
    // Requête préparée pour chercher un artisan
    $sql = "SELECT nom, entreprise FROM artisans WHERE categorie_id = :catId";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['catId' => $category_id]);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}`
                }
            ]
        },
        {
            id: 103,
            title: "Patrimonia",
            description: "Application de gestion de patrimoine personnel (binôme).",
            longDescription: `Patrimonia est une application web full-stack conçue pour permettre à un utilisateur de centraliser et suivre l'évolution de l'ensemble de son patrimoine personnel.
Le front-end est développé en React avec Vite comme bundler et Tailwind CSS pour la mise en forme, ce qui assure des temps de chargement courts et une interface responsive.
Côté serveur, une API REST construite avec Node.js et Express expose les routes nécessaires (authentification, CRUD sur les actifs, calculs d'agrégats).
La persistance des données est assurée par une base SQLite, choisie pour sa simplicité de déploiement et sa portabilité dans un conteneur Docker.
L'authentification est gérée via JSON Web Tokens : le serveur signe un token à la connexion, le client le stocke et l'envoie à chaque requête protégée.
Le code est organisé en couches (routes, contrôleurs, services, modèles) afin de séparer clairement la logique métier de l'accès aux données.
L'ensemble du projet est conteneurisé avec Docker pour garantir un environnement reproductible entre les machines de développement et un éventuel serveur de production.
Le travail a été mené en binôme avec Amory Danvy, en utilisant Git et GitHub pour la collaboration (branches, pull requests, revues croisées).
Ce projet a permis de découvrir l'architecture client-serveur moderne et de pratiquer la mise en place d'une chaîne complète, du composant React jusqu'à la base SQLite.`,
            tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "SQLite", "JWT", "Docker"],
            image: "js/Image/patrimonia-dashboard.png",
            gallery: [
                "js/Image/patrimonia-dashboard.png",
                "js/Image/patrimonia-simulateur.png",
                "js/Image/patrimonia-bilan.png"
            ],
            features: [
                "Tableau de bord du patrimoine global",
                "Suivi des actifs (immobilier, comptes, placements)",
                "Authentification sécurisée par JWT",
                "API REST Node.js / Express + SQLite",
                "Déploiement conteneurisé via Docker"
            ],
            github: "https://github.com/amory-danvy/Patrimonia",
            competences: ["Concevoir et développer une solution applicative", "Travailler en mode projet"],
            equipe: ["Mathieu Gallienne", "Amory Danvy"],
            codeExamples: [
                {
                    title: "Middleware d'authentification JWT (Express)",
                    language: "javascript",
                    code: `function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "Token manquant" });

    const token = header.split(" ")[1];
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ error: "Token invalide" });
    }
}`
                }
            ]
        }
    ]
};

export const formation = {
    ecole: "Lycée Louis Bascan — Rambouillet",
    option: "SLAM (Solutions Logicielles et Applications Métiers)",
    annees: "Depuis 2024 (en alternance)",
    description: "Le BTS SIO forme aux métiers de l'informatique. L'option SLAM est centrée sur la conception, le développement et la maintenance d'applications logicielles. Modules suivis : développement (Python, C#), gestion de bases de données, projets professionnels en équipe.",
    diplomes: [
        {
            titre: "BTS Services Informatiques aux Organisations — Option SLAM",
            etablissement: "Lycée Louis Bascan, Rambouillet",
            periode: "Depuis 2024",
            modalite: "En alternance",
            details: [
                "Découverte et programmation en C#",
                "Formation à l'utilisation de Python",
                "Développement de projets professionnels",
                "Gestion de bases de données"
            ]
        },
        {
            titre: "Baccalauréat Général",
            etablissement: "Lycée Louis Bascan, Rambouillet",
            periode: "2021 - 2024",
            modalite: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques)",
            details: []
        }
    ],
    experiences: [
        {
            poste: "Alternance — Développement informatique",
            entreprise: "Siccardi Tech-Leads, Rambouillet",
            periode: "Depuis 2024",
            missions: [
                "Développement de projets en équipe",
                "Maintenance de logiciels",
                "Tests automatisés",
                "Recherche & Développement",
                "Développements assistés par l'IA"
            ]
        },
        {
            poste: "Stage de 3ème",
            entreprise: "Razel Bec — Groupe Fayat, Saclay",
            periode: "2021",
            missions: [
                "Réinitialisation de PC professionnels au sein du service informatique",
                "Découverte des différents services de l'entreprise (graphique, géologie, mécanique, RH)"
            ]
        }
    ]
};

// Réalisations en milieu professionnel (alternance Fondation.io / Siccardi Tech-Leads)
// Dépos privés entreprise — pas de lien GitHub public
export const projetsPro = [];
