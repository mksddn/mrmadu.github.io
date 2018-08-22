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

    $('.fancybox-media').fancybox({});

    $( "#accordion" ).accordion();

    // Step 1: Create jQuery plugin
// ============================

$.fn.fancyMorph = function( opts ) {

  var Morphing = function( $btn, opts ) {
    var self = this;

    self.opts = $.extend({
      animationEffect : false,
      infobar    : false,
      buttons    : ['close'],
      smallBtn   : false,
      touch      : false,
      baseClass  : 'fancybox-morphing',
      afterClose : function() {
        self.close();
      }
    }, opts);

    self.init( $btn );
  };

  Morphing.prototype.init = function( $btn ) {
    var self = this;

    self.$btn = $btn.addClass('morphing-btn');

    self.$clone = $('<div class="morphing-btn-clone" />')
    .hide()
    .insertAfter( $btn );

    // Add wrapping element and set initial width used for positioning
    $btn.wrap( '<span class="morphing-btn-wrap"></span>' ).on('click', function(e) {
      e.preventDefault();

      self.start();
    });

  };

  Morphing.prototype.start = function() {
    var self = this;

    if ( self.$btn.hasClass('morphing-btn_circle') ) {
      return;
    }

    // Set initial width, because it is not possible to start CSS transition from "auto"
    self.$btn.width( self.$btn.width() ).parent().width( self.$btn.outerWidth() );

    self.$btn.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {

      if ( e.originalEvent.propertyName === 'width' ) {
        self.$btn.off('.fm');

        self.animateBg();
      }

    }).addClass('morphing-btn_circle');

  };

  Morphing.prototype.animateBg = function() {
    var self = this;

    self.scaleBg();

    self.$clone.show();

    // Trigger repaint
    self.$clone[0].offsetHeight;

    self.$clone.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
      self.$clone.off('.fm');

      self.complete();

    }).addClass('morphing-btn-clone_visible');
  };

  Morphing.prototype.scaleBg = function() {
    var self = this;

    var $clone = self.$clone;
    var scale  = self.getScale();
    var $btn   = self.$btn;
    var pos    = $btn.offset();

    $clone.css({
      top       : pos.top  + $btn.outerHeight() * 0.5 - ( $btn.outerHeight() * scale * 0.5 ) - $(window).scrollTop(),
      left      : pos.left + $btn.outerWidth()  * 0.5 - ( $btn.outerWidth()  * scale * 0.5 ) - $(window).scrollLeft(),
      width     : $btn.outerWidth()  * scale,
      height    : $btn.outerHeight() * scale,
      transform : 'scale(' + ( 1 / scale ) + ')'
    });
  };

  Morphing.prototype.getScale = function() {
    var $btn    = this.$btn,
    radius  = $btn.outerWidth() * 0.5,
    left    = $btn.offset().left + radius - $(window).scrollLeft(),
    top     = $btn.offset().top  + radius - $(window).scrollTop(),
    windowW = $(window).width(),
    windowH = $(window).height();

    var maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left ),
    maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );

    return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );
  };

  Morphing.prototype.complete = function() {
    var self = this;
    var $btn = self.$btn;

    $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, self.opts);

    $(window).on('resize.fm', function() {
      //self.scaleBg();
    });
  };

  Morphing.prototype.close = function() {
    var self   = this;
    var $clone = self.$clone;

    self.scaleBg();

    $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
      $clone.hide();

      self.$btn.removeClass('morphing-btn_circle');
    });

    $clone.removeClass('morphing-btn-clone_visible');

    $(window).off('resize.fm');
  };

  // Init
  this.each(function() {
    var $this = $(this);

    if ( !$this.data("morphing") ) {
      $this.data( "morphing", new Morphing( $this, opts ) );
    }

  });

  return this;
};


// Step 2: Start using it!
// =======================

$("[data-morphing]").fancyMorph({
  hash : 'morphing'
});



});