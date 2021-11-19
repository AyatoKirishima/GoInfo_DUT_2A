/* ❤❤❤ */
// Img gallery

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
};


document.addEventListener('mousemove', showImgContent);

// Fin img gallery
(function($) {
    "use strict";

    //Switch dark/light

    $(".switch").on("click", function() {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("footer").removeClass("light");
            $(".switch").removeClass("switched");
            $(".icon").removeClass("light");
            $(".title_show").addClass("dark");
            $(".img-top").removeClass("hide");
            // document.getElementById("change").src = "./img/logo_info_white.png";
        } else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
            $("footer").addClass("light");
            $(".icon").addClass("light");
            $(".title_show").removeClass("dark");
            $(".img-top").addClass("hide");
            // document.getElementById("change").src = "./img/logo_info_white.png";
        }
    });

    $(document).ready(function() {
        var d = new Date();
        var n = d.getHours();

        // entre 17h et 8h le thème clair sera activé
        if (n > 8 || n < 17) {
            $("body").addClass("light");
            $(".switch").addClass("switched");
            $("footer").addClass("light");
            $(".icon").addClass("light");
            $(".img-top").addClass("hide");
            // $(".title_show").removeClass("dark");
        }
    });

    $(document).ready(function() {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });
        jQuery(".progress-wrap").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    });

})(jQuery);