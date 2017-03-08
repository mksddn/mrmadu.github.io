$(document).ready(function () {
    var fullPageCreated = false;

    createFullpage();

    $(window).resize(function(){
        sectionAutoHeight();
    });

    function sectionAutoHeight() {
        var $windowWidth = $(window).width();

        if($windowWidth <= 1024){
            $('.section').addClass('fp-auto-height');
        }else {
            $('.section').removeClass('fp-auto-height');
        }
    }

    function createFullpage() {
        var $windowWidth = $(window).width();

        if($windowWidth > 1024) {
            if(fullPageCreated === false) {
                fullPageCreated = true;
                $('.js-index-page').fullpage({
                    navigation: true,
                    responsiveWidth: 1024
                });
            }
        }else {

        }
    }
});