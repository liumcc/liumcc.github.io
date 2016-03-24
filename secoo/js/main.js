/**
 * Created by Administrator on 2015/12/20.
 */
$(document).ready(function () {
    for(var i=0; i<23; i++){
        $(".product-list1 ul").append($(".product-list1 ul li:eq(0)").clone());
    }
    for(var i=0; i<6; i++){
        $(".product-list2").append($(".product-list2 dl:eq(0)").clone());
    }
    for(var i=0; i<23; i++){
        $(".pinPaiCon-ban").append($(".pinPaiCon-ban li:eq(0)").clone());
    }
    //楼梯js模块
    $(window).scroll(function () {
        var windowTop=$(window).scrollTop();
        if(windowTop >= 400){
            $(".bodyfix").show();
        }else{
            $(".bodyfix").hide();
        }
    });
    $(".bodyfix ul li").click(function () {
        var index = $(this).index();
        var titletop = $(".miaodian").eq(index).offset().top;
        //console.log(titletop);
        if( index == 3){
            $("html,body").animate({
                scrollTop: 0
            },500);
        }
        else{
            $("html,body").animate({
                scrollTop: titletop
            },500);
        }
    });
    //图片缓动变大
    $(".pinPaiCon-ban-img").hover(function(){
        $(this).animate({
            width : "242.4px",
            height: "247.45px"
        },300)
    },function(){
        $(this).animate({
            width : "240px",
            height: "245px"
        },300)
    });
    $(".product-list2 dl dt img").hover(function(){
        $(this).animate({
            width : "494px",
            height: "263px"
        },300)
    },function(){
        $(this).animate({
            width : "491px",
            height: "262px"
        },300)
    });

    // 鼠标移到爆款出来产品展示
    $(".mmz").hover(function(){
        $(".showUp ul").show();
    },function(){
        $(".showUp ul").hide();
    })
    // 鼠标移到爆款出来产品展示
    $(".baokuan").hover(function(){
        $(".pro-show").stop().show(1000);
    },function(){
        $(".pro-show").stop().hide(1000);
    })
});


