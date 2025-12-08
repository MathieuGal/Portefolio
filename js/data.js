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
        longDescription: "Développement d'un framework de test automatisé permettant d'évaluer et de comparer les réponses de plusieurs LLMs (Claude, GPT, etc.) sur des jeux de données standardisés. Ce projet vise à objectiver le choix des modèles pour différents cas d'usage.",
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
        competences: ["Développer une solution", "Gérer le patrimoine informatique"]
    },
    {
        id: 3,
        title: "Agent de Recherche IA (CrewAI)",
        description: "Découverte et test d'outils d'IA via agents autonomes.",
        longDescription: "Mise en œuvre d'une architecture multi-agents avec CrewAI pour automatiser la recherche, la découverte et le testing de nouveaux outils d'intelligence artificielle. Les agents collaborent pour explorer le web et synthétiser les trouvailles.",
        tags: ["Python", "CrewAI", "Agents Autonomes", "LangChain"],
        image: "assets/img/projets/placeholder-crewai.jpg",
        gallery: [],
        features: [
            "Orchestration d'agents autonomes avec rôles définis",
            "Recherche web automatisée et ciblée",
            "Synthèse et classification des outils découverts",
            "Scénarios de test automatisés pour les outils"
        ],
        github: "https://github.com/Fondation-io/crewai-recherches-Mathieu",
        competences: ["Développer une solution", "Traiter des incidents"]
    }
];

export const personalProjects = [
    {
        id: 4,
        title: "Bot de Pêche Minecraft",
        description: "Bot de pêche automatique avec détection audio/visuelle et QTE.",
        longDescription: "Un bot sophistiqué pour Minecraft qui automatise la pêche. Il utilise l'analyse audio (WASAPI loopback) ou visuelle (OpenCV) pour détecter les poissons et gère automatiquement les QTE (Quick Time Events) complexes.",
        tags: ["Python", "OpenCV", "Automation", "Audio Processing"],
        image: "assets/img/projets/placeholder-fish.jpg",
        gallery: [],
        features: [
            "Détection audio sans micro (WASAPI)",
            "Résolution automatique des QTE visuels",
            "Statistiques en temps réel",
            "Simulation de comportement humain"
        ],
        github: "https://github.com/MathieuGal/Auto-fish-bot",
        competences: ["Développer une solution", "Gérer le patrimoine informatique"]
    },
    {
        id: 5,
        title: "Vanadia Vote Bot",
        description: "Bot de vote automatique avec gestion de captcha.",
        longDescription: "Automatisation du processus de vote pour le serveur Vanadia. Le bot navigue, gère les interactions et notifie l'utilisateur lorsqu'un captcha manuel est requis, optimisant ainsi les récompenses.",
        tags: ["Python", "Playwright", "Automation", "Bot"],
        image: "assets/img/projets/placeholder-vote.jpg",
        gallery: [],
        features: [
            "Navigation automatique via Playwright",
            "Système de notification desktop",
            "Planificateur de tâches intégré",
            "Gestion robuste des erreurs"
        ],
        github: "https://github.com/MathieuGal/Auto-bot-vote",
        competences: ["Développer une solution", "Traiter des incidents"]
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
            longDescription: "Outil de veille technologique qui scanne, agrège et filtre des centaines de flux RSS pour extraire les actualités pertinentes. Le système permet de rester à jour sur les dernières avancées sans être noyé sous l'information.",
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
            competences: ["Gérer le patrimoine informatique", "Organiser son développement professionnel"]
        }
    ]
};

export const formation = {
    ecole: "Lycée Louis Bascan",
    option: "SLAM (Solutions Logicielles et Applications Métiers)",
    annees: "2024 - 2026",
    description: "Le BTS SIO forme aux métiers de l'informatique. L'option SLAM est centrée sur la conception et la maintenance de programmes applicatifs."
};
