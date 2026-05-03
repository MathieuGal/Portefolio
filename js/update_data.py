with open(r'c:\Users\FlowUP\Portefolio\js\data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_project = """    {
        id: 4,
        title: "LinkedIn Bot",
        description: "Bot d'automatisation IA pour LinkedIn.",
        longDescription: "Bot qui publie automatiquement sur LinkedIn un résumé d'article tech généré par IA (Gemini), du lundi au vendredi à 11h00.\\n\\nArchitecture technique :\\n• main.py : orchestrateur et planificateur\\n• news_fetcher.py : récupération d'articles RSS et déduplication via Convex\\n• content_generator.py : génération via l'API Google Gemini\\n• linkedin_api.py : interaction avec l'API REST v2 de LinkedIn\\n\\nLe projet est entièrement conteneurisé avec Docker pour faciliter le déploiement.",
        tags: ["Python", "IA", "Gemini", "API LinkedIn", "Docker"],
        image: "js/Image/linkedin.png",
        gallery: [
        "js\Image\Linkedin post json.png",
        "js\Image\Post linkedin.png",
        "js\Image\Docker.png",
        ],
        features: [
            "Récupération d'articles tech via RSS",
            "Génération de résumés par IA (Gemini)",
            "Publication automatique sur LinkedIn",
            "Déploiement via Docker"
        ],
        github: "https://github.com/MathieuGal/Linkedin-Manager",
        competences: ["Développer une solution", "Mettre à disposition des utilisateurs un service informatique"]
    },
"""

lines = lines[:155] + [new_project] + lines[344:]

with open(r'c:\Users\FlowUP\Portefolio\js\data.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
