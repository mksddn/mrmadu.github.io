// constants
var MENU_HEIGHT = 60;
var POPUP_OPEN_DELAY = 600;

function changeActiveMenu(){
  $(".menu li").removeClass("active");

  for(var i=0;i<arguments.length;i++) {
    sel = "li#"+arguments[i];
    console.log(sel);
    $(sel).addClass("active");
  }

}

function runMP(path) {
  $.magnificPopup.open({
    items: {
      src: path,
      type: 'ajax',
      preloader: false,
      removalDelay: 300,
      overflowY: 'scroll',
      mainClass: 'my-mfp-zoom-in',
      cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
      tError: 'Не удается загрузить данную <a href="%url%">страницу</a>', //  Error message, can contain %curr% and %total% tags if gallery is enabled
    },
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
    open: function() {
      // Will fire when this exact popup is opened
      // this - is Magnific Popup object
      this_popup = "."+ $.magnificPopup.instance.contentContainer.context.className;
      console.log(this_popup);
      $(this_popup).addClass("description popup-block");
      console.log('Popup opened',  $.magnificPopup.instance);

    },
    ajaxContentAdded: function() {
      // Ajax content is loaded and appended to DOM
      slider_in_popup = this_popup +" .slider";
      console.log(slider_in_popup);
      if ($(slider_in_popup).length) {
        console.log("slider exist!");
        $(slider_in_popup).owlCarousel({
          items: 1,
          nav : true,
          navText : "",
          loop : true,
          dots: false,
          autoplay : false,
          autoplayHoverPause : true,
          fluidSpeed : 600,
          autoplaySpeed : 600,
          navSpeed : 600,
          dotsSpeed : 600,
          dragEndSpeed : 600

        });
      }
    }
  }
  });
}



