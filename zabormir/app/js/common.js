$(function() {

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
        if($('header').hasClass('header-fix'))
        {
          $('header').addClass('header-close');
          $('header').removeClass('header-fix');
        }
      }
      else
      {
        if($('header').hasClass('header-close'))
        {
          console.log('up');
          $('header').addClass('header-fix');
          $('header').removeClass('header-close');
        } 
      } 
      lastScrollTop = stop;
    }
  }, 100));

  $(".m-menu").click(function() {
    if($(".header__menu").is( ':hidden' )){
      $(".header__menu").slideToggle(500);
    } else {
      $(".header__menu").slideUp(500);
    }
  });
  $(window).resize(function() {
    if ($(window).width() > 767){
      $(".header__menu").show();
    }
    if ($(window).width() < 767){
      $(".header__menu").hide();
      $(document).mouseup(function (e) {
        var container = $('.header__menu');
        if (container.has(e.target).length === 0){
          container.slideUp('fast');
        }
      });
    }
  });
  if ($(window).width() < 767){
    $(document).mouseup(function (e) {
      var container = $('.header__menu');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }

  $('.feats .section__content p').prepend('<i class="fas fa-check"></i>');

  $('.popup-link').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $("form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
