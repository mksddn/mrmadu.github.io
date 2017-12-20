  $(document).ready(function() {
    
  //throttle
  
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
  

//scroll hide 
var lastScrollTop = 0;    

$(document).on('scroll', $.throttle(function() {
  
  var stop = $(this).scrollTop();
  
  if($(window).scrollTop() > (80)) {          
    if (stop > lastScrollTop){
      console.log('down');
              // scrolling down
              if($('#menu_header').hasClass('menu_header-min'))
              {
                $('#menu_header').addClass('menu_header-close');
                $('#menu_header').removeClass('menu_header-min');
              }
            }
            else
            {
          // scrolling up
          if($('#menu_header').hasClass('menu_header-close'))
          {
            console.log('up');
            $('#menu_header').addClass('menu_header-min');
            $('#menu_header').removeClass('menu_header-close');
          } 
        } 
        lastScrollTop = stop;
      }
      
    }, 100));

});


  $(".m-menu i").click(function() {
  if($(".main-menu nav").is( ':hidden' )){
    $(".main-menu nav").slideToggle(500);
  } else {
    $(".main-menu nav").slideUp(500);
  }
});
$(window).resize(function() {
  if ($(window).width() > 768){
    $(".main-menu nav").show();
  }
  if ($(window).width() < 768){
    $(".main-menu nav").hide();
    $(document).mouseup(function (e) {
      var container = $('.main-menu nav');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }
});
if ($(window).width() < 768){
  $(document).mouseup(function (e) {
    var container = $('.main-menu nav');
    if (container.has(e.target).length === 0){
      container.slideUp('fast');
    }
  });
}

$(".menu-item-has-children").click(function() {
    if($(this).find(".sub-menu").is( ':hidden' )){
      $(this).find(".sub-menu").slideToggle(300);
    } else {
      $(this).find(".sub-menu").slideUp(300);
    }
  });
  $(document).mouseup(function (e) {
    var container = $('.sub-menu');
    if (container.has(e.target).length === 0){
      container.slideUp('fast');
    }
  });