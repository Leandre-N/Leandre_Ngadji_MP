/* ==========================================
   1. MENU MOBILE
========================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        hamburger.setAttribute("aria-expanded", isOpen);

    });


    // Fermeture après sélection

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            hamburger.setAttribute("aria-expanded", "false");

        });

    });


    // Fermeture en cliquant à l'extérieur

    document.addEventListener("click", (event) => {

        if (
            !navMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {

            navMenu.classList.remove("show");

            hamburger.setAttribute("aria-expanded", "false");

        }

    });

}


/* ==========================================
   2. MODE CLAIR / SOMBRE
========================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle?.classList.add("dark");

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.classList.toggle("dark", isDark);

        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

    });

}


/* ==========================================
   3. LANGUE FRANÇAIS / ANGLAIS
========================================== */

const languageSelect = document.getElementById("languageSelect");
const languageSelector = document.querySelector(".language-selector");
const languageFlag = languageSelector?.querySelector("span");
const savedLanguage = localStorage.getItem("portfolio-language") || "fr";

const englishTranslations = {
    "Accueil": "Home",
    "À propos": "About",
    "Compétences": "Skills",
    "Projets": "Projects",
    "Services": "Services",
    "Contact": "Contact",
    "Bonjour, moi c'est": "Hello, I'm",
    "Je conçois des expériences numériques et développe des applications web et mobiles qui donnent vie aux idées.": "I design digital experiences and build web and mobile applications that bring ideas to life.",
    "Développeur web et mobile junior, actuellement en troisième année de Licence de Technologie en Génie logiciel à l'IUT de Douala, je m'intéresse particulièrement au": "Junior web and mobile developer, currently in my third year of a Software Engineering degree at the IUT of Douala, with a particular interest in",
    "développement mobile avec Flutter": "mobile development with Flutter",
    "et à la conception de solutions backend.": "and backend solution design.",
    "Découvrir mes projets": "Explore my projects",
    "Me contacter": "Contact me",
    "Télécharger mon CV": "Download my CV",
    "Développeur": "Developer",
    "Ce que je sais faire": "What I do",
    "Développement mobile": "Mobile development",
    "Développement web": "Web development",
    "Développement backend": "Backend development",
    "Interface & UX/UI": "UI & UX design",
    "Figma, conception d'interfaces": "Figma, interface design",
    "Quelques réalisations": "Selected projects",
    "Découvrez quelques projets sur lesquels j'ai travaillé et les solutions numériques que j'ai eu l'occasion de concevoir.": "Take a look at some projects I've worked on and the digital solutions I've had the opportunity to create.",
    "Voir tous mes projets": "View all projects",
    "Aperçu de l'application mobile SalleEvent": "Preview of the SalleEvent mobile app",
    "Application mobile": "Mobile application",
    "Application mobile de réservation de salles et d'espaces événementiels. Elle permet aux clients de rechercher des espaces et aux propriétaires de gérer leurs réservations.": "A mobile app for booking venues and event spaces. It helps clients find venues and owners manage their bookings.",
    "Projet UI/UX & frontend": "UI/UX & frontend project",
    "Capture de la page d’accueil TENYSY présentant l’application mobile et ses espaces de services": "Screenshot of the TENYSY homepage introducing the mobile app and its service spaces",
    "Refonte web · Application mobile": "Website redesign · Mobile app",
    "Les Anges du Digital — TENYSY": "Les Anges du Digital — TENYSY",
    "Refonte de l’identité numérique de Les Anges du Digital et mise en valeur de TENYSY, une plateforme qui réunit échanges, culture et services dans une expérience moderne et intuitive.": "A digital rebrand for Les Anges du Digital, showcasing TENYSY—a platform bringing communication, culture, and services together in a modern, intuitive experience.",
    "Un projet ou une opportunité ?": "A project or opportunity?",
    "Tu souhaites échanger autour d'un projet, d'une collaboration ou d'une opportunité professionnelle ? Je serais ravi d'en discuter avec toi.": "Want to discuss a project, collaboration, or career opportunity? I’d be happy to talk.",
    "WhatsApp": "WhatsApp",
    "Développeur web et mobile junior": "Junior web and mobile developer",
    "Tous droits réservés.": "All rights reserved.",
    "Code": "Code",
    "Crée": "Create",
    "Inspire": "Inspire",

    "À propos de moi": "About me",
    "Qui suis-je ?": "Who am I?",
    "Développeur passionné, créateur de solutions numériques innovantes.": "A passionate developer creating innovative digital solutions.",
    "Je suis Léandre Ngadji, développeur web et mobile, passionné par la technologie et l’innovation. J’aime transformer des idées en applications utiles, performantes et accessibles.": "I’m Léandre Ngadji, a web and mobile developer passionate about technology and innovation. I enjoy turning ideas into useful, high-performing, and accessible applications.",
    "Toujours en quête d’apprendre, je m’efforce de développer mes compétences pour relever de nouveaux défis et contribuer à des projets ambitieux.": "Always eager to learn, I keep developing my skills to take on new challenges and contribute to ambitious projects.",
    "Formation": "Education",
    "Licence — Génie logiciel": "Bachelor’s degree — Software Engineering",
    "Expérience": "Experience",
    "Stage chez HKDIGITALS · 2025": "Internship at HKDIGITALS · 2025",
    "Projets réalisés": "Projects completed",
    "3+ projets": "3+ projects",
    "Satisfaction": "Commitment",
    "100% d’engagement": "100% dedication",
    "Quelques repères de mon parcours": "A few highlights from my journey",
    "Ma mission": "My mission",
    "Créer des solutions numériques qui simplifient la vie, apportent de la valeur et inspirent confiance.": "To create digital solutions that make life easier, deliver value, and inspire trust.",
    "L’innovation est la clé d’un avenir meilleur.": "Innovation is the key to a better future.",
    "Développer": "Build",
    "Innover": "Innovate",
    "Grandir": "Grow",
    "Retour à l’accueil": "Back to home",

    "Mes compétences": "My skills",
    "Un ensemble de compétences techniques": "A range of technical skills",
    "pour donner vie à vos projets.": "to bring your projects to life.",
    "Domaines de compétences": "Skill areas",
    "Développement": "Development",
    "Mobile & Web": "Mobile & Web",
    "Création d’applications mobiles et web modernes et performantes.": "Building modern, high-performance mobile and web applications.",
    "Technologies de développement": "Development technologies",
    "Backend & Base de données": "Backend & Databases",
    "Développement serveur et gestion des bases de données.": "Server-side development and database management.",
    "Technologies backend et bases de données": "Backend and database technologies",
    "Outils & Technologies": "Tools & Technologies",
    "Environnement de travail et outils professionnels.": "Professional tools and development environment.",
    "Outils utilisés": "Tools used",
    "Autres compétences": "Additional skills",
    "Compétences complémentaires.": "Additional capabilities.",
    "Compétences complémentaires": "Additional skills",

    "Mes projets": "My projects",
    "Mes réalisations": "Selected work",
    "Découvrez quelques projets sur lesquels j’ai travaillé et les solutions que j’ai développées.": "Explore projects I’ve worked on and the solutions I’ve developed.",
    "Projets réalisés": "Completed projects",
    "Projet mobile & backend": "Mobile & backend project",
    "Aperçu de l’application mobile SalleEvent, avec des annonces de salles événementielles": "SalleEvent mobile app preview showing event venue listings",
    "Application mobile de réservation de salles et d’espaces événementiels. Elle permet aux clients de rechercher des lieux et aux propriétaires de gérer leurs réservations.": "A mobile app for booking venues and event spaces. It lets clients find locations and owners manage bookings.",
    "Technologies :": "Technologies:",
    "Technologies utilisées pour SalleEvent": "Technologies used for SalleEvent",
    "Aperçu de SantéVibes, une application mobile de suivi familial des prises de médicaments": "Preview of SantéVibes, a family medication tracking app",
    "Application mobile · Santé": "Mobile app · Health",
    "Projet mobile & backend": "Mobile & backend project",
    "Application mobile conçue pour faciliter le suivi des prises de médicaments grâce à des rappels personnalisés, afin d’aider les utilisateurs à mieux respecter leurs prescriptions médicales.": "A mobile app that helps users keep track of their medication with personalized reminders, supporting adherence to prescriptions.",
    "Technologies utilisées pour SantéVibes": "Technologies used for SantéVibes",
    "Page d’accueil de la plateforme de formation en ligne": "Homepage of the online learning platform",
    "Conception frontend": "Frontend design",
    "Projet frontend & design": "Frontend & design project",
    "Site de formation en ligne": "Online learning website",
    "Exercice de conception visuelle et de pratique frontend autour d’un site de formation en ligne, réalisé pendant mon stage chez HKDIGITALS.": "A visual design and frontend practice project for an online learning website, created during my internship at HKDIGITALS.",
    "Technologies utilisées pour le site de formation": "Technologies used for the learning website",

    "Mes services": "My services",
    "Des solutions sur mesure": "Tailored solutions",
    "pour vos projets numériques.": "for your digital projects.",
    "Services proposés": "Services offered",
    "d’applications mobiles": "of mobile applications",
    "Applications Android & iOS performantes avec Flutter.": "High-performance Android and iOS apps built with Flutter.",
    "Création de sites web": "Website development",
    "Sites vitrines, plateformes et applications web modernes.": "Modern showcase websites, platforms, and web apps.",
    "Conception UI/UX": "UI/UX design",
    "Interfaces modernes, expériences utilisateur optimales.": "Modern interfaces and intuitive user experiences.",
    "Contactez-moi pour votre projet": "Get in touch about your project",
    "Ensemble, donnons vie à vos idées !": "Let’s bring your ideas to life!",
    "Un projet en tête ? Je suis prêt à vous accompagner.": "Have a project in mind? I’m ready to help.",

    "Restons en contact": "Get in touch",
    "Une question, un projet ou une opportunité ?": "A question, project, or opportunity?",
    "N’hésitez pas à me contacter.": "Feel free to get in touch.",
    "Mes coordonnées": "My contact details",
    "Téléphone": "Phone",
    "Contacter Léandre sur WhatsApp": "Contact Léandre on WhatsApp",
    "Localisation": "Location",
    "Douala, Cameroun": "Douala, Cameroon",
    "Écrire à Léandre sur WhatsApp": "Message Léandre on WhatsApp",

    "Choisir la langue": "Choose language",
    "Changer de thème": "Toggle theme",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Accueil — Léandre Ngadji": "Home — Léandre Ngadji",
    "Portrait professionnel de Léandre Ngadji": "Professional portrait of Léandre Ngadji",
    "Léandre Ngadji, développeur web et mobile": "Léandre Ngadji, web and mobile developer",
    "Illustration d’un ordinateur avec du code et des technologies web": "Illustration of a computer with code and web technologies",
    "Maquette d’un site de formation en ligne": "Online learning website mockup",
    "Retour à l’accueil": "Back to home"
};

