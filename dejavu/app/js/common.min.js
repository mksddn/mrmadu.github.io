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
      // console.log('down');
              // scrolling down
              if($('.header').hasClass('header-min'))
              {
                $('.header').addClass('header-close');
                $('.header').removeClass('header-min');
              }
            }
            else
            {
          // scrolling up
          if($('.header').hasClass('header-close'))
          {
            // console.log('up');
            $('.header').addClass('header-min');
            $('.header').addClass('header-bg');
            $('.header').removeClass('header-close');
          } 
        } 
        lastScrollTop = stop;
      }
      
    }, 100));


$('.fond__slider__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.fond__slider__nav'
});
$('.fond__slider__nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.fond__slider__for',
  focusOnSelect: true,
  prevArrow: '<div class="slick-arrow slick-prev"><</div>',
  nextArrow: '<div class="slick-arrow slick-next">></div>',
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.fond__slider__for__img').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-arrow slick-prev"><</div>',
  nextArrow: '<div class="slick-arrow slick-next">></div>'
});

$('.fond__slider__for__img').on("mousedown mouseup", function() {
    $('.fond__slider__for').slick("slickGoTo", 1);
  })

$('.gallery').slick({
  // autoplay: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-arrow slick-prev"><</div>',
  nextArrow: '<div class="slick-arrow slick-next">></div>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.review__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-arrow slick-prev"><</div>',
  nextArrow: '<div class="slick-arrow slick-next">></div>'
});

$('.fond__order a, .number__desc__btn a').click(function(){
  title = $(this).parent().parent().find('h3').text();
  $('.modal h2 span').text(title);
});

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором "map-yandex"
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [44.239791, 38.837149], // координаты центра на карте
    zoom: 17, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [44.239791, 38.837149] // координаты, где будет размещаться флажок на карте
    }
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);

  // Решение по callback-у для определния полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
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

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
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

// Основная функция, которая проверяет когда мы навели на блок с классом "ymap-container"
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
    
      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
    
    // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

    // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором "map-yandex"
           ymaps.load(init);
        });                
      }
    }
  );  
}

$(function() {

  //Запускаем основную функцию
  ymap();

});


});