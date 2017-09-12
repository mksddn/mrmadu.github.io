jQuery(document).ready(function(){
	
	ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [45.0451083449461, 38.98511473263938],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject();
	
	myMap.behaviors.disable('scrollZoom');
	
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([45.026112710390784, 39.02779048939282], {
            balloonContent: '<img src="../images/sq_logo.jpg" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Многофункциональная клиника Маммэ</b><p>г. Краснодар, пр. Карасунский, 15/2<br/>т. 8 800 100-76-32</p>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.02645012229978, 39.030259506632994], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 505</b>, <br/>ул. Селезнева, 76 <br/>Часы работы: 8:00-20:00 <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.04714517958309, 38.97549220795485], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 6</b>, <br/>ул. Рашпилевская, 183 <br/>Часы работы: круглосуточно <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.05929467907597, 38.98288742911042], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 13</b>, <br/>ул. Офицерская, 43 <br/>Часы работы: 8:00-20:00 <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.026658544644945, 38.97165085597691], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 4</b>, <br/>ул. Красная, 64 / ул. Гоголя, 66 <br/>Часы работы: 8:00-20:00 <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.05485454800082, 39.01703351050131], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 508</b>, <br/>ул. 40 лет Победы, 146/10 <br/>Часы работы: 8:00-24:00 <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.0625708, 38.9927165], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптечный пункт № 21</b>, <br/>ул. Зиповская, 5/2<br/>Часы работы: 10:00-19:00 <br/>т. 8 800 505 4 003'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
		.add(new ymaps.Placemark([45.059040757441934, 38.95481113769948], {
            balloonContent: '<img src="../images/apteka_0.png" style="display:block; width:200px; height:auto; margin-bottom:10px;" /><b>Аптека № 17</b>, <br/>ул. Атарбекова, 40 <br/>Часы работы: 8:00-21:00 <br/>т. 204-01-92'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }));
}

	
	// Скроллинг по кадрам
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(1) a, .frame-one-zakladka').click(function() {
		
		var title_scrolltop = jQuery('#frame-two-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(2) a').click(function() {
		
		var title_scrolltop = jQuery('#frame-three-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(3) a').click(function() {
		
		var title_scrolltop = jQuery('#frame-four-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(4) a').click(function() {
		
		var title_scrolltop = jQuery('#frame-fifth-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(5) a').click(function() {
		
		var title_scrolltop = jQuery('#frame-sixth-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(6) a').click(function() {
		
		var title_scrolltop = jQuery('#frame-seventh-container').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	jQuery('.top-menu-wrapper ul li:nth-of-type(7) a').click(function() {
		
		var title_scrolltop = jQuery('#contact').offset();
		
		jQuery('html,body').animate({scrollTop:title_scrolltop.top},'slow');
		
		return false;
		
	});
	
	
	
	// Проверка и отправка формы
	
	jQuery('form').submit(function(){
		
		var current_form = jQuery(this);
		
		jQuery(this).find('input:not([type=submit]), textarea').each(function(){
			
			if (jQuery(this).val() == '') {
				
				jQuery(this).addClass('empty_input_field');
				
			}
			
			else {
				
				jQuery(this).removeClass('empty_input_field');
				
			}
			
		});
		
		if (jQuery('.empty_input_field').length > 0) {
			
			jQuery('.empty_input_field').fadeOut(function(){
				
				jQuery('.empty_input_field').fadeIn();
				
			});
			
			return false;
			
		}
		
		else {
			
			var dataString = 'user_name=' + current_form.find('input.name').val() + '&user_email='+ current_form.find('input.email').val() + '&user_phone='+ current_form.find('input.phone').val() + '&user_message='+ current_form.find('textarea').val();
			
			jQuery.ajax({
				type: "GET",
				url: "order_call.php",
				data: dataString,
				cache: false,
				success: function(result){
					jQuery('.order_call_success').slideDown(function(){
						current_form.find('input:not([type=submit]),textarea').val('');
						jQuery('.order_call_success').delay(1500).slideUp();
					});
				}
			});
			
		}
		
		return false;
		
	});
	
	
	
	// Кнопка возврата на верх страницы
	
	jQuery(window).scroll( function() {
		
		if (jQuery(this).scrollTop() > 1000 && jQuery('.arrow_back_up').is(':hidden')) {
			
			jQuery('.arrow_back_up').fadeIn();
			
		}
		
		else if ($(this).scrollTop() <= 1000 && jQuery('.arrow_back_up').is(':visible')) {
			
			jQuery('.arrow_back_up').fadeOut();
			
		}
	
	});
	
	jQuery('.arrow_back_up').click(function(){
		
		jQuery('html,body').animate({scrollTop:0},'slow');
		
	});
	
	
	
	// Анимации
	
	jQuery('.frame-two-chemical_container').css('opacity','0').css('top','-30px');
	
	jQuery('.frame-three-laminary').css('opacity','0').css('left','10%');
	
	jQuery('.frame-sixth-cycle_image_wrapper').css('opacity','0').css('top','-30px');
	
	function chain_animate(jq){
		
		jq.eq(0).animate({'top':'0px','opacity':'1'}, function(){
			
			jq.length > 1 && chain_animate(jq.slice(1));
			
		});
	}
	
	jQuery(window).scroll( function() {
		
		var second_frame_offset = jQuery('#frame-two-container').offset();
		
		var third_frame_offset = jQuery('#frame-three-container').offset();
		
		var pills_photo_offset = jQuery('.frame-sixth-pills_list').offset();
		
		if (jQuery(this).scrollTop() > second_frame_offset.top-400 && !jQuery('.frame-two-chemical_container').is(':animated') && jQuery('.frame-two-chemical_container').css('top') == '-30px') {
	
			chain_animate(jQuery('.frame-two-chemical_container'));
		
		}
		
		if (jQuery(this).scrollTop() > third_frame_offset.top && !jQuery('.frame-three-laminary').is(':animated') && jQuery('.frame-three-laminary').css('opacity') == 0 && jQuery('.frame-three-laminary').is(':visible')) {
	
			jQuery('.frame-three-laminary').animate({'left':'13%','opacity':'1'});
		
		}
		
		if (jQuery(this).scrollTop() > pills_photo_offset.top-400 && !jQuery('.frame-sixth-cycle_image_wrapper').is(':animated') && jQuery('.frame-sixth-cycle_image_wrapper').css('top') == '-30px') {
	
			chain_animate(jQuery('.frame-sixth-cycle_image_wrapper'));
		
		}
	
	});
	
	
});