$(document).ready(function(){

    // this for insilize the init of wow.js plugn
    new WOW().init(); 

    // ================ this for slider by owl plugin
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // var owl_client = document.querySelector('.owl_client');

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.owl-four').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.owl-five').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }, 
            1200:{
                items:3
            }
        }
    })

});