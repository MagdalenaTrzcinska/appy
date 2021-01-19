let left = 0;

const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
    bars.classList.toggle("on");
});
//////
const sp = document.querySelectorAll(".onePart .open");
const spTwoPart = document.querySelectorAll(".twoPart .open");

sp.forEach(b => b.addEventListener('click', clicck));
spTwoPart.forEach(b => b.addEventListener('click', clicck2));


function clicck(e) {
    if (e.target.classList.contains("on")) {
        return false;
    } else {
        sp.forEach(b => b.classList.remove("on"));


        e.target.classList.toggle("on");
    }
}

function clicck2(e) {
    console.log(e);
    if (e.target.classList.contains("on")) {
        return false;
    } else {
        spTwoPart.forEach(b => b.classList.remove("on"));


        e.target.classList.toggle("on");
    }
}


const up = document.querySelector(".up");
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
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
});

up.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

const li = document.querySelectorAll(".menu .menu-mobile .navigation li");
const liDesktop = document.querySelectorAll(".menu .menu-desktop .navigation li");

liDesktop[0].addEventListener('click', (e) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

liDesktop[1].addEventListener('click', (e) => {
    window.scroll({
        top: 500 + 200,
        left: 0,
        behavior: 'smooth'
    });
});

liDesktop[2].addEventListener('click', (e) => {
    window.scroll({
        top: 2501 + 200,
        left: 0,
        behavior: 'smooth'
    });
});

liDesktop[3].addEventListener('click', (e) => {
    window.scroll({
        top: 4401 + 200,
        left: 0,
        behavior: 'smooth'
    });
});
liDesktop[4].addEventListener('click', (e) => {
    window.scroll({
        top: 5505 + 200,
        left: 0,
        behavior: 'smooth'
    });
});


liDesktop[5].addEventListener('click', (e) => {
    window.scroll({
        top: 6100 + 200,
        left: 0,
        behavior: 'smooth'
    });
});

/////
li[0].addEventListener('click', (e) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

li[1].addEventListener('click', (e) => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
});

li[2].addEventListener('click', (e) => {
    window.scroll({
        top: 1710,
        left: 0,
        behavior: 'smooth'
    });
});

li[3].addEventListener('click', (e) => {
    window.scroll({
        top: 3700,
        left: 0,
        behavior: 'smooth'
    });
});
li[4].addEventListener('click', (e) => {
    window.scroll({
        top: 6000,
        left: 0,
        behavior: 'smooth'
    });
});


li[5].addEventListener('click', (e) => {
    window.scroll({
        top: 7500,
        left: 0,
        behavior: 'smooth'
    });
});
/////


window.addEventListener("scroll", function () {
    if (window.scrollY > -6) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        li[0].classList.add("active");
        liDesktop[0].classList.add("active");
    }

    if (window.scrollY > 450) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        li[1].classList.add("active");
        liDesktop[1].classList.add("active");
    }
    if (window.scrollY > 1700) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        li[2].classList.add("active");
    }

    if (window.scrollY > 2500) {
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop[2].classList.add("active");
    }

    if (window.scrollY > 3600) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        li[3].classList.add("active");
    }
    if (window.scrollY > 4400) {
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop[3].classList.add("active");
    }


    if (window.scrollY > 5900) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        li[4].classList.add("active");
    }

    if (window.scrollY > 5500) {
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop[4].classList.add("active");
    }

    if (window.scrollY > 7100) {
        li.forEach((l) => {
            l.classList.remove("active");
        });
        li[5].classList.add("active");
    }

    if (window.scrollY > 6000) {
        liDesktop.forEach((l) => {
            l.classList.remove("active");
        });
        liDesktop[5].classList.add("active");
    }
});



const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


prev.disabled = true;

next.addEventListener('click', () => {
    left = left - 350;
    document.querySelector(".review-single").animate(
        {
            left: left + "px"
        }, 1500);

    if (left === -700) {
        next.disabled = true;
    }
    if (left === -350) {
        prev.disabled = false;
    }
});


prev.addEventListener('click', () => {
    left = left + 350;
    document.querySelector(".review-single").animate(
        {
            left: left + "px"
        }, 1500);

    if (left === 0) {
        next.disabled = true;
    }
    if (left === -350) {
        prev.disabled = false;
    }
});

const square = document.querySelector('.reviews-box');
let position = 0;
let flag = false;

/* Desktop */
square.addEventListener("mousedown", function (event) {
    position = event.clientX;
    flag = true;
});

square.addEventListener("mousemove", function (event) {
    if (flag === true) {
        left = event.clientX - position;
        $(".review-single").css("left", left + "px");
    }
});

square.addEventListener("mouseup", function (event) {
    if (flag === true) {
        left = event.clientX - position;
        $(".review-single").css("left", left + "px");
        flag = false;
    }
});

/* Mobile */
square.addEventListener("touchstart", function (event) {
    position = event.touches[0].clientX;
});

square.addEventListener("touchend", function (event) {
    left = event.changedTouches[0].clientX - position;
    //left = event.clientX - position;

    $(".review-single").css("left", left + "px");
});



