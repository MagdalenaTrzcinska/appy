const faqOnePart = document.querySelectorAll(".onePart .open");
const faqTwoPart = document.querySelectorAll(".twoPart .open");


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