$(function() {

  $width = $("html").width();

    //gallery
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загрузка #%curr%...',
      tClose: 'Закрыть (Esc)',
      mainClass: 'mfp-with-zoom',
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        tPrev: 'Предыдущее фото', // title for left button
        tNext: 'Следующее фото', // title for right button
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: 'Не удалось загрузить <a href="%url%">изображение #%curr%</a>',

      }
  });

    //sliders

  $("#partners-slider").owlCarousel({
    items: 5,
    nav : true,
    margin : 60,
    navText : "",
    stagePadding: 60,
    loop : true,
    dots: false,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      480 : {
        items: 2
      },
      // breakpoint from 768 up
      768 : {
        items: 4
      },
      // breakpoint from 992 up
      992 : {
        items: 5,
        stagePadding: 0
      }
    }
  });

  $("#building-slider").owlCarousel({
    items: 1,
    nav : true,
    navText : "",
    loop : true,
    dots: true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });

  $("#top-slider").owlCarousel({
    items: 1,
    nav : false,
    navText : "",
    loop : true,
    dots: true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });

  $("#gallery-slider").owlCarousel({
    items: 1,
    nav : false,
    navText : "",
    loop : true,
    dots: true,
    autoplay : false,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });


  // dropdown menu
  if ($width > 768) {
    $(".sf-menu").superfish();
  }

  // popup windows
  $('.full-block-link, .button:not(#footersend), .partners a').magnificPopup({
      type: 'ajax',
      preloader: false,
      removalDelay: 300,
      overflowY: 'scroll',
      mainClass: 'my-mfp-zoom-in',
      cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
      tError: '<a href="%url%">The content</a> could not be loaded.', //  Error message, can contain %curr% and %total% tags if gallery is enabled
      callbacks: {
        open: function() {
          // Will fire when this exact popup is opened
          // this - is Magnific Popup object
          this_popup = "."+ $.magnificPopup.instance.contentContainer.context.className;
          console.log(this_popup);
          $(this_popup).addClass("description popup-block");
          console.log('Popup opened',  $.magnificPopup.instance);

        },
        ajaxContentAdded: function() {
          // Ajax content is loaded and appended to DOM
          slider_in_popup = this_popup +" .slider";
          console.log(slider_in_popup);
          if ($(slider_in_popup).length) {
            console.log("slider exist!");
            $(slider_in_popup).owlCarousel({
              items: 1,
              nav : true,
              navText : "",
              loop : true,
              dots: false,
              autoplay : false,
              autoplayHoverPause : true,
              fluidSpeed : 600,
              autoplaySpeed : 600,
              navSpeed : 600,
              dotsSpeed : 600,
              dragEndSpeed : 600

            });
          }
        },
        close: function() {
          // Will fire when popup is closed
        }
        // e.t.c.
      }
      // modal: true
  });



  //about-us-button
  $('#clickmore').click(function(event){
    event.preventDefault();
    $('.about-us .hidden-text').toggleClass("show_this");
    $('.about-us .hidden-text').slideDown("slow");


    $(this).toggleClass("show_this");
    if ($(this).hasClass("show_this")) {
      $(this).text("Скрыть");

    }else{
      $(this).text("Подробнее");
      $('.about-us .hidden-text').slideUp("slow");
    }
  });


  //to top scroll
  // $(".to-top").click(function () {
  //     $("html, body").animate({ scrollTop: 0}, "slow");
  //     return false;
  // });


  //label up when text input
  $("textarea#message, .input-wrapper input").blur(function(){
    if ($(this).val().length !== 0) {
      $(this).next().addClass("up");
    }else{
      $(this).next().removeClass("up");
    }
  });

  // sticky-menu
  var nav_container = $(".stuck_container");
  if ($width >= 768) {
    var sticky = new Waypoint.Sticky({
      element: nav_container
    });
  }else{
    console.log("no-fix-menu");
  }

    //toggle-animation
  var p = 0;
  $('.toggle').click(function(){
    if(p==0){
      $(this).addClass('animate-1').removeClass('animate-2');
      $(".menu").addClass("menu-appear");
      p++;
    }else if(p==1){
      $(this).addClass('animate-2').removeClass('animate-1');
      $(".menu").removeClass("menu-appear");
      p = 0;
    }
  });

  if ($width < 768) {
    $(".menu li").click(function(event) {
      $(".toggle").addClass('animate-2').removeClass('animate-1');
      $(".menu").removeClass("menu-appear");
    });
    $(".image-block").addClass("on");

    //remove submenu wrap
    $("#decking-menu").unwrap().unwrap();
    $("#spa-menu").wrap("<li id='spa-menu'></li>");
    $("a#spa-menu").prop("id", null);

  }

  //equal-height
  $(function() {
    $('.advantage').matchHeight();
    $('.type img').matchHeight();
    $('.description_building-service').matchHeight();
    $('.building').matchHeight({
      target: $('.service')
    });

    $('.contacts-wrapper').matchHeight({
      target: $('.contacts-wrapper .form-wrapper')
    });

    $('.saunas-etc .serv').matchHeight();
  });

  var mobile_panel_title = $(".mobile-menu-panel h2");
  // menu click
  $("#about_us-menu").click(function (event) {
      event.preventDefault();
      $("html, body").animate({
         scrollTop: $("section.about-us").offset().top - MENU_HEIGHT - 60
      }, "slow");
      setTimeout(function() {
          // Done Functions
        changeActiveMenu("about_us-menu");
        mobile_panel_title.text("О нас");
      }, 1000);

  });

  // $("#building-menu").click(function (event) {
  //     event.preventDefault();
  //     $("html, body").animate({
  //        scrollTop: $("section.building").offset().top - MENU_HEIGHT
  //     }, "slow");

  //     setTimeout(function() {
  //         // Done Functions
  //       changeActiveMenu("building-menu");
  //       mobile_panel_title.text("Строительство");
  //       runMP("descriptions/building-description.html");

  //     }, POPUP_OPEN_DELAY);
  // });

  // $("#service-menu").click(function (event) {
  //     event.preventDefault();
  //     $("html, body").animate({
  //        scrollTop: $("section.service").offset().top - MENU_HEIGHT
  //     }, "slow");

  //     setTimeout(function() {
  //         // Done Functions
  //       changeActiveMenu("service-menu");
  //       mobile_panel_title.text("Обслуживание");
  //       runMP("descriptions/service-description.html");
  //     }, POPUP_OPEN_DELAY);
  // });

  // $("#gallery-menu").click(function (event) {
  //     event.preventDefault();
  //     $("html, body").animate({
  //        scrollTop: $("section.our-works").offset().top - MENU_HEIGHT*1.5
  //     }, "slow");
  //     setTimeout(function() {
  //         // Done Functions
  //       changeActiveMenu("gallery-menu");
  //       mobile_panel_title.text("Галлерея работ");
  //     }, POPUP_OPEN_DELAY);
  // });

  // $("#spa-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.spa").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu, spa-menu");
  //     mobile_panel_title.text("Спа-бассейны");
  //     runMP("descriptions/spa-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });


  // $("#decking-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.decking").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu", "decking-menu");
  //     mobile_panel_title.text("Террасная доска");
  //     runMP("descriptions/decking-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });

  // $("#saunas-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.saunas").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu", "saunas-menu");
  //     mobile_panel_title.text("Сауны");
  //     runMP("descriptions/saunas-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });

  // $("#hammams-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.hammams").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu","hammams-menu");
  //     mobile_panel_title.text("Хаммамы");
  //     runMP("descriptions/hammams-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });

  // $("#driers-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.driers").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu","driers-menu");
  //     mobile_panel_title.text("Осушители воздуха");
  //     runMP("descriptions/driers-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });

  // $("#autocovers-menu").click(function (event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //      scrollTop: $(".serv.autocovers").offset().top - MENU_HEIGHT
  //   }, "slow");

  //   setTimeout(function() {
  //       // Done Functions
  //     changeActiveMenu("saunas-etc-menu","autocovers-menu");
  //     mobile_panel_title.text("Автоматические покрытия");
  //     runMP("descriptions/autocovers-description.html");
  //   }, POPUP_OPEN_DELAY);
  // });

  // $("#contacts-menu").click(function (event) {
  //     event.preventDefault();
  //     $("html, body").animate({
  //        scrollTop: $("section.contacts").offset().top - MENU_HEIGHT
  //     }, "slow");
  //     setTimeout(function() {
  //         // Done Functions
  //       changeActiveMenu("contacts-menu");
  //       mobile_panel_title.text("Контакты");
  //     }, POPUP_OPEN_DELAY);
  // });

