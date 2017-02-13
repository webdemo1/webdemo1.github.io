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
                items: 9,
                nav: false,
                loop: true,
                autoplayHoverPause: true
            }
        }
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
    $('#portfolio').height(900);
	$('#vision').height(1000);
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#portfolio').css('padding-top', '70px');
		$('#accordion-wrapper').raccordion({
			sliderWidth: $(window).width(),
			sliderHeight: 500,
		});
		$('#accordion-wrapper .slide img').height(500);
    } else {
		$('#accordion-wrapper').raccordion({
			sliderWidth: $(".container").width(),
			sliderHeight: 600,
		});
		$('#accordion-wrapper .slide img').height(600);
        $('#portfolio').css('padding-top', '70px');
        $('.image-group .image img').mouseenter(function () {
			$(this).parents('.image-group .image').css("z-index", 99);
            $(this).css({'-webkit-transform': 'scale(6.0,1)', '-ms-transform': 'scale(6.0,1)', 'transform': 'scale(6.0,1)', 'opacity': 1, 'object-fit': 'inherit'});
        });
        $('.image-group .image img').mouseleave(function () {
			$(this).parents('.image-group .image').css("z-index", 1);
            $(this).css({'-webkit-transform': 'scale(1,1)', '-ms-transform': 'scale(1,1)', 'transform': 'scale(1,1)', 'opacity': 0.7, 'object-fit': 'cover'});
        });
/*         $('.owl-item span').mouseenter(function () {
            $(this).closest('.image').find('img').trigger('mouseenter');
            $(this).closest('.image').find('img').css({'-webkit-transform': 'scale(6.0,1)', '-ms-transform': 'scale(6.0,1)', 'transform': 'scale(6.0,1)', 'opacity': 1});
        });
        $('.owl-item span').mouseleave(function () {
            $(this).closest('.image').find('img').css('z-index', '');
            $(this).closest('.image').find('img').css({'-webkit-transform': 'scale(1,1)', '-ms-transform': 'scale(1,1)', 'transform': 'scale(1,1)', 'opacity': 0.7});
        }); */
    }
	
	

});