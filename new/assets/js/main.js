$(function() {
    var optionSliderQuarter  = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1500,
        arrows: true,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    },

    optionSliderSingle  = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    },

    optionSliderAutoplay  = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    };

    $(document).ready(function () {
        sliderProjectsIndexInitial();
        minHeightInnerPages();
        manufacturerBlocksSize();
        sliderOtherInitial();
        sliderCatalogCardInitial();
        fancyboxInitial();
        contactsBlockToggle();

        $(window).resize(function(){
            minHeightInnerPages();
            manufacturerBlocksSize();
        });

        $(window).scroll(function(){

        });

        $(window).load(function(){
            $('.js-slider-autoplay').slick(optionSliderAutoplay);
            $('.preloader').fadeOut();
        });

        /*setTimeout(function(){$('.preloader').fadeOut();}, 3000);*/

        function sliderProjectsIndexInitial() {
            $('.js-projects-holder').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: true,
                dots: false,
                speed: 600,
                arrows: true,
                prevArrow: '<span class="slick-prev"></span>',
                nextArrow: '<span class="slick-next"></span>',
                asNavFor: '.js-projects-view'
            });
            $('.js-projects-view').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                speed: 600,
                asNavFor: '.js-projects-holder'
            });
        }

        function sliderCatalogCardInitial() {
            $('.product__view').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                speed: 600,
                asNavFor: '.product__navigation'
            });
            $('.product__navigation').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                focusOnSelect: true,
                dots: false,
                speed: 600,
                arrows: false,
                //prevArrow: '<span class="slick-prev"></span>',
                //nextArrow: '<span class="slick-next"></span>',
                asNavFor: '.product__view'
            });
        }

        function sliderOtherInitial() {
            $('.js-slider-quarter').slick(optionSliderQuarter);

            $('.js-slider-single').slick(optionSliderSingle);
        }

        function minHeightInnerPages() {
            var $windowHeight = $(window).height(),
                $headerHeight = $('.header').height(),
                $footerHeight = $('.footer').height(),
                $valueHeight = $windowHeight - $footerHeight -$headerHeight,
                $innerPageWrapper = $('.layout__page'),
                $heightAboutBlock = $('.about__holder').height(),
                $windowWidth = $(window).width();

                if($windowWidth > 1024) {
                    $innerPageWrapper.css({
                        'min-height' : $valueHeight,
                        'margin-top' : $headerHeight
                    });
                    $('.error').css('height' , $valueHeight);
                }else {
                    $innerPageWrapper.css({
                        'margin-top' : $headerHeight
                    });
                }

                if($heightAboutBlock > $valueHeight) {
                    $('.about__visual').css('height' , $heightAboutBlock)
                }else {
                    $('.about__visual').css('height' , $valueHeight)
                }
        }

        function manufacturerBlocksSize() {
            var $item = $('.manufacturer__holder'),
                $widthItem = $item.width();

            $item.css({
                'height' : $widthItem + 2,
                'line-height' : $widthItem + 'px'
            });
        }

        function fancyboxInitial() {
            $('.product__picture').fancybox();
        }

        function contactsBlockToggle() {
            $('.contacts').on('click' , '.contacts__tab' , function(){
                $('.contacts__tab').removeClass('contacts__tab_state_active');
                $(this).addClass('contacts__tab_state_active');
                $('.contacts__block').hide().eq($(this).index()).fadeIn();
                $('.contacts__map').hide().eq($(this).index()).fadeIn();
            });
        }

        $('body').click(function (e) {
            var container = $(".js-no-click");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.search__hidden').fadeOut();
            }
        });
    });
});