//menu active change while scroll
  var about_us = $("section.about-us");
  about_us.waypoint(function(direction){

    console.log("about_us section");
    changeActiveMenu("about_us-menu");
    mobile_panel_title.text("О нас");

    if (direction === 'down') {
      $(".to-top").addClass("show");
      console.log("show-to-top");
    }else if (direction === 'up') {
      $(".to-top").removeClass("show");
      console.log("hide-to-top");
    }

  },{
    offset: "30%"
  });


  var building = $("section.building");
  building.waypoint(function(){
    console.log("building section");

    if ($width > 480) {
      changeActiveMenu("building-menu", "service-menu");
    }else{
      changeActiveMenu("building-menu");
    }
    mobile_panel_title.text("Строительство");
  },{
    offset: "30%"
  });

  var service = $("section.service");
  service.waypoint(function(){
    console.log("service section");

    if ($width > 480) {
      changeActiveMenu("building-menu", "service-menu");
    }else{
      changeActiveMenu("service-menu");
    }
    mobile_panel_title.text("Обслуживание");
  },{
    offset: "30%"
  });

  var gallery = $("section.our-works");
  waypoints = gallery.waypoint(function(direction){
    console.log("gallery section");

    changeActiveMenu("gallery-menu");
    mobile_panel_title.text("Галлерея работ");

    if (direction === 'down') {

      if ($width >= 768) {
        $(".owl-item.active .image-block").each(function(index) {
          var ths = $(this);
          setInterval(function() {
            ths.addClass("on");
          }, 200*index);
        });

        setTimeout(function() {
          $(".image-block").addClass("on");
        }, 2400);
      }

    }


  },{
    offset: "40%"
  });
  console.log("window width: " + $width);
  if ($width > 768) {
    var saunas_etc = $("section.saunas-etc");
    waypoints = saunas_etc.waypoint(function(){
      console.log("saunas-etc section");

      changeActiveMenu("saunas-etc-menu");
      mobile_panel_title.text("Спа-бассейны");
    },{
      offset: "30%"
    });
  }else{
    console.log("I am here");
    var spa = $(".serv.spa");
    waypoints = spa.waypoint(function(){
      console.log("spa block");

      changeActiveMenu("spa-menu");
      mobile_panel_title.text("Спа-бассейны");
    },{
      offset: "30%"
    });

    var decking = $(".serv.decking");
    waypoints = decking.waypoint(function(){
      console.log("decking block");

      changeActiveMenu("decking-menu");
      mobile_panel_title.text("Террасная доска");
    },{
      offset: "30%"
    });

    var saunas = $(".serv.saunas");
    waypoints = saunas.waypoint(function(){
      console.log("saunas block");

      changeActiveMenu("saunas-menu");
      mobile_panel_title.text("Сауны");
    },{
      offset: "30%"
    });

    var hammams = $(".serv.hammams");
    waypoints = hammams.waypoint(function(){
      console.log("hammams block");

      changeActiveMenu("hammams-menu");
      mobile_panel_title.text("Хаммамы");
    },{
      offset: "30%"
    });
  }

  var contacts = $("section.contacts");
  waypoints = contacts.waypoint(function(){
    console.log("contacts section");

    changeActiveMenu("contacts-menu");
    mobile_panel_title.text("Контакты");
  },{
    offset: "30%"
  });



  //animation
  if ($width > 768) {
    $("section>h2, .about-us h2, .contacts h2, .input-wrapper div, .textarea-wrapper").animated("slideInUp");
    $(".partners .slider, .about-us p, .footer-logo, .contacts p, .social, #map").animated("fadeIn");
    $(".building, .serv.spa, .serv.saunas, .serv.driers").animated("slideInLeft");
    $(".serv.decking, .serv.hammams, .serv.autocovers, .service").animated("slideInRight");
    $(".read-more, button").animated("zoomIn");
  }




  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };


  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  // $("#sendmessage").submit(function() { //Change
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php", //Change
  //     data: th.serialize()
  //   }).done(function() {

  //     if ($('#form-sent-window').length) {
  //       $.magnificPopup.open({
  //         items: {
  //           src: '#form-sent-window'
  //         },
  //         type: 'inline'
  //       });
  //     }


  //     setTimeout(function() {
  //       // Done Functions
  //       th.trigger("reset");
  //     }, 1000);
  //   });
  //   return false;
  // });

  //Chrome Smooth Scroll
  // try {
  //   $.browserSelector();
  //   if($("html").hasClass("chrome")) {
  //     $.smoothScroll();
  //   }
  // } catch(err) {

  // };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // $(".preloader").fadeOut();

  // input masks
  // $("#phone").inputmask({
  //   mask: "+7 (999) 99 9{1,10}",
  //   showMaskOnHover: false
  // });
  // $("#email").inputmask({
  //   mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
  //   greedy: false,
  //   showMaskOnHover: false,
  //   onBeforePaste: function (pastedValue, opts) {
  //     pastedValue = pastedValue.toLowerCase();
  //     return pastedValue.replace("mailto:", "");
  //   },
  //   definitions: {
  //     '*': {
  //       validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
  //       cardinality: 1,
  //       casing: "lower"
  //     }
  //   }
  // });



});

 $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-angle-up"></i></div>');
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

    $(function(){
    $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
  });