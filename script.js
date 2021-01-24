import {Aminations} from "./Aminations.js";


const scrollToTop = document.querySelector(".up");
const bars = document.querySelector(".bars");
const faqOnePart = document.querySelectorAll(".onePart .open");
const faqTwoPart = document.querySelectorAll(".twoPart .open");
const li = document.querySelectorAll(".navigation li");

const scrollSizeRange = [ // 0 - 5 - for Desktop, 6 - 11 - for Mobile
    0,
    700,
    2710,
    4610,
    5710,
    6300,
    0,
    500,
    1710,
    3700,
    6000,
    7500
];

const testiAnimations = new Aminations();
testiAnimations.render();

scrollToTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

window.addEventListener("scroll", function (event) {
    const style1 = document.querySelector(".menu");
    if (window.innerWidth > 800) {
        if (window.scrollY > 200) {
            style1.style.background = "linear-gradient(rgba(19, 86, 230, 0.9), rgba(21, 16, 109, 0.9))";
        } else {
            style1.style.background = "transparent";
        }
    }
    if (window.scrollY > 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

bars.addEventListener("click", () => {
    bars.classList.toggle("on");
});

///////////
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

////////
li.forEach((x, index) => {
    x.addEventListener("click", () => {
        window.scroll({
            top: scrollSizeRange[index],
            left: 0,
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    if (window.outerWidth > 800) {
        if (window.scrollY > scrollSizeRange[0]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[0].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[1]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[1].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[2]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[2].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[3]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[3].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[4]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[4].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[5]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[5].classList.add("active");
        }
    } if(window.outerWidth < 800) {
        if (window.scrollY > scrollSizeRange[6]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[6].classList.add("active");
        }
        if (window.scrollY > scrollSizeRange[7]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[7].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[8]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[8].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[9]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[9].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[10]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[10].classList.add("active");
        }

        if (window.scrollY > scrollSizeRange[11]) {
            li.forEach((l) => {
                l.classList.remove("active");
            });
            li[11].classList.add("active");
        }
    }
});
