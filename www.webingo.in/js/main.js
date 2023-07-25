/* Theme: Niwax - Creative Web Design & Digital Marketing Agency HTML5 Template
Author: Rajesh-Doot	
File Description: Main JS file of the template*/
(function($) {
    "use strict";

    //wow animation
    new WOW().init();
    //Mobile nav
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');
    var defaultOptions = {
        disableAt: false,
        customToggle: $toggle,
        levelSpacing: 15,
        levelTitles: true,
        levelTitleAsBack: true,
        levelOpen: 'expand',
        closeOnClick: true,
        insertClose: true,
        closeActiveLevel: true,
        insertBack: true
    };
    // Nav call plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

    //Sticky Header 
    function updateScroll() {
        if ($(window).scrollTop() >= 80) {
            $(".navfix").addClass('sticky');
        } else {
            $(".navfix").removeClass("sticky");
        }
    }
    $(function() {
        $(window).scroll(updateScroll);
        updateScroll();
    });

    //Header mega menu
    var $nav = $('li.sbmenu');
    $nav.hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        }
    );

    //Video magnificPopup
    $('.video-link').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
    });
    //Owl-Carousel - Home hero card
    var owl = $('.service-logo');
    owl.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 2
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            },
            1400: {
                items: 5
            },
            1600: {
                items: 5
            },
        }
    });
    //Owl-Carousel - Home hero card
    var owl = $('.service-card-prb');
    owl.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            },
        }
    });
    //Owl-Carousel - Home testimonial
    var owl = $('.testimonial-card-a');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });

    //Owl-Carousel - video testimonial
    var owl = $('.video-testimonials');
    owl.owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1400: {
                items: 2
            }
        }
    });

    //Owl-Carousel - case-study
    var owl = $('.project-screens');
    owl.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            },
        }
    });
    //Counter Up	
    $(".counter").counterUp({
        delay: 10,
        time: 2500,
    });
    //Scroll to top
    $.scrollUp({
        animation: 'fade',
        scrollImg: {
            active: true,
            type: 'background'
        }
    });
    //Portfolio Filter		
    $('.card-list').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.card-list').isotope({
            itemSelector: '.single-card-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer'
            }
        });
        // filter items on button click
        $('.filter-menu').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });
    //for menu active class
    $('.filter-menu li').on('click', function(event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });


    // background image
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })


})(jQuery);



$(document).ready(function() {

    function namevalidation() {
        var x = document.getElementById("phoneDiv");

        x.style.display = "block";
    }

    function fnamevalidation() {}

    function lnamevalidation() {
        var x = document.getElementById("lnameDiv");

        x.style.display = "block";
    }

    function emailvalidation() {
        var x = document.getElementById("emailDiv");

        x.style.display = "block";
    }


    function clr() {
        document.getElementById("side_first_name").value = ""
        document.getElementById("side_last_name").value = ""
        document.getElementById("side_form_email").value = ""
        document.getElementById("side_mobile_number").value = ""
        document.getElementById("side_interested").value = ""
        document.getElementById("side_message").value = ""
    }

    $(document).on('click', '.submit_btn', function() {

        var first_name = $('#side_first_name').val();
        var last_name = $('#side_last_name').val();
        var form_email = $('#side_form_email').val();
        var mobile_number = $('#side_mobile_number').val();
        var interested = $('#side_interested').val();
        var txtmessage = $('#side_message').val();
        var pagename = $('#pagename').val();


        if (!document.getElementById("side_mobile_number").checkValidity()) {
            document.getElementById("phone_error_header").style.display = "block";
        } else {
            document.getElementById("phone_error_header").style.display = "none";
            if (!document.getElementById("side_first_name").checkValidity()) {
                document.getElementById("first_name_error_header").style.display = "block";
            } else {
                document.getElementById("first_name_error_header").style.display = "none";
                if (!document.getElementById("side_last_name").checkValidity()) {
                    document.getElementById("last_name_error_header").style.display = "block";
                } else {
                    document.getElementById("last_name_error_header").style.display = "none";
                    if (!document.getElementById("side_form_email").checkValidity()) {
                        document.getElementById("email_error_header").style.display = "block";
                    } else {
                        document.getElementById("email_error_header").style.display = "none";
                        $.ajax({
                            url: "insert_callback.php",
                            method: "POST",
                            data: {
                                first_name: first_name,
                                pagename: pagename,
                                last_name: last_name,
                                form_email: form_email,
                                mobile_number: mobile_number,
                                interested: interested,
                                txtmessage: txtmessage
                            },
                            success: function(data) {

                                //alert("Thanks For Contacting Us");
                                window.location.href = "thankyou";
                                //function that clear the display 
                                clr();
                            }
                        });
                    }
                }
            }

        }






    });

});