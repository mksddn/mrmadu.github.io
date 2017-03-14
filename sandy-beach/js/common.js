$(document).ready(function(){

/*===============  АКТИВАЦИЯ АНИМАЦИИ ===============*/

	new WOW().init();

/*===============  ФИКСАЦИЯ МЕНЮ ===============*/

	var h_hght = 110; // высота шапки
	var h_mrg = 0;    // отступ когда шапка уже не видна

	$(function(){

		var elem = $('#nav');
		var top = $(this).scrollTop();

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

	});

/*===============  ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ ===============*/

		$("nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

		$("#main").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

});