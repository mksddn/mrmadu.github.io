$(function() {

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

});