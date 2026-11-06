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


