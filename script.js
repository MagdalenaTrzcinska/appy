$(document).ready(function() {
    $(".bars").click(function () {
       $(".mobile").toggleClass("display");
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() + document.documentElement.clientHeight > 1350) {

            $(".menu").css("background","linear-gradient(rgba(19, 86, 230, 0.8), rgba(21, 16, 109, 0.8))");
        }

        else {
            $(".menu").css("background","transparent");
        }
    });
});
