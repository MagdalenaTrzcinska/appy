import {Aminations} from "./Aminations.js";

const bars = document.querySelector(".bars");
const faqOnePart = document.querySelectorAll(".onePart .open");
const faqTwoPart = document.querySelectorAll(".twoPart .open");


const testiAnimations = new Aminations();
testiAnimations.render();

window.addEventListener("scroll", function (event) {
    const style1 = document.querySelector(".menu");
    if (window.innerWidth > 800) {
        if (window.scrollY > 200) {
            style1.style.background = "linear-gradient(rgba(19, 86, 230, 0.9), rgba(21, 16, 109, 0.9))";
        } else {
            style1.style.background = "transparent";
        }
    }
});

bars.addEventListener("click", () => {
    bars.classList.toggle("on");
});

faqOnePart.forEach(b => b.addEventListener('click', openingFaq));
faqTwoPart.forEach(b => b.addEventListener('click', openingFaq));

function openingFaq(e) {
    if (e.target.parentNode.parentElement.classList.contains("onePart")) {
        if (e.target.classList.contains("on")) {
            return false;
        } else {
            faqOnePart.forEach(b => b.classList.remove("on"));
            e.target.classList.toggle("on");
        }
    }

    if (e.target.parentNode.parentElement.classList.contains("twoPart")) {
        if (e.target.classList.contains("on")) {
            return false;
        } else {
            faqTwoPart.forEach(b => b.classList.remove("on"));
            e.target.classList.toggle("on");
        }
    }
}

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
