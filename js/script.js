jQuery(function() {

    if(jQuery(window).outerWidth() > 767) {

        // work
        var workTop = jQuery(".work-whole").offset().top;
        


        jQuery(window).scroll(function(event) {
            var scroll = jQuery(this).scrollTop();
            var opacity = 1 - (scroll / 1000);

            if (opacity >= 0) {
                jQuery('.work-whole .work-after').css('opacity', opacity);
            }

            if(scroll >= (workTop)) {
                jQuery('.work-whole .work-after').css('opacity', 0);

                jQuery(".work-title").addClass("hide");
                
            }

            else {
                jQuery(".work-title").removeClass("hide");
            }
            
        });


        // about
        var aboutTop = jQuery(".about-whole").offset().top;
        var opacity2 = 1;
        


        jQuery(window).scroll(function(event) {
            var scroll2 = jQuery(this).scrollTop();
            

            // if (opacity2 >= 0) {
            if (scroll2 > (aboutTop - 500)) {
                opacity2 -= 0.03;
                jQuery('.about-whole .about-after').css('opacity', opacity2);
                console.log(opacity2);
            }

            else {
                jQuery('.about-whole .about-after').css('opacity', 1);
                opacity2 = 1;
            }

            if(scroll2 >= (aboutTop)) {
                jQuery('.about-whole .about-after').css('opacity', 0);

                jQuery(".about-title").addClass("hide");
                
            }

            else {
                jQuery(".about-title").removeClass("hide");
            }
            
        });


        // touch
        var touchTop = jQuery(".touch-whole").offset().top;
        var opacity3 = 1;
        


        jQuery(window).scroll(function(event) {
            var scroll3 = jQuery(this).scrollTop();
            

            // if (opacity3 >= 0) {
            if (scroll3 > (touchTop - 900)) {
                opacity3 -= 0.07;
                jQuery('.touch-whole .touch-after').css('opacity', opacity3);
                console.log(opacity3);
            }

            else {
                jQuery('.touch-whole .touch-after').css('opacity', 1);
                opacity3 = 1;
            }

            if(scroll3 >= (touchTop)) {
                jQuery('.touch-whole .touch-after').css('opacity', 0);

                // jQuery(".about-title").addClass("hide");
                
            }

            else {
                // jQuery(".about-title").removeClass("hide");
            }
            
        });

    }
});