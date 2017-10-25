$(function() {

  if ($(window).width() > 768) {
    var h_hght = 60;
    var h_mrg = 0; 

    var elem = $('.menu');
    var top = $(this).scrollTop();

    if(top > h_hght){
      elem.css('top', h_mrg);
    }           

    $(window).scroll(function(){
      top = $(this).scrollTop();

      if (top+h_mrg < h_hght) {
        elem.css('top', (h_hght-top));
        elem.css('background-color', 'rgba(0,0,0,0)');
      } else {
        elem.css('top', h_mrg);
        elem.css('background-color', 'rgba(0,0,0,0.3)');
      }
    });
  }

  if ($(window).width() < 768) {
    var h_hght = 400;
    var h_mrg = 0; 

    var elem = $('.informer');
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
  }

  if($(window).width() < 767) {
    $( '.menu-toggle, .menu nav li a' ).click( function() {
     if ( $( '.menu nav' ).is( ':hidden' ) ) {
      $( '.menu nav' ).show('slideDown');
    } else {
      $( '.menu nav' ).hide('slideUp');
    }
  });
  };

  $("nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.main__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
    ]
  });

  $('.slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider_nav'
  });
  $('.slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_for',
    centerMode: true,
    focusOnSelect: true
  });

  $('.popup').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.gallery .link').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Идет загрузка #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>База отдыха ВОЛНА</small>';
      }
    }
  });

  // $('.gallery .link').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   // closeOnContentClick: false,
  //   // closeBtnInside: false,
  //   mainClass: 'mfp-with-zoom mfp-img-mobile',
  //   image: {
  //     verticalFit: true,
  //     titleSrc: function(item) {
  //       return item.el.attr('title') + ' <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
  //     }
  //   },
  //   gallery: {
  //     enabled: true
  //   },
  //   zoom: {
  //     enabled: true,
  //     duration: 300, // don't foget to change the duration also in CSS
  //     opener: function(element) {
  //       return element.find('img');
  //     }
  //   }
  // });

});






var spinner = $('.ymap-container').children('.loader');
var check_if_load = false;
var myMapTemp, myPlacemarkTemp;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [44.679423, 37.627068], // координаты центра на карте
    zoom: 13,
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.GeoObject({
    geometry: {
      type: "Point",
        coordinates: [44.679423, 37.627068] // координаты, где будет размещаться флажок на карте
      }
    });
  myMapTemp.geoObjects.add(myPlacemarkTemp);
  var layer = myMapTemp.layers.get(0).get(0);
  waitForTilesLoad(layer).then(function() {
    spinner.removeClass('is-active');
  });
}
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
        return layer[k];
    }
  }
}
return null;
}
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
        script.readyState == "complete"){
        script.onreadystatechange = null;
      callback();
    }
  };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
    if (!check_if_load) {
      check_if_load = true; 
      spinner.addClass('is-active');
      loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
       ymaps.load(init);
     });                
    }
  }
  );  
}
$(function() {
  ymap();

});
