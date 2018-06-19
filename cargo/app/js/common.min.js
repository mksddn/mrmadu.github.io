$(document).ready(function(){

  $('input[type=tel]').mask('+7(000)000-00-00');

  $('.toStep').click(function(){
    curInput = $(this).parent().find('input').val();
    if(curInput||$(this).hasClass('toBack')){
      console.log('nextStep')
      $('.form__step').hide();

      if($(this).hasClass('toStep1')){
        $('#step1').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep2')){
        $('#step2').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep3')){
        $('#step3').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep4')){
        $('#step4').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep5')){
        $('#step5').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep6')){
        $('#step6').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep7')){
        $('#step7').show().css('display', 'flex');
      }
      if($(this).hasClass('toStep8')){
        $('#step8').show().css('display', 'flex');
      }

    }

    else{
      alert('Заполните поле');
    }
    
  });
  

});