const englishPageMetadata = {
    "index.html": {
        title: "Léandre Ngadji | Junior Mobile & Backend Developer",
        description: "Portfolio of Léandre Ngadji, junior web and mobile developer specializing in Flutter, Dart, Node.js, and Express.js in Douala, Cameroon."
    },
    "about.html": {
        title: "About | Léandre Ngadji",
        description: "Learn about the background, mission, and projects of Léandre Ngadji, a junior web and mobile developer in Douala."
    },
    "skills.html": {
        title: "Skills | Léandre Ngadji",
        description: "Explore Léandre Ngadji’s skills in mobile, web, backend, databases, and digital tools."
    },
    "projects.html": {
        title: "Projects | Léandre Ngadji",
        description: "Explore Léandre Ngadji’s projects: TENYSY for Les Anges du Digital, SantéVibes, SalleEvent, and an online learning website."
    },
    "services.html": {
        title: "Services | Léandre Ngadji",
        description: "Discover Léandre Ngadji’s services: mobile development, website creation, and UI/UX design."
    },
    "contact.html": {
        title: "Contact | Léandre Ngadji",
        description: "Contact Léandre Ngadji to discuss a project, collaboration, or career opportunity."
    }
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function normalizeTranslationKey(value) {
    return value.trim().replace(/\s+/g, " ");
}

function applyLanguage(language) {
    const isEnglish = language === "en";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;

    while ((textNode = walker.nextNode())) {
        if (!originalTextNodes.has(textNode)) {
            originalTextNodes.set(textNode, textNode.nodeValue);
        }

        const original = originalTextNodes.get(textNode);
        const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
        const key = normalizeTranslationKey(match[2]);
        const translated = isEnglish ? englishTranslations[key] : null;
        textNode.nodeValue = `${match[1]}${translated || match[2]}${match[3]}`;
    }

    document.querySelectorAll("[alt], [aria-label], [title]").forEach(element => {
        ["alt", "aria-label", "title"].forEach(attribute => {
            if (!element.hasAttribute(attribute)) return;

            let originals = originalAttributes.get(element);
            if (!originals) {
                originals = {};
                originalAttributes.set(element, originals);
            }
            if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);

            const original = originals[attribute];
            element.setAttribute(attribute, isEnglish ? (englishTranslations[original] || original) : original);
        });
    });

    document.documentElement.lang = language;
    if (languageSelect) languageSelect.value = language;
    if (languageFlag) languageFlag.textContent = isEnglish ? "🇬🇧" : "🇫🇷";

    const pageName = window.location.pathname.split("/").pop() || "index.html";
    const pageMetadata = englishPageMetadata[pageName];
    if (pageMetadata) {
        document.title = isEnglish ? pageMetadata.title : originalDocumentTitle;
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            if (!originalDescription) originalDescription = description.content;
            description.content = isEnglish ? pageMetadata.description : originalDescription;
        }
    }

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) themeToggle.setAttribute("aria-label", isEnglish ? "Toggle theme" : "Changer de thème");

    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-label", isEnglish ? (isOpen ? "Close menu" : "Open menu") : (isOpen ? "Fermer le menu" : "Ouvrir le menu"));
    }

    localStorage.setItem("portfolio-language", language);
}

let originalDocumentTitle = document.title;
let originalDescription = document.querySelector('meta[name="description"]')?.content || "";

if (languageSelect) {
    languageSelect.addEventListener("change", event => applyLanguage(event.target.value));
    applyLanguage(savedLanguage);
}


