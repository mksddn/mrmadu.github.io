$(function() {

// Скрытие меню навигации
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
        // console.log('down');
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
          // console.log('up');
          $('header').addClass('header-fix');
          $('header').removeClass('header-close');
        } 
      } 
      lastScrollTop = stop;
    }
  }, 100));
});


// Скролл к якорю
$("nav").on('click','a[href^="#"]', function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});



// Слайдер
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  fade: true,
  prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="14" viewBox="0 0 21 14"><image id="arrowtop" width="21" height="14" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEX/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1MAAAAvfIYFAAAAEXRSTlMAVttpW/1T8WjDNw/J9jpCFHdmhdYAAAABYktHRBJ7vGwAAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4gENDh4PFjLuAAAAAGJJREFUGNNtz0EOgCAMBMAFQQRagf9/Vi0UI3EPzWYObQqMGNuswZKtPdn+cGHFDzs/1bsffPmDygt23hXDEZR3RMWEpByRSQqf97KTpVNGZy5yuPBA4YHCHYFKZT5UqN7zAmSJCftUEMLvAAAAAElFTkSuQmCC"/></svg></button>',
  nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="14" viewBox="0 0 21 14"><image id="arrowbot" width="21" height="14" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEX/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1P/P1MAAAAvfIYFAAAAEXRSTlMAFMlCD/Y6w/E3U/1oW2lW28xD6acAAAABYktHRBJ7vGwAAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4gENDh0Yvsw4BAAAAGJJREFUGNNlzUEWgCAMQ8FYREBU6P0vawWjT8zqdzYFgEkcOCdTj1nUk51XmW9UsqE2bmi8GC6+tXHQvpiQ4t0BayZvxLwCO5nL+/Vi4I4DEz/8InA8egB//iB5QKBUrYXHCdNlCeMc4QzSAAAAAElFTkSuQmCC"/></svg></button>',
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider',
  infinite: true,
  centerMode: true,
  focusOnSelect: true
});


// Всплывашки
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


// Мобильное меню
$( '.mmenu span' ).click( function() {
 if ( $( 'header nav' ).is( ':hidden' ) ) {
  $( 'header nav' ).show('fadeIn');
} else {
  $( 'header nav' ).hide('fadeOut');
}
});
$(window).resize(function() {
  if ($(window).width() > 992){
    $("header nav").show();
  }
  if ($(window).width() < 992){
    $("header nav").hide();
    $(document).mouseup(function (e) {
      var container = $('header nav');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }
  $( 'nav li' ).click( function() {
   if ( $( 'header nav' ).is( ':hidden' ) ) {
    $( 'header nav' ).show('fadeIn');
  } else {
    $( 'header nav' ).hide('fadeOut');
  }
});
});
if ($(window).width() < 992){
  $(document).mouseup(function (e) {
    var container = $('header nav');
    if (container.has(e.target).length === 0){
      container.slideUp('fast');
    }
  });
}


// Уже собрано

// span = $('#summ span'),
// cntGroup = 3;
// divsArr = span.get();
// for(i = 0; i < span.length; i += cntGroup){
//   $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class="span-wrapper"></div>');
// }

already = 5000000000

summ = Number(already).toLocaleString('en');
$('#summ').text(summ);

$('#summ').each(function (index) {
  var characters = $(this).text().split(",");
  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
    $this.append("<span>" + el + "</span");
  });
});



// Ароматы
$(document).ready(function() {
  $('select').styler();
  $("#arom option").each(function(){
    var cont = $(this).text();
    $(this).val(cont)
  });
  var aromDesc = $(this).find(':selected').data('desc');
  $('#aromDesc').html(aromDesc);
  $('#arom').change(function(){
    var aromDesc = $(this).find(':selected').data('desc');
    $('#aromDesc').html(aromDesc);
  });
});


// Корзина
$(document).ready(function() {

  $('.order button').click(function() {

    $('header').addClass('header-fix');
    $('header').removeClass('header-close');

    design = $('.slider-nav .slick-current img').attr('src');
    arom = $('#arom option:selected').val();
    price = $('.order .price span').text();

    $('#cartContent').prepend("<li><img src='"+design+"'>" + arom + "<span>" + price + "</span>р/шт</li>");
    cartData = $('#cartContent').html();
    localStorage.setItem('candle', cartData);

    $('#clear').show();

    $('#cartQ').show();
    cartQ = $('#cartContent li').length;
    $('#cartQ').text(cartQ);

    return false;
  });

  $('.cart-icon').click(function(){
    total = 0;
    $('#cartContent li span').each(function () {
      total += parseInt($(this).text());
    });
    $('.modal-body span>strong').html(total);
  });

  if (localStorage.getItem('candle')) {
    $('#cartContent').html(localStorage.getItem('candle'));
  }

  $('#clear').click(function() {
    window.localStorage.clear();
    alert('Корзина очищена');
    location.reload();
    return false;
  });

  cartQ = $('#cartContent li').length;
  if(cartQ==0){
    $('#cartQ, #clear').hide();
  }
  $('#cartQ').text(cartQ);

});


// Отправка сообщения
$(document).ready(function() {

  $(".modal-body form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Ваш заказ принят! Скоро мы свяжемся с Вами!");
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});



});
