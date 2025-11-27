// Données du Portfolio BTS SIO SLAM
// C'est ici que vous modifiez le contenu de votre site !

export const personalInfo = {
    name: "Mathieu", // Remplacez par votre nom complet
    title: "Étudiant BTS SIO - Option SLAM",
    heroTitle: "Développeur d'applications en devenir",
    heroDescription: "Passionné par le développement. Actuellement en formation BTS SIO option Solutions Logicielles et Applications Métiers.",
    email: "mathieugallienne@orange.fr",
    github: "https://github.com/MathieuGal",
    linkedin: "https://linkedin.com/in/MathieuGallienne",
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
        title: "Site E-commerce",
        description: "Développement d'un site de vente en ligne avec gestion panier et admin.",
        longDescription: "Ce projet est une plateforme e-commerce complète développée en PHP natif suivant l'architecture MVC. Il permet aux utilisateurs de naviguer dans un catalogue, d'ajouter des produits au panier et de passer commande. L'interface administrateur offre un tableau de bord pour gérer les produits, les catégories et suivre les commandes.",
        tags: ["PHP", "MySQL", "MVC", "Bootstrap"],
        image: "assets/img/projets/projet1.jpg",
        gallery: [
            "assets/img/projets/projet1.jpg",
            "assets/img/projets/projet1-admin.jpg",
            "assets/img/projets/projet1-cart.jpg"
        ],
        features: [
            "Architecture MVC (Modèle-Vue-Contrôleur)",
            "Système d'authentification sécurisé (Hashage mot de passe)",
            "Panier dynamique avec gestion des stocks",
            "Back-office administrateur complet"
        ],
        github: "https://github.com/...",
        competences: ["Développer une application", "Gérer les données"]
    },
    {
        id: 2,
        title: "Application Gestion de Stock",
        description: "Application desktop pour gérer les entrées/sorties de stock.",
        longDescription: "Application lourde développée en C# WPF pour la gestion des stocks d'une PME. Elle permet de scanner des codes-barres pour les entrées/sorties, de générer des alertes de stock bas et d'exporter des rapports mensuels au format PDF.",
        tags: ["C#", "WPF", "SQL Server", "Entity Framework"],
        image: "assets/img/projets/projet2.jpg",
        gallery: [
            "assets/img/projets/projet2.jpg",
            "assets/img/projets/projet2-dashboard.jpg"
        ],
        features: [
            "Interface utilisateur moderne en WPF",
            "Connexion base de données via Entity Framework",
            "Génération de rapports PDF",
            "Gestion des droits utilisateurs"
        ],
        github: "https://github.com/...",
        competences: ["Concevoir une base de données", "Traiter des incidents"]
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
    ]
};

export const formation = {
    ecole: "Lycée Louis Bascan",
    option: "SLAM (Solutions Logicielles et Applications Métiers)",
    annees: "2024 - 2026",
    description: "Le BTS SIO forme aux métiers de l'informatique. L'option SLAM est centrée sur la conception et la maintenance de programmes applicatifs."
};
