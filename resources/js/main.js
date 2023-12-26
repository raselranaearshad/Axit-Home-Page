jQuery(document).ready(function () {

	jQuery('.main_menu').meanmenu({
        meanScreenWidth: 767,
        meanMenuContainer: '.mobile-menu',
    });

    // Testimonial Slider
    $('.user-info').owlCarousel({
        loop:true,
        margin:100,
        nav: false,
        responsiveClass:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            768:{
                items:2,
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});