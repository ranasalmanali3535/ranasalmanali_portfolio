/* =========================================================
   SALMAN ALI — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- MOBILE NAV ---------- */
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            const isOpen = navbar.classList.toggle("open");

            menuBtn.setAttribute("aria-expanded", isOpen);

            menuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });
    }


    /* ---------- SMOOTH SCROLL + CLOSE MOBILE NAV ---------- */
    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }


            /* Close mobile menu */

            if (navbar) {
                navbar.classList.remove("open");
            }

            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        });

    });


    /* ---------- ACTIVE NAVBAR ---------- */

    const sections = document.querySelectorAll(
        "main section[id]"
    );


    function updateActiveNav() {

        let current = "home";

        const scrollPosition =
            window.scrollY + 160;


        sections.forEach(section => {

            if (scrollPosition >= section.offsetTop) {
                current = section.id;
            }

        });


        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();



    /* ---------- SCROLL REVEAL ---------- */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(element => {

            observer.observe(element);

        });


    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }



    /* ---------- COPY EMAIL ---------- */

    window.copyEmail = async function () {

        const email =
            "ranasalmanali897@gmail.com";

        const button =
            document.getElementById("copy-btn");


        try {

            await navigator.clipboard.writeText(email);


            if (button) {

                const originalText =
                    button.textContent;

                button.textContent =
                    "Copied!";


                setTimeout(() => {

                    button.textContent =
                        originalText;

                }, 1800);

            }


        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );


            if (button) {

                button.textContent =
                    "Copy failed";


                setTimeout(() => {

                    button.textContent =
                        "Copy email";

                }, 1800);

            }

        }

    };



    /* ---------- EMAILJS CONTACT FORM ---------- */

    const form =
        document.getElementById("contact-form");

    const formStatus =
        document.getElementById("form-status");


    /* Initialize EmailJS */

    if (typeof emailjs !== "undefined") {

        emailjs.init({

            publicKey:
                "zbHGwTjvo0K__pfxD"

        });

    }


    /* Contact form */

    if (form) {

        form.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const submitButton =
                    form.querySelector(
                        "button[type='submit']"
                    );


                const originalButtonText =
                    submitButton.innerHTML;


                submitButton.disabled =
                    true;


                submitButton.innerHTML =
                    'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';


                if (formStatus) {

                    formStatus.textContent =
                        "";

                }


                try {

                    await emailjs.sendForm(

                        "service_i4qdbfj",

                        "template_e2xgovm",

                        form

                    );


                    /* Reset form */

                    form.reset();


                    if (formStatus) {

                        formStatus.textContent =
                            "Message sent successfully.";

                    }


                } catch (error) {

                    console.error(
                        "EmailJS error:",
                        error
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Message could not be sent. Please try again.";

                    }

                } finally {

                    submitButton.disabled =
                        false;


                    submitButton.innerHTML =
                        originalButtonText;

                }

            }
        );

    }

});