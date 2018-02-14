$("input, textarea").placeholder();
$('#back-top a').click(function(){
  $('body,html').animate({scrollTop:0},800);
  return false;});

$("#menu").on("click","a",function(event){event.preventDefault();
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

$(window).scroll(function(){if($(window).scrollTop()>300)$('#slidebox').animate({'left':'0px'},500);else
$('#slidebox').stop(true).animate({'left':'-230px'},500);});$('#slidebox .close').bind('click',function(){$(this).parent().remove();});