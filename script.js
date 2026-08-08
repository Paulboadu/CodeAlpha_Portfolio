document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
    const navigation = document.querySelector(".navigation");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navigation.classList.add("scrolled");
        } else {
            navigation.classList.remove("scrolled");
        }

    });
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const sectionPosition =
                section.getBoundingClientRect().top;
            const screenPosition =
                window.innerHeight - 100;
            if (sectionPosition < screenPosition) {
                section.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
    const projectCard =
        document.querySelector(".project-card");
    if (projectCard) {
        projectCard.addEventListener("click", () => {
            projectCard.classList.toggle("selected");
        });
    }

    const contactCards =
        document.querySelectorAll(".contact p");
    contactCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });

    const contactForm =
        document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.querySelector("#name").value.trim();

            const email =
                document.querySelector("#email").value.trim();

            const message =
                document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {

                alert("Please fill in all the fields.");
                return;
            }

            const subject =
                `Portfolio Message from ${name}`;

            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;

            const mailtoLink =
                `mailto:amoakwaboadupaul@gmail.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            contactForm.reset();

        });

    }

    const liveDemo =
        document.querySelector(".refine-container a");

    if (liveDemo) {

        liveDemo.addEventListener("click", () => {
            console.log("Opening calculator...");
        });
    }

    const currentYear =
        document.querySelector("footer p");

    if (currentYear) {

        currentYear.innerHTML =
            `&copy; ${new Date().getFullYear()} All Rights Reserved`;

    }

    console.log("Welcome to Paul Amoakwa Boadu Portfolio!");

});