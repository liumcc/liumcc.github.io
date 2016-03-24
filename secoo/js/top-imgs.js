
$(function () {
    $(".arro span").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".top-img ul li").eq(index).fadeIn().siblings().fadeOut();

    });
})


