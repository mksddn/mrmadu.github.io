/*---Animate---*/ 
jQuery(document).ready(function($) {


    if (jQuery.browser.mobile === false) {

    	// Presentation
        $('#presentation h1').addClass('animated fadeInLeft delay1');

        $('#presentation .check-list').addClass('animated zoomIn delay2');

        $('#presentation .video-wrap video').addClass('animated fadeInDown delay3');

        $('#presentation .lead').addClass('animated fadeInUp delay1');

        $('#presentation .btn').addClass('animated fadeInUp delay1');

        $('#top_btn').addClass('animated fadeInUp delay1');

        $('#presentation .topform').addClass('animated fadeInUp delay1');

        $('nav').addClass('animated fadeInDown delay2');

        // About
        $('#about h2').addClass('animated fadeInDown delay1');

        $('#about p').addClass('animated fadeInUp delay2');

        $('#about .main-img').addClass('animated zoomIn delay1');

        // Pluses
        $('#pluses h2').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay1');}
        });

        $('#pluses p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#pluses ul').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        // techno
        $('#techno h2').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay1');}
        });

        $('#techno p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#techno li').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#techno .InLeft').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft delay2');}
        });
        $('#techno .InUp').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay2');}
        });
        $('#techno .InRight').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight delay2');}
        });

         //Scrinshots
         $('#scrinshots h2').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

         $('#scrinshots .pull-left').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft delay3');}
        });

         $('#scrinshots .media-body h3').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

         $('#scrinshots .media-body p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

        //Profit
         $('#profit h2').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

         $('#profit span').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft delay3');}
        });

         $('#profit img').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

         $('#profit p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        }); 

         $('#comment p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });
         $('#comment ul').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });
         $('#comment h3').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

        // Reviews
        $('#reviews h2').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInUp delay1');}
        });

        $('#reviews .ava').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInLeft delay2');}
        });

        $('#reviews .review-body').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeIn delay3');}
        });

        $('#reviews .review-body').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay4');}
        });

        // Buy
        $('#buy h2').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay1');}
        });

        $('#buy .standart').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#buy .premium').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInUp delay2');}
        });

        $('#buy .lux').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

        // Subscribe
        $('#subscribe h2').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay1');}
        });

        $('#subs_email').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInLeft delay3');}
        });

        $('#subs_btn').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInRight');}
        });

        // Contacts
        $('#contacts h2').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInUp delay1');}
        });

        $('#name').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#email').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

        $('#phone').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

        $('#message').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

        $('#btn').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown');}
        });

    }    


         /* Скроллинг к диезу */
         $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        
        //анимируем переход на расстояние 
        $('body,html').animate({scrollTop: top}, 500);
        });

        //MagnificPopup
         $(".popup").magnificPopup();

        //Аякс отправка форм
        //Документация: http://api.jquery.com/jquery.ajax/
        $(".form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {
                alert("Спасибо за заявку!");
                setTimeout(function() {
                    $.magnificPopup.close();
                    $(".form").trigger("reset");
                }, 1000);
            });
            return false;
        });



});