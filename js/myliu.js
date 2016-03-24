/**
 * Created by Administrator on 2015/12/20 0020.
 */
$(function() {
    $(".wxqhb").hover(function() {
        $(".wxhb").fadeIn(600);
    },function() {
        $(".wxhb").hide();
    })
    $(".Header-topBar-drop").hover(function() {
        $(".Header-topBar-dropdown").show();
        $(".Header-topBar-drop").css("backgroundColor","#f5f5f5");
        $(".Header-topBar-drop img").attr("src","images/sj_r2_c2_x.jpg");
    },function() {
        $(".Header-topBar-dropdown").hide();
        $(".Header-topBar-drop").css("backgroundColor","#fff");
        $(".Header-topBar-drop img").attr("src","images/sj_r2_c2.jpg");
    })
    $(window).scroll(function() {
        var scrollTopHeight = $(document).scrollTop();
        if(scrollTopHeight>10170) {
            $(".ftmap").animate({left:688},500)
        }
    })
    var text = document.getElementById("Header_search_input");
    text.onclick = function() {
        if(text.value == "PRADA/普拉达") {
            text.value = "";
            text.style.color = "#333"
        }
    }
    text.onblur = function() {
        if(text.value == "") {
            text.value = "PRADA/普拉达";
            text.style.color = "#999";
        }
    }
    // 二级下拉菜单
    $(".dropdown-con>ul>li:odd").css({
        "background":"#392F6B",
        "border": "1px solid #392F6B",
        "border-right": "0"
    });
    $(".dropdown-con>ul>li:even").css({
        "background":"#463B7F",
        "border": "1px solid #463B7F",
        "border-right": "0"
    });
    // 鼠标移到title出现下拉菜单
    var lisLen =  $(".dropdown-con ul li.con-list").length;
    $(".Header-dropdown").hover(function(){
        $(".dropdown-con").children().children().show();

    }  ,function(){
        $(".dropdown-con > ul > li").hide();
//
    });

    $(".dropdown-con > ul > li").hover(function () {
        $(this).addClass("current");
        $(this).find(".con-right").show();
    }, function () {
        $(this).removeClass("current");
        $(this).find(".con-right").hide();
    });


})