$(document).ready(function () {
    $(".scroll-top").click(function () {
        $("body,html").animate({scrollTop: 0}, 800)
    }), $(".scroll-down").click(function () {
        $("body,html").animate({scrollTop: $(window).scrollTop() + 800}, 1e3)
    }), $("body").scrollspy({target: "#navbar"}), $("body").on("click", "#main_nav a", function (o) {
        var t = $(this);
        $("html, body").stop().animate({scrollTop: $(t.attr("href")).offset().top}, 1500, "easeInOutExpo"), o.preventDefault()
    }), $(window).stellar()
});