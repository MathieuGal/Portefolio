// Données du Portfolio BTS SIO SLAM
// C'est ici que vous modifiez le contenu de votre site !

export const personalInfo = {
    name: "Mathieu Gallienne", // Remplacez par votre nom complet
    title: "Étudiant BTS SIO - Option SLAM",
    heroTitle: "Développeur d'applications en devenir",
    heroDescription: "Passionné par le développement. BTS SIO option Solutions Logicielles et Applications Métiers.",
    email: "mathieugallienne@orange.fr",
    github: "https://github.com/MathieuGal",
    linkedin: "https://www.linkedin.com/in/mathieu-gallienne-54a992318/",
    cvLink: "assets/documents/cv.pdf"
};

export const skills = [
    { name: "HTML5 / CSS3", level: 90, icon: "fa-html5" },
    { name: "JavaScript", level: 75, icon: "fa-js" },
    { name: "PHP / Symfony", level: 70, icon: "fa-php" },
    { name: "SQL / MySQL", level: 80, icon: "fa-database" },
    { name: "Git / GitHub", level: 85, icon: "fa-git-alt" },
    { name: "Java", level: 60, icon: "fa-java" }
];

export const projects = [
    {
        id: 1,
        title: "Comparateur d'IA Automatisé",
        description: "Comparaison automatisé d'IA et analyse de performance.",
        longDescription: `Développement d'un framework de test automatisé permettant d'évaluer et de comparer les réponses de plusieurs LLMs (Claude, GPT, Gemini, etc.) sur des jeux de données standardisés. Ce projet répond à un besoin concret : comment choisir objectivement le bon modèle d'IA pour un cas d'usage spécifique ?

Le système exécute des batteries de tests en parallèle sur différents modèles, mesure les temps de réponse, analyse la qualité des outputs et génère des rapports comparatifs détaillés. L'architecture modulaire permet d'ajouter facilement de nouveaux modèles ou critères d'évaluation.

Points techniques clés :
• Gestion asynchrone des appels API pour optimiser les performances
• Système de scoring multi-critères (pertinence, cohérence, temps de réponse)
• Export des résultats en formats JSON et CSV pour analyse approfondie
• Interface CLI intuitive pour lancer les benchmarks`,
        tags: ["Python", "API LLM", "Automation", "Data Analysis"],
        image: "assets/img/projets/placeholder-ai.jpg",
        gallery: [],
        features: [
            "Exécution de prompts en parallèle sur plusieurs modèles",
            "Analyse comparative des temps de réponse et de la qualité",
            "Génération automatique de rapports de benchmark",
            "Interface de visualisation des résultats"
        ],
        github: "https://github.com/Fondation-io/Testing_Claude_code",
        competences: ["Développer une solution", "Gérer le patrimoine informatique"],
        codeExamples: [
            {
                title: "Script principal - Orchestration des tests",
                language: "python",
                code: `def main():
    """Fonction principale du framework de test"""
    args = parse_arguments()

    # Initialiser le système d'agents
    initialize_default_agents()

    # Afficher les agents disponibles si demandé
    if args.list_agents:
        agent_info = get_agent_info_summary()
        for agent_name, info in agent_info["agents"].items():
            status = "✓" if info["available"] else "✗"
            logger.info(f"  {status} {info['display_name']}")
            logger.info(f"    Formats: {', '.join(info['supported_formats'])}")
            logger.info(f"    Timeout: {info['default_timeout']}s")
        return

    # Parser le fichier CSV des tâches
    repos_data = parse_csv_file(args.csv)

    # Traiter chaque repository
    all_results = []
    for repo_count, repo_data in enumerate(repos_data, 1):
        logger.info(f"Processing {repo_count}/{len(repos_data)}")
        results = process_repo(
            repo_data, args.max_instances, args.output,
            args.timeout, args.evaluate, args.agent
        )
        all_results.append((repo_data['name'], results))

    # Créer les agrégations JSON
    create_json_aggregations(all_results, args.output)`
            },
            {
                title: "Agrégation des résultats en JSON",
                language: "python",
                code: `def create_json_aggregations(all_results, output_dir):
    """Crée les fichiers JSON d'agrégation des résultats"""
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    global_data = {
        "timestamp": timestamp,
        "total_repos": len(all_results),
        "repositories": []
    }

    for repo_name, results in all_results:
        repo_conversations = []

        for task_num, success, scores, justifications in results:
            json_file = os.path.join(
                output_dir,
                f"conversation_{sanitize_filename(repo_name)}_task{task_num}.json"
            )

            if os.path.exists(json_file):
                with open(json_file, 'r', encoding='utf-8') as f:
                    conversation_data = json.load(f)
                    conversation_data['evaluation'] = {
                        'success': success,
                        'scores': scores,
                        'justifications': justifications
                    }
                    repo_conversations.append(conversation_data)

        # Sauvegarder le JSON par repo
        repo_data = {
            "repo_name": repo_name,
            "timestamp": timestamp,
            "conversations": repo_conversations
        }
        global_data["repositories"].append(repo_data)

    # Sauvegarder le JSON global
    with open(os.path.join(output_dir, "all_complete.json"), 'w') as f:
        json.dump(global_data, f, indent=2, ensure_ascii=False)`
            }
        ]
    },
    {
        id: 3,
        title: "AgentSea",
        description: "Intégration et développement d'agents autonomes naviguant sur le web.",
        longDescription: `Mise en œuvre d'outils et d'agents pour l'interaction automatisée avec des interfaces web en utilisant la technologie AgentSea. Le projet se focalise sur la création d'agents capables de comprendre et d'interagir avec le web.`,
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
        github: "https://github.com/Fondation-io/agentsea",
        competences: ["Développer une solution", "Traiter des incidents"]
    }
];

