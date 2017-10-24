$(function() {

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

  $('.main__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

});
