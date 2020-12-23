// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;

    // on scroll,
    $(window).on('scroll', function() {

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
        }

    });


    // Collapse navbar on click

    $(document).on('click.nav', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).removeClass('in').addClass('collapse');
        }
    });



    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function() {
        $('#back-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });





    /*-------- Owl Carousel ---------- */
    $(".rev-list").owlCarousel({

        slideSpeed: 200,
        items: 1,
        singleItem: true,
        autoPlay: true,
        pagination: false
    });




    /* ------ jQuery for Easing min -- */

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });


    /* --------- Wow Init ------ */

    new WOW().init();


    /* ----- Counter Up ----- */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*----- Subscription Form ----- */
    /*----- Subscription Form ----- */

    $(document).ready(function() {
        // jQuery Validation
        $("#chimp-form").validate({
            // if valid, post data via AJAX
            submitHandler: function(form) {
                $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function(data) {
                    $('#response').html(data);
                });
            },
            // all fields are required
            rules: {
                email: {
                    required: true,
                    email: true
                }
            }
        });
    });


    // Accordion //

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("span.glyphicon")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
    }
    $('#accordion').on('hide.bs.collapse show.bs.collapse', toggleChevron);

});


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document)
    .ready(function() {

        var urlParams = new URLSearchParams(location.search);
        if (urlParams.has('ref')) {
            setCookie('ref', urlParams.get('ref'), 30);
        }


        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }


        var onloadCallback = function() {
            grecaptcha.render('recaptcha1', {
                'sitekey': '6Lcr1s8ZAAAAAMqWLqJ0MclOsbeCbbE-6NWN9y06',
                'callback': function(response) {
                    var name = $('#leadspod-download-course-hero-name').val();
                    var email = $('#leadspod-download-course-hero-email').val();
                    post_data = {
                        'name': name,
                        'email': email,
                        'choice': "leadspod-download-course-hero"
                    };
                    var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
                    var jqxhr = $.post(url, post_data, function(post_data) {
                            setTimeout(function() {
                                window.location.replace('thank-you.html');
                            }, 500);
                        })
                        .fail(function(data) {
                            setTimeout(function() {
                                window.location.replace('error.html');
                            }, 500);
                        });

                }
            });
            grecaptcha.render('recaptcha2', {
                'sitekey': '6Lcr1s8ZAAAAAMqWLqJ0MclOsbeCbbE-6NWN9y06',
                'callback': function(response) {
                    var email = $('#leadspod-download-course-footer-email').val();
                    var name = $('#leadspod-download-course-footer-name').val();
                    post_data = {
                        'name': name,
                        'email': email,
                        'choice': "leadspod-download-course-footer"
                    };
                    var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
                    var jqxhr = $.post(url, post_data, function(post_data) {
                            setTimeout(function() {
                                window.location.replace('thank-you.html');
                            }, 500);
                        })
                        .fail(function(data) {
                            setTimeout(function() {
                                window.location.replace('error.html');
                            }, 500);
                        });
                }
            });
        };
        //


        $("#leadspod-download-course-hero-submit").click(function(event) {
            event.preventDefault();
            $('#leadspod-download-course-hero-name')
                .css('border-color', '#e7e7e7');
            $('#leadspod-download-course-hero-email')
                .css('border-color', '#e7e7e7');

            var name = $('#leadspod-download-course-hero-name').val();
            var email = $('#leadspod-download-course-hero-email').val();

            var proceed = true;
            if (name == "") {
                $('#leadspod-download-course-hero-name')
                    .css('border-color', '#e41919');
                proceed = false;
            }
            if (email == "") {
                $('#leadspod-download-course-hero-email')
                    .css('border-color', '#e41919');
                proceed = false;
            }
            if (!isEmail(email)) {
                $('#leadspod-download-course-hero-email')
                    .css('border-color', '#e41919');
                proceed = false;
            }

            if (proceed) {
                document.querySelector("#recaptcha1").style.display = "block";
                document.querySelector("#leadspod-download-course-hero-submit").style.display = "none";
            }


        });




    });