export const personalProjects = [
    {
        id: 4,
        title: "LinkedIn Bot",
        description: "Bot d'automatisation IA pour LinkedIn.",
        longDescription: "Bot qui publie automatiquement sur LinkedIn un résumé d'article tech généré par IA (Gemini), du lundi au vendredi à 11h00.\n\nArchitecture technique :\n• main.py : orchestrateur et planificateur\n• news_fetcher.py : récupération d'articles RSS et déduplication via Convex\n• content_generator.py : génération via l'API Google Gemini\n• linkedin_api.py : interaction avec l'API REST v2 de LinkedIn\n\nLe projet est entièrement conteneurisé avec Docker pour faciliter le déploiement.",
        tags: ["Python", "IA", "Gemini", "API LinkedIn", "Docker"],
        image: "assets/img/projets/placeholder-ai.jpg",
        gallery: [],
        features: [
            "Récupération d'articles tech via RSS",
            "Génération de résumés par IA (Gemini)",
            "Publication automatique sur LinkedIn",
            "Déploiement via Docker"
        ],
        github: "https://github.com/MathieuGal/Linkedin-Manager",
        competences: ["Développer une solution", "Mettre à disposition des utilisateurs un service informatique"]
    },
    {
        id: 6,
        title: "NDC Space Shooter",
        description: "Jeu de tir spatial rétro développé en Python.",
        longDescription: "Un Shoot'em Up classique développé avec la librairie Pyxel. Le joueur contrôle un vaisseau, affronte des vagues d'ennemis infinies et collecte des power-ups dans un style pixel-art rétro.",
        tags: ["Python", "Pyxel", "Game Dev", "Retro"],
        image: "assets/img/projets/placeholder-ndc.jpg",
        gallery: [],
        features: [
            "Moteur de jeu fluide avec Pyxel",
            "Système de vagues infinies",
            "Power-ups et bonus variés",
            "Graphismes Pixel Art animés"
        ],
        github: "https://github.com/MathieuGal/NDC",
        competences: ["Développer une solution", "Concevoir et développer une solution applicative"]
    }
];

