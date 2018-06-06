$(document).ready(function(){


$("input, textarea").placeholder();
$('#back-top a').click(function(){
  $('body,html').animate({scrollTop:0},800);
  return false;});

$("#menu, #presentation").on("click","a",function(event){event.preventDefault();
  var id=$(this).attr('href'),top=$(id).offset().top;
  $('body,html').animate({scrollTop:top},500);});

$(".popup").magnificPopup();

$("form").submit(function(){
  var th=$(this);
  $.ajax({
    type:"POST",
    url:"mail.php",
    data:th.serialize()
  }).done(function(){
    alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
    setTimeout(function(){
      th.trigger("reset");
    },1000);});
  return false;});

$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="glyphicon glyphicon-chevron-left left"></span>',
  nextArrow: '<span class="glyphicon glyphicon-chevron-right right"></span>'
});

$(window).scroll(function(){if($(window).scrollTop()>300)$('#slidebox').animate({'left':'0px'},500);else
  $('#slidebox').stop(true).animate({'left':'-230px'},500);});$('#slidebox .close').bind('click',function(){$(this).parent().remove();});


  $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span></div>');
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

  // $(document).mouseleave(function(e){
  //   if (e.clientY < 0) {
  //     $('#modal').show();
  //   }     
  // });
  // $(document).mouseup(function (e) {
  //   var container = $('#modal');
  //   if (container.has(e.target).length === 0){
  //     container.hide();
  //   }
  // });


});