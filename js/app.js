$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        loop: true,
        margin: 0,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true,
                autoplayHoverPause: true
            }
        }
    });
    $('.bxslider').bxSlider({
        pager: false,
        auto: true,
        autoDelay: 1000
    });
    $('#ishiring').click(function () {
        $('#myModal').modal('show');
    });
    $('#hiring1').click(function () {
        $('#content-hiring1').toggle();
    });
    $('#hiring2').click(function () {
        $('#content-hiring2').toggle();
    });
    $('#hiring3').click(function () {
        $('#content-hiring3').toggle();
    });
    $('#closebutton').click(function () {
        $('#myModal').modal('hide');
    });
    var height = $(window).outerHeight(true);
    $('#portfolio').height(height);
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#portfolio').css('padding-top', '50px');
        $('.owl-carousel').css('height', height - 50);
        $('.owl-stage-outer').css('height', height - 50);
        $('.owl-item img').css('height', height - 50);
    } else {
        $('#portfolio').css('padding-top', '70px');
        $('.owl-carousel').css('height', height - 70);
        $('.owl-stage-outer').css('height', height - 70);
        $('.owl-item img').css('height', height - 70);
        $('.owl-item img').mouseenter(function () {
            $(this).parents(".owl-item").css("z-index", 99);
            $(this).css({'-webkit-transform': 'scale(1.3,1)', '-ms-transform': 'scale(1.3,1)', 'transform': 'scale(1.3,1)', 'opacity': 1});
        });
        $('.owl-item img').mouseleave(function () {
            $(this).parents(".owl-item").css('z-index', '');
            $(this).css({'-webkit-transform': 'scale(1,1)', '-ms-transform': 'scale(1,1)', 'transform': 'scale(1,1)', 'opacity': 0.7});
        });
        $('.owl-item span').mouseenter(function () {
            $(this).closest('.image').find('img').trigger('mouseenter');
            $(this).closest('.image').find('img').css({'-webkit-transform': 'scale(1.3,1)', '-ms-transform': 'scale(1.3,1)', 'transform': 'scale(1.3,1)', 'opacity': 1});
        });
        $('.owl-item span').mouseleave(function () {
            $(this).closest('.image').find('img').css('z-index', '');
            $(this).closest('.image').find('img').css({'-webkit-transform': 'scale(1,1)', '-ms-transform': 'scale(1,1)', 'transform': 'scale(1,1)', 'opacity': 0.7});
        });
    }

});