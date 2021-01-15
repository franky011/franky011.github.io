// owl-carousel
$(document).ready(function() {
    $(".maintest__text--owl").owlCarousel({
        loop: true,
        nav: false,
        // margin: 20,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1

            },
            1000: {
                items: 1,
                dotsEach: 1,
            }
        }
    });
});
// 
// owl-carousel 
$(document).ready(function() {
    $(".test__img").owlCarousel({
        loop: true,
        nav: false,
        // margin: 20,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 2,
            },
            600: {
                items: 3,
                dotsEach: 2,

            },
            1000: {
                items: 4,
                dotsEach: 2,
            }
        }
    });
});
//