export const veille = {
    sujet: "L'Intelligence Artificielle dans le développement web",
    outils: ["Feedly", "Twitter", "Dev.to"],
    articles: [
        {
            titre: "Comment l'IA change la façon dont nous codons",
            date: "15/10/2023",
            source: "Dev.to",
            resume: "Analyse de l'impact de Copilot et ChatGPT sur la productivité des développeurs.",
            lien: "#"
        },
        {
            titre: "L'avenir du SEO avec l'IA",
            date: "22/09/2023",
            source: "Blog Google",
            resume: "Comprendre comment les moteurs de recherche évoluent.",
            lien: "#"
        }
    ],
    projets: [
        {
            id: 2,
            title: "Scanner de Flux RSS Intelligent",
            description: "Veille automatisée grâce aux flux RSS.",
            longDescription: `Outil de veille technologique complet qui automatise la collecte, l'agrégation et le filtrage d'informations depuis des centaines de flux RSS. Ce projet répond à un besoin concret : rester informé des dernières avancées technologiques sans être submergé par le volume d'information.

Architecture technique :
• Parser OPML pour importer des listes de flux organisées par catégories
• Fetcher concurrent avec ThreadPoolExecutor pour récupérer les articles en parallèle
• Système de retry avec backoff exponentiel pour gérer les erreurs réseau
• Déduplicateur intelligent basé sur le contenu pour éviter les doublons
• Analyseur de contenu optionnel utilisant l'IA pour évaluer la pertinence

Le système gère plusieurs formats de date (RFC 822, ISO 8601), extrait le contenu complet des articles quand disponible, et stocke les résultats en Markdown ou JSON pour exploitation ultérieure.

Points forts : gestion robuste des erreurs, logging détaillé, architecture modulaire permettant d'ajouter facilement de nouvelles sources ou analyseurs.`,
            tags: ["Python", "RSS", "Data Parsing", "Backend"],
            image: "assets/img/projets/placeholder-rss.jpg",
            gallery: [],
            features: [
                "Agrégation multi-sources de flux RSS",
                "Filtrage intelligent par mots-clés et pertinence",
                "Déduplication automatique des articles",
                "Export et notification des veilles qualifiées"
            ],
            github: "https://github.com/Fondation-io/RSSScanner",
            competences: ["Gérer le patrimoine informatique", "Organiser son développement professionnel"],
            codeExamples: [
                {
                    title: "Récupération concurrente des flux RSS",
                    language: "python",
                    code: `def fetch_articles(feeds: List[Feed], max_workers: int = 10) -> List[Article]:
    """Récupère les articles depuis une liste de flux en parallèle"""
    all_articles = []

    logger.info(f"Fetching from {len(feeds)} feeds with {max_workers} workers")

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Créer les futures pour chaque flux
        future_to_feed = {
            executor.submit(fetch_single_feed, feed): feed
            for feed in feeds
        }

        # Collecter les résultats au fur et à mesure
        for future in as_completed(future_to_feed):
            feed = future_to_feed[future]
            try:
                articles = future.result()
                logger.info(f"Fetched {len(articles)} articles from {feed.title}")
                all_articles.extend(articles)
            except Exception as e:
                logger.error(f"Error with feed {feed.url}: {e}")

    logger.info(f"Total: {len(all_articles)} articles fetched")
    return all_articles`
                },
                {
                    title: "Parsing d'un flux avec retry",
                    language: "python",
                    code: `def fetch_single_feed(feed: Feed, max_retries: int = 3) -> List[Article]:
    """Récupère un flux avec gestion des erreurs et retry"""
    articles = []
    retries = 0

    while retries < max_retries:
        try:
            parsed = feedparser.parse(feed.url)

            if hasattr(parsed, 'status') and parsed.status >= 400:
                retries += 1
                time.sleep(2 ** retries)  # Backoff exponentiel
                continue

            for entry in parsed.entries:
                # Extraire le contenu (plusieurs sources possibles)
                content = ""
                if hasattr(entry, 'content') and entry.content:
                    content = entry.content[0].get('value', '')
                elif hasattr(entry, 'description'):
                    content = entry.description

                article = Article(
                    id=entry.get('id', entry.link),
                    title=entry.get('title', ''),
                    link=entry.get('link', ''),
                    published=parse_date(entry.get('published', '')),
                    content=content,
                    feed_title=feed.title
                )
                articles.append(article)

            return articles

        except Exception as e:
            logger.error(f"Error fetching {feed.url}: {e}")
            retries += 1
            time.sleep(2 ** retries)

    return articles`
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
            longDescription: `Application web complète de gestion de portefeuille boursier développée en PHP avec architecture MVC. Ce projet de groupe (réalisé avec Amory Danvy) permet aux utilisateurs de simuler des investissements boursiers avec des données en temps réel.

Fonctionnalités principales :
• Authentification sécurisée avec hash de mot de passe (password_hash/verify)
• Gestion complète des positions : ajout, modification, suppression (CRUD)
• Récupération des cours en temps réel via APIs Twelve Data et Finnhub
• Système de cache intelligent pour optimiser les appels API
• Calcul automatique des plus-values/moins-values et performance du portefeuille
• Dashboard avec visualisation graphique de la répartition des actifs

Architecture technique :
• Pattern MVC strict avec séparation Controllers/Models/Views
• Requêtes préparées PDO pour la sécurité SQL
• Validation côté serveur de toutes les entrées utilisateur
• Système de messages flash pour le feedback utilisateur
• Fallback avec simulation de prix si les APIs sont indisponibles`,
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
                    title: "Model Position - Calcul de performance",
                    language: "php",
                    code: `/**
 * Récupère les positions avec calcul des gains/pertes
 */
public function getPositionsWithPerformance($userId) {
    $positions = $this->findByUserId($userId);

    foreach ($positions as &$position) {
        // Récupérer le prix actuel (API ou cache)
        $currentPrice = $this->getCurrentPrice(
            $position['symbol'],
            $position['buy_price']
        );

        // Calcul de l'investissement initial
        $investment = $position['quantity'] * $position['buy_price'];

        // Calcul de la valeur actuelle
        $currentValue = $position['quantity'] * $currentPrice;

        // Calcul du gain/perte
        $profitLoss = $currentValue - $investment;
        $profitLossPercent = ($investment > 0)
            ? ($profitLoss / $investment) * 100 : 0;

        // Enrichir la position
        $position['current_price'] = $currentPrice;
        $position['investment'] = round($investment, 2);
        $position['current_value'] = round($currentValue, 2);
        $position['profit_loss'] = round($profitLoss, 2);
        $position['profit_loss_percent'] = round($profitLossPercent, 2);
        $position['is_profit'] = $profitLoss >= 0;
    }

    return $positions;
}`
                },
                {
                    title: "Controller - Ajout de position sécurisé",
                    language: "php",
                    code: `/**
 * Traite l'ajout d'une nouvelle position
 */
public function add() {
    requireAuth();  // Vérifier l'authentification

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        redirect('/index.php?page=add-position');
    }

    $userId = getCurrentUserId();

    // Récupération et nettoyage des données
    $symbol = strtoupper(cleanInput($_POST['symbol'] ?? ''));
    $quantity = floatval($_POST['quantity'] ?? 0);
    $buyPrice = floatval($_POST['buy_price'] ?? 0);
    $purchaseDate = cleanInput($_POST['purchase_date'] ?? '');

    // Validations
    if (empty($symbol) || $quantity <= 0 || $buyPrice <= 0) {
        setFlashMessage('error', 'Données invalides.');
        redirect('/index.php?page=add-position');
    }

    if (strlen($symbol) > 10) {
        setFlashMessage('error', 'Symbole trop long (max 10 car.)');
        redirect('/index.php?page=add-position');
    }

    // Création via le model
    $positionId = $this->positionModel->create(
        $userId, $symbol, $quantity, $buyPrice, $purchaseDate
    );

    if ($positionId) {
        setFlashMessage('success', 'Position ajoutée !');
        redirect('/index.php?page=dashboard');
    }
}`
                }
            ]
        },
        {
            id: 102,
            title: "ArtisanConnect",
            description: "Mise en relation entre artisans et clients.",
            longDescription: `Plateforme web de mise en relation entre artisans et particuliers, développée en solo. Ce projet implémente une application complète avec gestion des utilisateurs, système de rendez-vous et messagerie intégrée.

L'application distingue deux types d'utilisateurs :
• Clients : recherche d'artisans, prise de rendez-vous, messagerie
• Artisans : gestion du profil professionnel, planning de rendez-vous, réponse aux demandes

Fonctionnalités développées :
• Système d'inscription/connexion avec validation des données
• Tableau de bord personnalisé selon le type d'utilisateur
• Moteur de recherche d'artisans par spécialité et localisation
• Système de rendez-vous avec créneaux horaires
• Messagerie temps réel entre clients et artisans
• Affichage des catégories de services depuis la base de données

Points techniques :
• Architecture PHP procédurale avec fonctions réutilisables
• Connexion PDO avec gestion des erreurs
• Sessions PHP pour l'authentification
• CSS responsive avec variables CSS personnalisées
• Sécurisation XSS avec fonction securiser() systématique`,
            tags: ["PHP", "MySQL", "CSS", "Responsive"],
            image: "assets/img/projets/placeholder-artisans.jpg",
            gallery: [],
            features: [
                "Annuaire des artisans par catégorie",
                "Système de prise de rendez-vous",
                "Messagerie intégrée",
                "Tableaux de bord personnalisés"
            ],
            github: "https://github.com/MathieuGal/Projet-sites-artisans-BTS-SIO",
            competences: ["Concevoir et développer une solution applicative", "Traiter des incidents"],
            equipe: ["Mathieu Gallienne"],
            codeExamples: [
                {
                    title: "Page d'accueil avec catégories dynamiques",
                    language: "php",
                    code: `<?php
require_once 'config/database.php';
?>
<!-- Section catégories de services -->
<h2>Nos catégories de services</h2>

<?php
try {
    // Récupération des catégories depuis la BDD
    $stmt = $pdo->query(
        "SELECT * FROM categories_services ORDER BY nom_categorie"
    );
    $categories = $stmt->fetchAll();
} catch (PDOException $e) {
    $categories = [];
}
?>

<div class="grid">
    <?php if (!empty($categories)): ?>
        <?php foreach ($categories as $categorie): ?>
            <div class="card">
                <h3><?= securiser($categorie['nom_categorie']) ?></h3>
                <p><?= securiser($categorie['description']) ?></p>
            </div>
        <?php endforeach; ?>
    <?php else: ?>
        <p>Aucune catégorie disponible.</p>
    <?php endif; ?>
</div>

<!-- Navigation conditionnelle -->
<?php if (estConnecte()): ?>
    <a href="dashboard.php">Accéder à mon espace</a>
<?php else: ?>
    <a href="inscription.php">Créer un compte gratuitement</a>
<?php endif; ?>`
                }
            ]
        }
    ]
};

export const formation = {
    ecole: "Lycée Louis Bascan",
    option: "SLAM (Solutions Logicielles et Applications Métiers)",
    annees: "2024 - 2026",
    description: "Le BTS SIO forme aux métiers de l'informatique. L'option SLAM est centrée sur la conception et la maintenance de programmes applicatifs."
};
