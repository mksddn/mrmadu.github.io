function myFunction(x) {
    x.classList.toggle("change");
    const popupMenu =  document.querySelector('.popup-menu');
    if (popupMenu.classList.contains('active')) {
      popupMenu.classList.remove('active');
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('.header__logo').style.opacity = '1';
      document.querySelector('.header__menu').style.opacity = '1';
      popupMenu.style.zIndex = '-1';
    } else {
      popupMenu.classList.add('active');
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.header__logo').style.opacity = '0';
      document.querySelector('.header__menu').style.opacity = '0';
      popupMenu.style.zIndex = '2';
    }
  }


  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: "my-dots",
    autoplay: true,
    // fade: true,
    // prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 477.175 477.175" xml:space="preserve">    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
    // nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 477.175 477.175" xml:space="preserve">    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
  });