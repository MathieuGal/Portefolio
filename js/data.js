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
        title: "Bot de Pêche Minecraft",
        description: "Bot de pêche automatique avec détection audio/visuelle et QTE.",
        longDescription: `Bot d'automatisation sophistiqué pour Minecraft qui reproduit le comportement d'un joueur lors de la pêche. Ce projet combine plusieurs techniques avancées de programmation : traitement audio en temps réel, vision par ordinateur et simulation d'entrées utilisateur.

Le système propose deux modes de détection complémentaires :
• Mode Audio (WASAPI Loopback) : Capture le son système sans micro externe et détecte le "splash" caractéristique d'un poisson mordant à l'hameçon. Analyse RMS et détection de pics sonores.
• Mode Visuel (OpenCV) : Détection des cercles de couleur pour les QTE (Quick Time Events), avec calcul de circularité et transformation de Hough.

Architecture modulaire avec séparation claire des responsabilités : détection audio, détection visuelle, contrôleur d'actions, et orchestrateur principal. Le bot gère jusqu'à 6 QTE consécutifs avec timing précis.

Points techniques : PyAudioWPatch pour le loopback Windows, OpenCV pour la vision, numpy pour le traitement de signal, et simulation de délais humains pour éviter la détection.`,
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
        competences: ["Développer une solution", "Gérer le patrimoine informatique"],
        codeExamples: [
            {
                title: "Détection audio du splash (morsure)",
                language: "python",
                code: `def detect_splash_sound(self) -> bool:
    """Détecte un son de splash (morsure de poisson)"""
    try:
        # Récupérer les données audio du buffer
        audio_data = self.audio_queue.get(timeout=0.1)

        # Calculer l'amplitude RMS (Root Mean Square)
        rms = np.sqrt(np.mean(audio_data**2))

        # Ajouter à l'historique pour comparaison
        self.amplitude_history.append(rms)
        if len(self.amplitude_history) > self.history_size:
            self.amplitude_history.pop(0)

        # Détecter un pic sonore significatif
        if len(self.amplitude_history) >= 3:
            avg_amplitude = np.mean(self.amplitude_history[:-1])
            current_amplitude = self.amplitude_history[-1]

            # Le son doit être 3x plus fort que la moyenne
            amplitude_ratio = current_amplitude / (avg_amplitude + 1e-6)

            if (current_amplitude > self.threshold and
                amplitude_ratio > 3.0):
                print("🎣 SPLASH DÉTECTÉ!")
                return True

        return False
    except queue.Empty:
        return False`
            },
            {
                title: "Détection visuelle des cercles QTE",
                language: "python",
                code: `def detect_circles(self, image: np.ndarray):
    """Détecte les cercles rouge (cible) et blanc (curseur)"""
    # Convertir en HSV pour meilleure détection des couleurs
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Masque pour le rouge (wrap autour dans HSV)
    mask1 = cv2.inRange(hsv, np.array([0, 100, 100]),
                        np.array([10, 255, 255]))
    mask2 = cv2.inRange(hsv, np.array([170, 100, 100]),
                        np.array([180, 255, 255]))
    red_mask = cv2.bitwise_or(mask1, mask2)

    # Nettoyer avec morphologie
    kernel = np.ones((5, 5), np.uint8)
    red_mask = cv2.morphologyEx(red_mask, cv2.MORPH_CLOSE, kernel)

    # Détecter les contours et vérifier la circularité
    contours, _ = cv2.findContours(red_mask, cv2.RETR_EXTERNAL,
                                    cv2.CHAIN_APPROX_SIMPLE)

    for contour in contours:
        area = cv2.contourArea(contour)
        ((x, y), radius) = cv2.minEnclosingCircle(contour)
        circularity = 4 * np.pi * area / (cv2.arcLength(contour, True) ** 2)

        if circularity > 0.7:  # Forme suffisamment circulaire
            return (int(x), int(y), int(radius))

    return None`
            }
        ]
    },
    {
        id: 5,
        title: "Vanadia Vote Bot",
        description: "Bot de vote automatique avec gestion de captcha.",
        longDescription: `Bot d'automatisation web développé avec Playwright pour automatiser le processus de vote sur un serveur de jeu. Ce projet illustre les techniques modernes d'automatisation de navigateur et de contournement des systèmes anti-bot.

Fonctionnalités principales :
• Navigation autonome avec Playwright en mode headless ou visible
• Connexion automatique avec gestion des formulaires dynamiques
• Détection intelligente de captcha (reCAPTCHA, hCaptcha)
• Système de notification desktop quand une intervention manuelle est requise
• Profil de navigateur persistant pour maintenir les sessions

Le bot utilise des techniques anti-détection : user-agent personnalisé, masquage de la propriété webdriver, injection de scripts pour simuler un navigateur classique. Il gère les timeouts, les erreurs réseau et les redirections de manière robuste.

Architecture asynchrone avec asyncio permettant une gestion efficace des temps d'attente et des événements de page.`,
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
        competences: ["Développer une solution", "Traiter des incidents"],
        codeExamples: [
            {
                title: "Configuration anti-détection Playwright",
                language: "python",
                code: `async def run_vote_process(self, headless=True):
    """Lance le navigateur avec configuration anti-détection"""
    async with async_playwright() as p:
        # Profil persistant pour garder les cookies
        user_data_dir = Path("data/browser_profile")

        context = await p.chromium.launch_persistent_context(
            str(user_data_dir),
            headless=headless,
            args=[
                '--disable-blink-features=AutomationControlled',
                '--disable-web-security',
                '--no-sandbox'
            ],
            viewport={'width': 1280, 'height': 720},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                      'AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
            locale='fr-FR',
            timezone_id='Europe/Paris'
        )

        page = context.pages[0]

        # Injecter script pour masquer l'automatisation
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined
            });
            window.navigator.chrome = { runtime: {} };
        """)`
            },
            {
                title: "Détection et notification de captcha",
                language: "python",
                code: `async def detect_captcha_and_notify(self, page):
    """Détecte la présence d'un captcha et notifie l'utilisateur"""
    captcha_selectors = [
        'iframe[src*="recaptcha"]',
        'iframe[src*="hcaptcha"]',
        '.g-recaptcha',
        '.h-captcha'
    ]

    for selector in captcha_selectors:
        try:
            captcha = await page.wait_for_selector(selector, timeout=5000)
            if captcha:
                # Notification système
                notification.notify(
                    title="Vanadia Vote Bot",
                    message="Captcha détecté! Intervention requise.",
                    timeout=0  # Persistant
                )

                print("🚨 CAPTCHA DÉTECTÉ - Action manuelle requise")
                return True
        except PlaywrightTimeoutError:
            continue

    return False`
            }
        ]
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
