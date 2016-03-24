/**
 * Created by Administrator on 2016/1/25 0025.
 */
$(function() {
  var box = document.getElementById('box');
  var ol = box.children[0].children[0];
  var timer;
  timer = setInterval(autoplay, 2000);
  var sx = 0;
  // 点击播放
  $('.ctrol li').click(function(e) {
      var index = $(this).index();
      $(this).addClass('current').siblings().removeClass();
      $(ol).stop().animate({
        left: -index * 730
      }, 500)
      sx = index;
    })
    // 左右按钮
  $('.lr .left').click(function(e) {
    sx--;
    if (sx < 0) {
      sx = 5
    }
    $('.ctrol li').eq(sx).addClass('current').siblings().removeClass();
    $(ol).stop().animate({
      left: sx * -730
    }, 500)
  });
  $('.lr .right').click(function(e) {
      sx++;
      if (sx > 5) {
        sx = 0;
      }
      $('.ctrol li').eq(sx).addClass('current').siblings().removeClass();
      $(ol).stop().animate({
        left: sx * -730
      }, 500)
    })
    //自动播放
  function autoplay() {
    sx++;
    if (sx > 5) {
      sx = 0;
    }
    $('.ctrol li').eq(sx).addClass('current').siblings().removeClass();
    $(ol).stop().animate({
      left: sx * -730
    }, 500);
  }
  // 鼠标放上去清除定时器
  $('.box').hover(function(e) {
    clearInterval(timer);
  }, function(e) {
    clearInterval(timer);
    timer = setInterval(autoplay, 2000);
  })

})
