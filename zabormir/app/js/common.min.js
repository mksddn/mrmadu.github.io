$(function() {

  var h_hght = 150;
  var h_mrg = 0;
  var elem = $('.header__menu');
  var top = $(this).scrollTop();
  if ($(window).width() > 767){
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
  $(window).resize(function() {
    if ($(window).width() > 767){
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
  });


  $(".m-menu").click(function() {
    if($(".header__menu").is( ':hidden' )){
      $(".header__menu").slideToggle(500);
    } else {
      $(".header__menu").slideUp(500);
    }
  });
  $(window).resize(function() {
    if ($(window).width() > 767){
      $(".header__menu").show();
    }
    if ($(window).width() < 767){
      $(".header__menu").hide();
      $(document).mouseup(function (e) {
        var container = $('.header__menu');
        if (container.has(e.target).length === 0){
          container.slideUp('fast');
        }
      });
    }
  });
  if ($(window).width() < 767){
    $(document).mouseup(function (e) {
      var container = $('.header__menu');
      if (container.has(e.target).length === 0){
        container.slideUp('fast');
      }
    });
  }

  $('.feats .section__content p').prepend('<i class="fas fa-check"></i>');

  $('.page_about img, .archive img').wrap('<div class="img_wr"></div>');

  $('.popup-link').magnificPopup({
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

  $("form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
