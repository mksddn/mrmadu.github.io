  $(document).ready(function() {

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
          if($('header').hasClass('header_min'))
          {
            $('header').addClass('header_close');
            $('header').removeClass('header_min');
            $('header .mnav').css('transform', 'translateX(120%)');
          }
        }
        else
        {
          if($('header').hasClass('header_close'))
          {
            $('header').addClass('header_min');
            $('header').addClass('header_bg');
            $('header').removeClass('header_close');
          } 
          $('header .mnav').css('transform', 'translateX(120%)');
        } 
        lastScrollTop = stop;
      }
      
    }, 100));

    $('.mmenu').on('click', function() {
      $("header .mnav").css('transform', 'translateX(0)');
    });


    $('body').append('<div id="toTop"><i class="fas fa-angle-up"></i></div>');
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

    $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      autoHeigth: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.testimonials__slider').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      autoHeigth: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });

    if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){
      $('.portfolio__item').hover(function(){
        console.log('Так и не разобрался! Без этого куска кода на айфонах событие не срабатывает...')
      });
    }

    $( "#accordion" ).accordion();

  });