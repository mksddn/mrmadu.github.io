$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

    $('.swiper-slide .slide-title').hover(
      function () {
        $('.swiper-slide').removeClass('active');
        $(this).parent().addClass('active');
    // $('.swiper-slide .slide-content').hide();
    // $(this).find('.slide-content').show(400);
}
);

    $(".mmenu").click(function() {
      if($(".main-menu").is( ':hidden' )){
        $(".main-menu").slideToggle(500);
    } else {
        $(".main-menu").slideUp(500);
    }
});
    $(window).resize(function() {
      if ($(window).width() > 768){
        $(".main-menu").show();
    }
    if ($(window).width() < 768){
        $(".main-menu").hide();
        $(document).mouseup(function (e) {
          var container = $('.main-menu');
          if (container.has(e.target).length === 0){
            container.slideUp('fast');
        }
    });
    }
});
    if ($(window).width() < 768){
      $(document).mouseup(function (e) {
        var container = $('.main-menu');
        if (container.has(e.target).length === 0){
          container.slideUp('fast');
      }
  });
  }

  $('.popup-with-zoom-anim').magnificPopup({
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

});
