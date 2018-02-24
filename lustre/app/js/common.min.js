$(document).ready(function() {

// фикс меню
var h_hght = 50;
var h_mrg = 0;
$(function(){
  var elem = $('.header__menu');
  var top = $(this).scrollTop();
  if(top > h_hght){
    elem.css('top', h_mrg);
  }           
  $(window).scroll(function(){
    top = $(this).scrollTop();
    if (top+h_mrg < h_hght) {
      elem.css('top', (h_hght-top));
    } else {
      elem.css('top', h_mrg);
    }
  });
});

// скрытие нав.меню
$.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : $.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = $.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};    

var lastScrollTop = 0;    
$(document).on('scroll', $.throttle(function() {
  var stop = $(this).scrollTop();
  if($(window).scrollTop() > (80)) {          
    if (stop > lastScrollTop){
      console.log('down');
      if($('.header__menu').hasClass('header__menu-fix'))
      {
        $('.header__menu').addClass('header__menu-close');
        $('.header__menu').removeClass('header__menu-fix');
      }
    }
    else
    {
      if($('.header__menu').hasClass('header__menu-close'))
      {
        console.log('up');
        $('.header__menu').addClass('header__menu-fix');
        $('.header__menu').removeClass('header__menu-close');
      } 
    } 
    lastScrollTop = stop;
  }
}, 100));

// мобильное меню
$("#mmenu").click(function() {
  if($(".header .menu").is( ':hidden' )){
    $(".header .menu").slideToggle(500);
  } else {
    $(".header .menu").slideUp(500);
  }
});
$(window).resize(function() {
  if ($(window).width() > 768){
    $(".header .menu").show();
  }
  if ($(window).width() < 768){
    $(".header .menu").hide();
    $(document).mouseup(function (e) {
      var container = $('.header .menu');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }
});
if ($(window).width() < 768){
  $(document).mouseup(function (e) {
    var container = $('.header .menu');
    if (container.has(e.target).length === 0){
      container.slideUp('fast');
    }
  });
}

// кнопка наверх
$('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
}); 
$('#toTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


});
