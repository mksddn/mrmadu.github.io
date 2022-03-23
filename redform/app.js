document.addEventListener("DOMContentLoaded", () => {
  const decorVerts = document.querySelectorAll('.decor-line--vert');
  decorVerts.forEach(vert => {
    vert.setAttribute('data-delighter', '');
    vert.classList.add('todown');
  });
  const decorGorizes = document.querySelectorAll('.decor-line--goriz');
  decorGorizes.forEach(vert => {
    vert.setAttribute('data-delighter', '');
  });
  const sectTitles = document.querySelectorAll('.section-title, .about .decor-line--vert');
  sectTitles.forEach(title => {
    title.setAttribute('data-delighter', '');
    title.classList.add('toup');
  });
});


/*
  Delighters - Add CSS animations to delight users as they scroll down.
  (c) 2018 - Q42
  Written by Martin Kool
  https://github.com/Q42/delighters
  */
  var Delighters = new (function() {
    var self = this,
    dels = this.dels = [],

      // default options
      options = {
        attribute:  'data-delighter',
        classNames: ['delighter', 'started', 'ended'],
        start:      0.75, // default start threshold
        end:        0.75, // default end threshold
        autoInit:   true  // initialize when DOMContentLoaded
      };

      document.addEventListener("DOMContentLoaded", function() {
        if (options.autoInit) init();
      });

      function config(opts) {
        for (var name in opts) options[name] = opts[name];
      }

    function init() {   
      document.addEventListener('scroll', scroll)
      var els = document.querySelectorAll('[' + options.attribute + ']');

      for (var i=0; i<els.length; i++) {
        var el      = els[i],
        def     = el.getAttribute(options.attribute, 2),
        pairs   = def.split(';'),
        del     = {};
        del.start = options.start;
        del.end = options.end;

        for (var j=0; j<pairs.length; j++) {
          var pair  = pairs[j].split(':'),
          name  = pair[0],
          val   = isNaN(pair[1] * 1)? pair[1] : pair[1] * 1;
          if (name) del[name] = (val === undefined)? true : val;
        }

        del.el = el;
        del.id = dels.length;
        dels.push(del);
        el.classList.add(options.classNames[0])
        if (del.debug) el.style.outline = 'solid red 4px';
      }
      scroll();
    }

    function scroll() {
      var viewportHeight = window.innerHeight;
      for (var i=0; i<dels.length; i++) {
        var del = dels[i],
        box = del.el.getBoundingClientRect(),
        factorStart = box.top / viewportHeight,
        factorEnd = box.bottom / viewportHeight;

        if (del.debug) {
          if (factorStart >= 0 && factorStart <= 1) {
            if (!del.startLine) {
              del.startLine = document.createElement('div')
              document.body.appendChild(del.startLine);
              del.startLine.style = 'position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:' + (del.start * 100) + 'vh';
            }
          }
          if (((factorEnd < del.end) || (factorStart > 1)) && del.startLine) {
            del.startLine.parentNode.removeChild(del.startLine);
            delete del.startLine;
          }
        }
        if (factorStart < del.start && !del.started) {
          del.started = true;
          del.el.classList.add(options.classNames[1])
        }
        else if (factorStart > del.start && del.started) {
          del.started = false;
          del.el.classList.remove(options.classNames[1])
        }
        if (factorEnd < del.end && !del.ended) {
          del.ended = true;
          del.el.classList.add(options.classNames[2])
        }
        else if (factorEnd > del.end && del.ended) {
          del.ended = false;
          del.el.classList.remove(options.classNames[2])
        }
      }
    }

    self.init = init;
    self.config = config;
  })();




  function myFunction(x) {
    x.classList.toggle("change");
    const popupMenu =  document.querySelector('.burger-menu');
    if (popupMenu.classList.contains('active')) {
      popupMenu.classList.remove('active');
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('.header-logo').style.opacity = '1';
      document.querySelector('.header-menu').style.opacity = '1';
      document.querySelector('.site-header').style.backgroundColor = 'inherit';
      popupMenu.style.zIndex = '-1';
    } else {
      popupMenu.classList.add('active');
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.header-logo').style.opacity = '0';
      document.querySelector('.header-menu').style.opacity = '0';
      document.querySelector('.site-header').style.backgroundColor = '#14474b';
      popupMenu.style.zIndex = '2';
    }
  }


  $('.hero-slider').slick({
    fade: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: "my-dots",
    autoplay: true,
    // fade: true,
    // prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 477.175 477.175" xml:space="preserve">    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
    // nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 477.175 477.175" xml:space="preserve">    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
  });

  $('.ds-first .double-slider').slick({
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $('.ds-first .slider-arrows .prev'),
    nextArrow: $('.ds-first .slider-arrows .next'),
    // adaptiveHeight: true,
    // arrows: false,
    // dotsClass: "my-dots",
    // autoplay: true,
  });
  $('.ds-sec .double-slider').slick({
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $('.ds-sec .slider-arrows .prev'),
    nextArrow: $('.ds-sec .slider-arrows .next'),
    // adaptiveHeight: true,
    // arrows: false,
    // dotsClass: "my-dots",
    // autoplay: true,
  });
  $('.gallery-slider').slick({
    // dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.gallery .slider-arrows .prev'),
    nextArrow: $('.gallery .slider-arrows .next'),
    adaptiveHeight: true,
    // arrows: false,
    // dotsClass: "my-dots",
    // autoplay: true,
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    // slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    draggable: false,
    swipe: false,
    // centerMode: true,
    focusOnSelect: true
  });
  $('.slider-for-item').slick({
    dotsClass: "my-dots",
    dots: true,
    arrows: false,
    // adaptiveHeight: true,
  });


  $(document).ready(function() {
    $('.gallery-wrapper').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
  });

  $(document).ready(function() {
    $('.gallery-slider').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
  });