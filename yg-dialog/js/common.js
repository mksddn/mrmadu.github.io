$(function() {

  $(".m-menu i").click(function() {
    if($("header nav").is( ':hidden' )){
      $("header nav").slideToggle(500);
    } else {
      $("header nav").slideUp(500);
    }
  });
  $(window).resize(function() {
    if ($(window).width() > 768){
      $("header nav").show();
    }
    if ($(window).width() < 768){
      $("header nav").hide();
      $(document).mouseup(function (e) {
        var container = $('header nav');
        if (container.has(e.target).length === 0){
          container.slideUp('fast');
        }
      });
    }
  });
  if ($(window).width() < 768){
    $(document).mouseup(function (e) {
      var container = $('header nav');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }



  $(document).ready(function() {
    $('.select2-item').select2();
  });



  $('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
  // centerMode: true,
  focusOnSelect: true
});


  $('.popup-dialog').magnificPopup({
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


});