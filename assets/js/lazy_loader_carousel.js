$(function () {
    $('.carousel').on('slide.bs.carousel', function (ev) {
        var lazy = $(ev.relatedTarget).find("iframe[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
    });
});