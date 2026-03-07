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
        github: "https://github.com/Fondation-io/Testing_Claude_code",
        competences: ["Développer une solution", "Gérer le patrimoine informatique"],
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
        github: "https://github.com/Fondation-io/agentsea",
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
            "js/Image/Docker.png",
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
        image: "assets/img/projets/placeholder-ndc.jpg",
        gallery: [],
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
    outils: ["Google Scholar", "MIT Tech Review", "Rapports ADEME", "Revues Scientifiques"],
    image: "js/Image/Pollution-numerique-IA-1024x576.jpg",
    description: `L'intelligence artificielle connaît aujourd'hui une croissance fulgurante, portée par des modèles toujours plus complexes et performants (LLMs, génération d'images, etc.). Cette avancée offre des perspectives inédites dans la santé, l'automatisation, ou encore la recherche scientifique. Cependant, son développement soulève logiquement des questions quant à son coût écologique, qui mérite une analyse nuancée.

Il est indéniable que l'entraînement de modèles massifs nécessite des infrastructures importantes, principalement des data centers équipés de milliers de GPUs fonctionnant en continu. Cette demande en puissance de calcul se traduit par une consommation électrique substantielle. Toutefois, l'industrie prend la mesure du problème et innove. De plus en plus de data centers sont alimentés, partiellement ou totalement, par des énergies renouvelables (solaire, éolien, hydroélectrique), réduisant significativement leur empreinte carbone par rapport aux estimations basées sur le mix énergétique mondial moyen.

Concernant la consommation d'eau, souvent pointée du doigt pour le refroidissement des serveurs, la réalité technique est également en pleine mutation. Si les systèmes de refroidissement par évaporation traditionnels consommaient beaucoup d'eau potable, de nombreux data centers modernes déploient désormais des systèmes de refroidissement en circuit fermé. Ces installations réutilisent la même eau indéfiniment, annulant presque totalement le gaspillage des ressources hydriques locales. D'autres approches, comme le "free cooling" (utilisation de l'air extérieur dans les régions froides) ou l'immersion des serveurs dans des liquides diélectriques, repoussent encore l'efficacité énergétique (PUE).

Par ailleurs, l'IA n'est pas qu'une source de consommation : elle s'avère être un outil puissant pour la transition écologique. Elle est massivement employée pour optimiser les réseaux électriques (smart grids), améliorer les rendements agricoles sans surconsommation d'eau, ou encore concevoir de nouveaux matériaux plus durables.

La question centrale n'est donc pas d'arrêter le développement de l'IA, mais de l'orienter vers la "Green AI". Cela implique un effort constant sur l'optimisation des algorithmes (des modèles plus petits et efficaces), l'amélioration de l'efficacité matérielle (puces spécialisées moins énergivores comme les TPUs), et une réflexion sur la "frugalité numérique" : s'assurer que le déploiement d'une IA pour un cas d'usage précis apporte une valeur qui justifie son coût énergétique.`,
    articles: [
        {
            titre: "Évaluer la vraie consommation d'eau et d'énergie de l'IA",
            date: "Janvier 2024",
            source: "GreenIT",
            resume: "Une analyse nuancée sur les innovations dans le refroidissement des data centers (circuits fermés) et l'utilisation croissante d'énergies renouvelables.",
            lien: "#"
        },
        {
            titre: "Comment l'IA peut aider à résoudre la crise climatique",
            date: "Décembre 2023",
            source: "World Economic Forum",
            resume: "Aperçu des technologies d'IA utilisées pour optimiser les réseaux électriques, la logistique et l'agriculture de précision.",
            lien: "#"
        },
        {
            titre: "Efficiency and Carbon Footprint of Machine Learning",
            date: "Novembre 2023",
            source: "Google Research",
            resume: "Étude interne de Google démontrant comment les puces spécialisées (TPUs) et le mix énergétique réduisent massivement les émissions liées à l'entraînement des modèles.",
            lien: "#"
        },
        {
            titre: "Les promesses de la Green AI",
            date: "Février 2024",
            source: "CNRS - Le Journal",
            resume: "Tour d'horizon des recherches visant à rendre les algorithmes d'apprentissage profond moins gourmands en calcul tout en conservant leurs performances.",
            lien: "#"
        },
        {
            titre: "Vers des data centers éco-responsables",
            date: "Octobre 2023",
            source: "Techniques de l'Ingénieur",
            resume: "Focus technique sur le \"Free cooling\", l'immersion des serveurs, et la récupération de chaleur fatale des data centers pour le chauffage urbain.",
            lien: "#"
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
            github: "https://github.com/Fondation-io/RSSScanner",
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
            github: "https://github.com/MathieuGal/Projet-sites-artisans-BTS-SIO",
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
        }
    ]
};

export const formation = {
    ecole: "Lycée Louis Bascan",
    option: "SLAM (Solutions Logicielles et Applications Métiers)",
    annees: "2024 - 2026",
    description: "Le BTS SIO forme aux métiers de l'informatique. L'option SLAM est centrée sur la conception et la maintenance de programmes applicatifs."
};
