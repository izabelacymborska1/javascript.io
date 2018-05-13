'use strict';

//smoothy scroll

$(function () {
    $("a[href*='#']:not([href='#'])").click(function (e) {

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
    //csroll nav color change

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("#main-nav").addClass("scroll");
        } else {
            $("#main-nav").removeClass("scroll");
        }

    });

});