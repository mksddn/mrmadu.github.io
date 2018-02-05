$(function() {


  // ВЫПАДАШКИ

  if ($(window).width() > 992) {
    $('nav li>ul').hide ();
    $('li li:has(li)').find('a:first').addClass ('arrow');
    $('li').hover (
      function () {
        $(this).addClass('active');
        $('ul:first', this).fadeIn ('fast'); 
      },
      function () {
        $(this).removeClass('active');
        $('ul:first', this).fadeOut ('fast'); 
      }
      );
  }


  // СКРЫТИЕ МЕНЮ

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
        if($('#menu').hasClass('menu-fix'))
        {
          $('#menu').addClass('menu-close');
          $('#menu').removeClass('menu-fix');
        }
      }
      else
      {
        if($('#menu').hasClass('menu-close'))
        {
          console.log('up');
          $('#menu').addClass('menu-fix');
          $('#menu').removeClass('menu-close');
        } 
      } 
      lastScrollTop = stop;
    }
  }, 100));


   // МОБИЛЬНОЕ МЕНЮ

   $( '.menu-mobile .icon i' ).click( function() {
     if ( $( '.header-row' ).is( ':hidden' ) ) {
      $( '.header-row' ).show('slideToggle');
    } else {
      $( '.header-row' ).hide('slideToggle');
    }
  });


   // ПОИСК

   $(document).click( function(event){
    if( $(event.target).closest(".header-search input").length ) 
      return;
    $(".header-search input").slideUp("fast");
    event.stopPropagation();
  });
   $('.header-search i').click( function() {
    $(this).siblings(".header-search input").slideToggle("fast");
    return false;
  });



  // СЛАЙДЕР - КАРТА ТОВАРА

  $('ul.single-img-items').delegate('li:not(.current)', 'click', function () {
    $(this).addClass('current').siblings().removeClass('current')
    .parents('.single-img').find('.single-img-show').eq($(this).index())
    .show().siblings('.single-img-show').hide();
  })

  

  // КОЛИЧЕСТВО ТОВАРА

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


});
