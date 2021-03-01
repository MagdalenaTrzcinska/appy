const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
    bars.classList.toggle("on");
});

window.addEventListener("scroll", function () {
    const style1 = document.querySelector(".menu");
    if (window.innerWidth > 800) {
        if (window.scrollY > 100) {
            style1.style.background = "linear-gradient(rgba(19, 86, 230, 0.9), rgba(21, 16, 109, 0.9))";
        } else {
            style1.style.background = "transparent";
        }
    }
});

window.sr = ScrollReveal();
sr.reveal('.ourProgress__text div', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.videoFeatures__text div', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});
sr.reveal('.allFeatures-single', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.about__MainText', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.faq .questions', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.contact__fraction .contacts', {
    reset: true,
    delay: 300,
    origin: 'top',
    distance: '50px'
});
