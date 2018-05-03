'use strict';


$('button').click(function () {

    $("div").animate({
        left: "100px",
        width: "100px",
        height: "100px"
    }, 3000).queue(function (next) {
        $('div').css({
            backgroundColor: "blue",
            transition: "5s"
        });
        });

    });
