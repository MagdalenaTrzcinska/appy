export class Aminations {

    left = 0;
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');

    square = document.querySelector('.reviews-box');
    position = 0;
    flag = false;

    constructor() {
    }

    render() {
        this.startBtn();
        this.startEventMouse()
    }

    startBtn() {
        this.prev.disabled = true;

        this.next.addEventListener('click', () => {
            this.left = this.left - 350;
            this.animateBtn();

            if (this.left === -700) {
                this.next.disabled = true;
            }
            if (this.left === -350) {
                this.prev.disabled = false;
            }
        });


        this.prev.addEventListener('click', () => {
            this.left = this.left + 350;
            this.animateBtn();
            if (this.left === 0) {
                this.prev.disabled = true;
            }
            if (this.left === -350) {
                this.next.disabled = false;
            }
        });

    }

    animateBtn() {
        document.querySelectorAll(".review-single").forEach(x => {
            x.animate({
                left: this.left + "px"
            }, {
                duration: 1000,
                fill: "forwards"
            });
        });
    }

    startEventMouse() {
        this.square.addEventListener("mousedown", event => {
            this.position = event.clientX;
            this.flag = true;
        });

        this.square.addEventListener("mousemove", event => {
            if (this.flag === true) {
                this.left = event.clientX - this.position;
                document.querySelectorAll(".review-single").forEach(x => {
                    x.style.left = this.left + "px";
                });
            }
        });

        this.square.addEventListener("mouseup", event => {
            if (this.flag === true) {
                this.left = event.clientX - this.position;
                document.querySelectorAll(".review-single").forEach(x => {
                    x.style.left = this.left + "px";
                });
                this.flag = false;
            }
        });
    }
}




