$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 6,
        speed: 1000,
        autoplay: true,
        
        touchThreshold: 30,
        
        responsive: [
            {
                breakpoint: 1188,
                settings: {
                    slidesToShow: 5,
                    
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 3,
                    
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    
                }
            }
        ]



    });
});
$(document).ready(function () {
    $('.featured_product_slide').slick({
        arrows: false,
        slidesToShow: 4,
        speed: 1000,
        autoplay: true,
        touchThreshold: 30,
        responsive: [
            
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 2,
                    
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    
                }
            }
        ]



    });
});


$(document).ready(function () {
    $('.fashion').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        draggable: false,
        swipe: false,
        fade: true,
        speed: 1000


    });
});



$(document).ready(function () {
    $('.img_slider').slick({
        speed: 1000,
        autoplay: true,
        draggable: false,
        swipe: false,

    });
});