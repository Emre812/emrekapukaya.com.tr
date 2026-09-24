
/* =========================
   MOBİL MENÜ
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



/* =========================
   MOBİL MENÜYÜ KAPAT
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



/* =========================
   SKILL PROGRESS BAR
========================= */

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillsSection =
    document.getElementById("skills");


if (skillsSection) {

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressBars.forEach(bar => {

                        const width =
                            bar.getAttribute("data-width");

                        bar.style.width =
                            width + "%";

                    });

                    observer.disconnect();

                }

            });

        }, {
            threshold: 0.3
        });


    observer.observe(skillsSection);

}



/* =========================
   AKTİF NAVBAR
========================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});

