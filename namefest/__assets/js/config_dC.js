jQuery(document).on('ready', function ($) {
    "use strict";

    /*-------------------------------
        COWNDOWN TIMER
    --------------------------------*/
    $('.clock-countdown').downCount({
        date: $('.site-config').attr('data-date'),
        offset: +10
    }, function () {
        //callback here if finished
        //alert('YES, done!');
    });

}(jQuery));