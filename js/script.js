(function($) {
  
    "use strict";
    
    // fixed menu js
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 120) {
        $(".header-3").removeClass("sticky-menu");
      } else {
        $(".header-3").addClass("sticky-menu");
      }
    });
    
    function preloaderLoad() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function() {
            $("#preloader").hide();
        });
    }

    $(document).on('click', '.close-newsletter', function () {
      $('.newsletter-area').addClass('remove');
    });


  // Countdown timer js
  function initializeCountdown(targetDate, countdownElement) {
    if (!countdownElement) {
      // Exit the function if the countdown element is not found
      return;
    }


  // Looking Product js For Home 21
  document.addEventListener('DOMContentLoaded', () => {
      // Get the necessary elements
      const productShowcase = document.getElementById('productShowcase');
      const infoButton = document.getElementById('infoButton');
      const infoButton2 = document.getElementById('infoButton2');
      const infoButton3 = document.getElementById('infoButton3');
      const productInfo = document.getElementById('productInfo');
      const productInfo2 = document.getElementById('productInfo2');
      const productInfo3 = document.getElementById('productInfo3');

      // Check if elements exist before adding event listeners
      if (infoButton && productInfo) {
          infoButton.addEventListener('click', (event) => {
              event.stopPropagation(); // Prevent event from bubbling to the container
              productInfo.style.display = 'block';
          });
      }

      if (infoButton2 && productInfo2) {
          infoButton2.addEventListener('click', (event) => {
              event.stopPropagation(); // Prevent event from bubbling to the container
              productInfo2.style.display = 'block';
          });
      }
      if (infoButton3 && productInfo3) {
          infoButton3.addEventListener('click', (event) => {
              event.stopPropagation(); // Prevent event from bubbling to the container
              productInfo3.style.display = 'block';
          });
      }

      if (productShowcase) {
          // Hide product info when clicking anywhere in the container
          productShowcase.addEventListener('click', () => {
              if (productInfo) productInfo.style.display = 'none';
              if (productInfo2) productInfo2.style.display = 'none';
              if (productInfo3) productInfo3.style.display = 'none';
          });
      }

      if (productInfo) {
          // Prevent hiding product info when clicking inside the info box
          productInfo.addEventListener('click', (event) => {
              event.stopPropagation(); // Prevent event from bubbling to the container
          });
      }

      if (productInfo2) {
          // Prevent hiding product info when clicking inside the info box
          productInfo2.addEventListener('click', (event) => {
              event.stopPropagation(); // Prevent event from bubbling to the container
          });
      }
  });

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown values only if the elements are found
      const daysElement = countdownElement.querySelector('.days .count');
      const hoursElement = countdownElement.querySelector('.hours .count');
      const minutesElement = countdownElement.querySelector('.minutes .count');
      const secondsElement = countdownElement.querySelector('.seconds .count');

      if (daysElement) daysElement.textContent = days;
      if (hoursElement) hoursElement.textContent = hours;
      if (minutesElement) minutesElement.textContent = minutes;
      if (secondsElement) secondsElement.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }
  // Set the target date and time
  const targetDate = new Date('2025-06-01T00:00:00').getTime(); // Adjust the target date
  const countdownBox = document.querySelector('.countdown-box');

  // Initialize the countdown
  initializeCountdown(targetDate, countdownBox);

    function mobileNavToggle() {
        if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
            var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
            subNavToggler.on('click', function () {
                var Self = $(this);
                Self.parent().parent().children('.sub-menu').slideToggle();
                return false;
            });

        };
    }


    /* ----- Mobile Nav ----- */
    // $(function() {
    //     $('nav#menu').mmenu();
    // });


    // === jQuery MMENU S T A R T ===
    $(function () {
      var headerHTML =
        '<div class="mmx-header">' +
          '<div class="mmx-left">' +
            '<a href="#" class="js-mm-close"><i class="flaticon-close"></i></a>' +
            '<a href="#" class="js-mm-search cart-search-btn"><i class="flaticon-web"></i></a>' +
          '</div>' +
          '<div class="mmx-logo"><img src="images/logo-new.svg" alt="newsletter-img"></div>' +
          '<div class="mmx-right">' +
            '<a class="signin-cart-btn" href="#"><i class="flaticon-user-1"></i></a>' +
            '<a class="cart-search-btn" href="#"><i class="flaticon-shopping-bag"></i></a>' +
          '</div>' +
        '</div>';

      var footerHTML =
        '<div class="mmx-footer">' +
        '<h4 class="social-title">FOLLOW US</h4>' +
        '<div class="mmx-social">' +
          '<a href="#"><i class="fa-brands fa-facebook-f"></i></a>' +
          '<a href="#"><i class="fa-brands fa-instagram"></i></a>' +
          '<a href="#"><i class="fa-brands fa-x-twitter"></i></a>' +
          '<a href="#"><i class="fa-brands fa-youtube"></i></a>' +
          '<a href="#"><i class="fa-brands fa-pinterest"></i></a>' +
          '<a href="#"><i class="fa-brands fa-tiktok"></i></a>' +
        '</div>' +
        '<div class="mmx-lang">' +
          '<label for="lang-select">Change location and language</label>' +
          '<select id="lang-select">' +
            '<option value="us-en" selected>United States · English (US)</option>' +
            '<option value="us-es">Spanish · Español</option>' +
            '<option value="uk-en">United Kingdom · English (UK)</option>' +
            '<option value="fr-fr">France · Français</option>' +
            '<option value="bd-bn">Bangladesh · বাংলা</option>' +
          '</select>' +
        '</div>' +
      '</div>';

      // init mmenu with back button enabled
      var $menu = $("#menu").mmenu({
        extensions: ["position-left","pagedim-white","theme-light"],
        slidingSubmenus: true,
        navbar: { title: "Demo" }, // shows "Back" button when in submenus
        navbars: [
          { position: "top", content: [ headerHTML ] },
          { position: "bottom", content: [ footerHTML ] }
        ]
      });

      var api = $menu.data("mmenu");

      $("#menu-btn").on("click", function (e) {
        e.preventDefault();
        api.open();
      });

      $(document).on("click", ".js-mm-close", function (e) {
        e.preventDefault();
        api.close();
      });
    });
    // === jQuery MMENU E N D ===


    /* ----- Shop List Page Side Panel ----- */
    $(function() {
      // Open panel
      $(document).on('click', '.open-panel-lg', function() {
        $('.side-panel-lg').addClass('active');
        $('.side-panel-overlay, .shop-list3').addClass('active');
      });

      // Close panel on button or overlay click
      $(document).on('click', '.close-panel-lg, .side-panel-overlay', function() {
        $('.side-panel-lg').removeClass('active');
        $('.side-panel-overlay, .shop-list3').removeClass('active');
      });
    });

    /*=============================================
      =        color swatch product    =
    =============================================*/
    var swatchColor = function () {
      if ($(".card-product").length > 0) {
      $(".color-swatch").on("click, mouseover", function () {
        var swatchColor = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".card-product").find(".img-product");
        imgProduct.attr("src", swatchColor);
        $(this)
        .closest(".card-product")
        .find(".color-swatch.active")
        .removeClass("active");

        $(this).addClass("active");
      });
      }
    };

    /* ----- This code for menu ----- */
    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = $('.header-navigation').next().offset().top;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
    });
    /** Main Menu Custom Script End **/

    /*===========================================
      =          Data Background    =
    =============================================*/
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
      $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*===========================================
          =       Odometer Active    =
    =============================================*/
    $('.odometer').appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });



    /*=============================================
      =  Initialize Swipers on page load instagram home20 =
    =============================================*/
    // var swiperInstances = [];
    // $('.gt-slider').each(function () {
    //     var sliderContainer = $(this);
    //     var swiperInstance = initializeSwiper(sliderContainer);
    //     swiperInstances.push(swiperInstance);
    // });


    /*=============================================
      =        su-blog-4-slider      =
    =============================================*/
    var slider = new Swiper('.su-blog-4-slider', {
      speed: 700,
      spaceBetween: 30,
      loop: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        },
      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 2,
        },
        '1200': {
          slidesPerView: 2,
        },
        '991': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });

    var slider = new Swiper('.two-grid-slider', {
        speed: 700,
        spaceBetween: 30,
        loop: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        autoplay: {
          delay: 4000,
        },
        thumbs: {
          swiper: swiper,
        },
        breakpoints: {
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '991': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    // Testimonial Slider Thumb 23
    var swiper = new Swiper(".three-grid-thumb-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".one-grid-text-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
    });
    
    /*=============================================
      =        su-product-7-slider       =
    =============================================*/
    var headerSlider = new Swiper('.su-product-7-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      // autoplay: true,
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var headerSlider = new Swiper('.su-product-7-slider-2', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      // autoplay: true,
      speed: 600,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
    });

    // Instagram-Slider-Home20
    var beFeaturedSlider20 = new Swiper('.insta-slider-home20', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 13,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 13,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 13,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 13,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 13,
        },
      },
    });

    // fave-brand-slider20
    var faveBrandSlider20 = new Swiper('.fave-brand-slider20', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 13,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 13,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 13,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 13,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 13,
        },
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    });

    /*=============================================
      =        header-top-slider-active      =
    =============================================*/
    var headerSlider = new Swiper('.header-top-slider-active', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: true,
      speed: 600,
    });

    /*=============================================
      =        cu-banner-4-zoom      =
    =============================================*/
    var slider = new Swiper('.su-banner-4-zoom', {
      slidesPerView: 1,
      speed:1500,
      spaceBetween: 0,
      loop: true,
      parallax: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".su-banner-4-next",
        prevEl: ".su-banner-4-prev",
      },
    });

    /*=============================================
      =        One Grid Slider      =
    =============================================*/
    var slider = new Swiper('.one-grid-slider', {
      slidesPerView: 1,
      speed:1500,
      spaceBetween: 0,
      loop: true,
      parallax: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".su-banner-4-next, .next",
        prevEl: ".su-banner-4-prev, .prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    // Banner Page Number Slider Style 
    var oneGridBannerSlider = new Swiper('.one-grid-pagination-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      // autoplay: true,
      speed: 600,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          var formattedIndex = (index + 1).toString().padStart(2, '0');
          return '<span class="' + className + '">' + formattedIndex + "</span>";
        },
      },
    });
    // Banner Pagination Slider Style 
    var oneGridBannerSlider = new Swiper('.one-grid-bullet-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        speed: 600,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

  /*=============================================
     =        cu-banner-4-zoom      =
   =============================================*/
  var slider = new Swiper('.su-product-slide', {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 0,
      loop: true,
      autoplay: {
          delay: 3500,
      },
      navigation: {
          nextEl: ".product-next",
          prevEl: ".product-prev",
      },
  });
    
  /*=============================================
    =        cu-banner-3      =
  =============================================*/
  var slider = new Swiper('.su-banner-3-zoom', {
    slidesPerView: 1,
    speed: 1500,
    direction: "vertical",
    spaceBetween: 0,
    loop: false,
    mousewheel: {
      releaseOnEdges: true, // Allow scrolling outside the slider
    },
    parallax: true,
    // autoplay: {
    //   delay: 3500,
    // },
    navigation: {
      nextEl: ".su-banner-16-next",
      prevEl: ".su-banner-16-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=============================================
    =       su-collections-15-slider      =
  =============================================*/
  var slider = new Swiper('.su-collection-15-slider', {
    loop: "true",
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  /*=============================================
    =       su-collections-15-slider      =
  =============================================*/
  var slider = new Swiper('.su-collection-15-slider-2', {
    loop: "true",
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });


  $(document).on("mouseenter", ".swiper-slide", function () {
    let newBackground = $(this).find(".collection_item").data("bg");
    $(".swiper-slide.active-slider").removeClass("active-slider");
    $(this).addClass("active-slider");
    $(".collection-wrap-bg").css("background-image", "url(" + newBackground + ")");
  });

  $(document).on("mouseenter", ".hover-bg-img", function () {
    let newBackground = $(this).find(".item-block").data("bg");
    $(".hover-bg-img.active-slider").removeClass("active-slider");
    $(this).addClass("active-slider");
    $(".collection-wrap-bg").css("background-image", "url(" + newBackground + ")");
  });

  $(document).on("ready",function () {
    // Function to toggle play/pause
    function setupVideoControls(videoClass, buttonClass, playIcon, pauseIcon) {
      const $video = $(videoClass);
      const videoElement = $video.get(0);
      const $controlButton = $(buttonClass);
      const $icon = $controlButton.find('i');

      // Ensure button is always clickable
      $controlButton.css({
        "z-index": "10",
        "cursor": "pointer"
      });

      // Play/Pause toggle on button click
      $controlButton.on('click', function () {
        if (videoElement.paused) {
          videoElement.play();
          $icon.removeClass(playIcon).addClass(pauseIcon);
        } else {
          videoElement.pause();
          $icon.removeClass(pauseIcon).addClass(playIcon);
        }
      });

      // Update icon if video is played/paused manually
      $video.on('play', function () {
        $icon.removeClass(playIcon).addClass(pauseIcon);
      });

      $video.on('pause', function () {
        $icon.removeClass(pauseIcon).addClass(playIcon);
      });
    }

    // Initialize video controls
    setupVideoControls('.video-19', '.control-video', 'fa-play-circle', 'fa-pause-circle');
    setupVideoControls('.shop-video', '.control-video1', 'fa-play', 'fa-pause');
  });
  


  /*=============================================
    =        su-brands-5-text-slide       =
  =============================================*/
  var textslider5 = new Swiper('.brands-5-text-slide', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
  });

  /*=============================================
    =        su-brands-5-img-slide       =
  =============================================*/
  var imgslider5 = new Swiper('.brands-5-img-slide', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      '992': {
        spaceBetween: 90,
    slidesPerView: 3,
      },
      '768': {
        spaceBetween: 90,
    slidesPerView: 2,
      },
      '576': {
        spaceBetween: 90,
      },
      '0': {
        spaceBetween: 26,
    slidesPerView: 1,
      },
    }
  });

  textslider5.controller.control = imgslider5;
  imgslider5.controller.control = textslider5;

  /*=============================================
    =        su-banner-16-zoom      =
  =============================================*/
  var slider = new Swiper('.su-banner-5-zoom', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    // autoplay: {
    //   delay: 3500,
    // },
    navigation: {
      nextEl: ".su-banner-5-next",
      prevEl: ".su-banner-5-prev",
    },
  });
  

  /*=============================================
    =        su-product-7-slider       =
  =============================================*/
  var headerSlider = new Swiper('.su-product-7-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var hoverPin = function () {
    if ($(".wrap-lookbook-hover").length) {
    $(".bundle-pin-item").on("mouseover", function () {
      $(".bundle-hover-wrap").addClass("has-hover");
      var $el = $('.' + this.id).show();
      $('.bundle-hover-wrap .bundle-hover-item').not($el).addClass("no-hover");
    });
    $(".bundle-pin-item").on("mouseleave", function () {
      $(".bundle-hover-wrap").removeClass("has-hover");
      $(".bundle-hover-item").removeClass("no-hover");
    });
    }
  };


    /*=============================================
      =        su-brands-4-slide       =
    =============================================*/
    var slider = new Swiper('.su-brands-7-slide', {
      loop: true,
      freemode: true,
      slidesPerView: 'auto',
      spaceBetween: 162,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 4000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      breakpoints: {
        '992': {
          spaceBetween: 200,
        },
        '768': {
          spaceBetween: 90,
        },
        '576': {
          spaceBetween: 90,
        },
        '0': {
          spaceBetween: 50,
        },
      }
    });

    /*=============================================
      =        su-testimonial-7-gallery-thumbs       =
    =============================================*/
    var thumbs = new Swiper('.su-testimonial-7-gallery-thumbs', {
      slidesPerView: 5,
      spaceBetween: 80,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        450: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        868: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    var slider = new Swiper('.su-testimonial-7-gallery-slider', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
    });
  
    slider.controller.control = thumbs;
    thumbs.controller.control = slider;

    /*=============================================
      =        su-brands-4-slide       =
    =============================================*/
    var gallery = new Swiper('.su-banner-8-active', {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      arrow: false,
      spaceBetween: 0,
      speed: 2000,
      effect: 'fade',
      a11y: false,
      pagination: {
        el: ".su-banner-8-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
  
    });


  /*=============================================
    =        su-blog-4-slider      =
  =============================================*/
  var slider = new Swiper('.su-product-8-slider', {
    speed: 700,
    spaceBetween: 4,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      },
    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 3,
      },
      '991': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

  var slider = new Swiper('.su-product-8-slider-2', {
    speed: 700,
    spaceBetween: 4,
    loop: true,
    navigation: true,
    scrollbar: {
      el: ".swiper-scrollbar-2",
      hide: false,
      },
    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 3,
      },
      '991': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });


  /*=============================================
    =        su-product-7-slider       =
  =============================================*/
  var headerSlider = new Swiper('.su-testimonal-8-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    speed: 600,
    navigation: {
      nextEl: ".testimonal-next",
      prevEl: ".testimonal-prev",
    },
  });

  /*=============================================
    =        su-banner-15-zoom      =
  =============================================*/
  var slider = new Swiper('.su-banner-15-zoom', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=============================================
    =        su-banner-14-zoom      =
  =============================================*/
  var slider = new Swiper('.su-banner-14-zoom', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination-14",
      clickable: true,
    },
  });

  /*=============================================
    =        su-testimonial-15      =
  =============================================*/
  var slider = new Swiper('.testimonial-slider-15', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 40,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  /*=============================================
    =        su-banner-16-zoom      =
  =============================================*/
  var slider = new Swiper('.su-banner-16-zoom', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: false,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".su-banner-16-next",
      prevEl: ".su-banner-16-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  /*=============================================
    =        su-collections-9-slider       =
  =============================================*/
  var slider = new Swiper('.collection-9-slider', {
    speed: 700,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 3,
      },
      '991': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });


  /*=============================================
    =        su-categories-9-slider       =
  =============================================*/
  var slider = new Swiper('.categories-9-slider', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });


  /*=============================================
    =        products-12-slider       =
  =============================================*/
  var slider = new Swiper('.product-12-slider', {
    speed: 700,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 4,
      },
      '991': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

    
    // Banner Slider Style20 
    var bannerSlider20 = new Swiper('.banner-slider-20', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: true,
        speed: 600,
        effect: "fade"
    });


    /*=============================================
      =        su-collections-4-slider       =
    =============================================*/
    var slider = new Swiper('.su-collections-4-slider', {
      speed: 700,
      spaceBetween: 4,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        su-collections-4-slider       =
    =============================================*/
    var slider = new Swiper('.four-grid-slider', {
      speed: 700,
      spaceBetween: 4,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        su-collections-4.7-slider       =
    =============================================*/
    var slider = new Swiper('.five-grid-slider', {
      speed: 700,
      spaceBetween: 4,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 4.7,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        su-collections-5-2-slider       =
    =============================================*/
    var slider = new Swiper('.five-grid-slider2', {
      speed: 700,
      spaceBetween: 4,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar-2",
        hide: false,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        su-collections-5-slider       =
    =============================================*/
    var slider = new Swiper('.five-grid-slider3', {
      speed: 700,
      spaceBetween: 4,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar-3",
        hide: false,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });

    
    // Shop Item
    var fiveSixSlider = new Swiper('.five-six-grid-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 4.5,
        },
        1400: {
          slidesPerView: 4.5,
        },
      },
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
      },
      navigation: {
          nextEl: ".slider-nav-area .swiper-next",
          prevEl: ".slider-nav-area .swiper-prev",
      },

    });


    /*=============================================
      =        su-collections-3.5-slider       =
    =============================================*/
    var slider = new Swiper('.threefive-grid-slider', {
      speed: 700,
      loop: true,
      spaceBetween: 5,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
        hide: false,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 3.8,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        cu-banner-4-zoom      =
    =============================================*/
    var slider = new Swiper('.su-product-4-slide', {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
      },
    });

    /*=============================================
      =        su-brands-4-slide       =
    =============================================*/
    var slider = new Swiper('.su-brands-4-slide', {
      loop: true,
      freemode: true,
      slidesPerView: 'auto',
      spaceBetween: 162,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 4000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      breakpoints: {
        '992': {
          spaceBetween: 90,
        },
        '768': {
          spaceBetween: 90,
        },
        '576': {
          spaceBetween: 90,
        },
        '0': {
          spaceBetween: 50,
        },
      }
    });

    /*=============================================
      =        su-brands-5-slide       =
    =============================================*/
    var slider = new Swiper('.su-brands-5-slide', {
      loop: true,
      freemode: true,
      slidesPerView: 'auto',
      spaceBetween: 162,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 6000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      breakpoints: {
        '992': {
          spaceBetween: 90,
        },
        '768': {
          spaceBetween: 90,
        },
        '576': {
          spaceBetween: 90,
        },
        '0': {
          spaceBetween: 50,
        },
      }
    });


    /*=============================================
      =        Three Grid Slider (Top Collection)       =
    =============================================*/
    var slider = new Swiper('.three-grid-slider', {
      speed: 700,
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


    /*=============================================
      =        Three Grid Slider (Top Collection)       =
    =============================================*/
    var slider = new Swiper('.three-grid-slider2', {
      speed: 700,
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });

    

    /*=============================================
      =        card-prd-slider Slider     =
    =============================================*/
    var slider = new Swiper('.card-prd-slider', {
      speed: 700,
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 4,
        },
        '576': {
          slidesPerView: 4,
        },
        '0': {
          slidesPerView: 3,
        },
      },
    });


    /*=============================================
      =        Seven Grid Slider (Instagram)       =
    =============================================*/
    var slider = new Swiper('.seven-grid-slider', {
      speed: 700,
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        '1400': {
          slidesPerView: 7,
        },
        '1200': {
          slidesPerView: 4,
        },
        '991': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 2,
        },
      },
    });


  /*=============================================
    =        Shop look product Slider    =
  =============================================*/
  var slider = new Swiper('.shop-look-14-slider', {
    speed: 700,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 1,
      },
    },
  });
  /*=============================================
    =        Shop look product Slider    =
  =============================================*/
  var slider = new Swiper('.shop-look-12-slider', {
    speed: 700,
    spaceBetween: 0,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

    
  /*=============================================
    =        su-banner-16-zoom      =
  =============================================*/
  var slider = new Swiper('.su-banner-16-zoom', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".su-banner-16-next",
      prevEl: ".su-banner-16-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    
  /*=============================================
    =        su-brands-16-text-slide       =
  =============================================*/
  var textslider = new Swiper('.brands-16-text-slide', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*=============================================
    =        su-brands-16-img-slide       =
  =============================================*/
  var imgslider = new Swiper('.brands-16-img-slide', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      '992': {
        spaceBetween: 90,
      },
      '768': {
        spaceBetween: 90,
      },
      '576': {
        spaceBetween: 90,
      },
      '0': {
        spaceBetween: 50,
      },
    }
  });

  textslider.controller.control = imgslider;
  imgslider.controller.control = textslider;


  // Sustainability
  var Sustainability = new Swiper('.three-four-grid-slider', {
    speed: 700,
    spaceBetween: 30,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 3.5,
      },
      '1200': {
        slidesPerView: 3.5,
      },
      '991': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 3,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

  

    /*=============================================
      =        su-product-5-slide      =
    =============================================*/
    var slider = new Swiper('.su-product-5-slide', {
      slidesPerView: 1,
      speed:700,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".su-product-5-pagination",
        clickable: true,
      },
      breakpoints: {
        '1600': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });

  /*=============================================
    =       su-products-2-slider      =
  =============================================*/
  var slider = new Swiper('.prd-slider-2', {
    speed: 700,
    spaceBetween: 4,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar1",
      hide: false,
    },
    autoplay: {
      delay: 4000,
    },
  });
  /*=============================================
    =       su-products-2-slider      =
  =============================================*/
  var slider = new Swiper('.prd-slider-3', {
    speed: 700,
    spaceBetween: 4,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar2",
      hide: false,
    },
    autoplay: {
      delay: 4000,
    },
  });

  /*=============================================
    =       su-collections-11-slider      =
  =============================================*/
  var slider = new Swiper('.collections-11-slider', {
    speed: 700,
    spaceBetween: 4,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar1",
      hide: false,
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 5,
      },
      '1200': {
        slidesPerView: 5,
      },
      '991': {
        slidesPerView: 5,
      },
      '768': {
        slidesPerView: 3,
      },
      '576': {
        slidesPerView: 3,
      },
      '0': {
        slidesPerView: 2,
      },
    },
  });

  // Partner Slider
  var PartnerSlider = new Swiper('.eight-grid-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 13,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });

  // Shop Item
  var faveBrandSlider20 = new Swiper('.four-five-grid-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 13,
          },
          576: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          992: {
              slidesPerView: 3.5,
              spaceBetween: 20,
          },
          1200: {
              slidesPerView: 4.5,
              spaceBetween: 30,
          },
      },
      navigation: {
          nextEl: ".slider-nav-area .swiper-next",
          prevEl: ".slider-nav-area .swiper-prev",
      },

  });

  ////////////////////////////////////////////////////
  // 10. BeforeAfter Js
  if ($(".beforeAfter").length > 0) {
    $('.beforeAfter').beforeAfter({
      movable: true,
      clickMove: true,
      position: 50,
      separatorColor: '#fafafa',
      bulletColor: '#fafafa',
      onMoveStart: function (e) {
        console.log(event.target);
      },
      onMoving: function () {
        console.log(event.target);
      },
      onMoveEnd: function () {
        console.log(event.target);
      },
    });
  }

  /*-----------------------------------
  07. Set Background Image Color & Mask   
  -----------------------------------*/
  if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
          var src = $(this).attr("data-bg-src");
          $(this).css("background-image", "url(" + src + ")");
          $(this).removeAttr("data-bg-src").addClass("background-image");
      });
  }

  /*-----------------------------------
   17. Before After Slider   
  -----------------------------------*/
  $("#slider").on("input change", (e) => {
      const a = e.target.value;
      $(".foreground-img").css("width", a + "%");
      $(".slider-button").css("left", `calc(${a}% - 36px)`);
  });


    /*=============================================
      =        jarallax Js       =
    =============================================*/
    if ($('.jarallax').length > 0) {
      $('.jarallax').jarallax({
        speed: 0.2,
        imgWidth: 1200,
        imgHeight: 520,
      });
    };

    /*=============================================
      =        color swatch product    =
    =============================================*/
    var swatchColor = function () {
      if ($(".card-product").length > 0) {
      $(".color-swatch").on("click, mouseover", function () {
        var swatchColor = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".card-product").find(".img-product");
        imgProduct.attr("src", swatchColor);
        $(this)
        .closest(".card-product")
        .find(".color-swatch.active")
        .removeClass("active");

        $(this).addClass("active");
      });
      }
    };
    // Dom Ready
    $(function () {
      swatchColor();
      hoverPin();
    });

    /*=============================================
      =        mouseenter events     =
    =============================================*/

    $(document).on('click, mouseenter', '.size-list span', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    })
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

  /*=============================================
    =        countdown     =
  =============================================*/
    function makeTimer() {
    //  var endTime = new Date("20 Dec 2021 9:56:00 GMT+01:00");  
      var endTime = new Date("20 Jun 2025 9:56:00 GMT+01:00");      
      endTime = (Date.parse(endTime) / 1000);
      var now = new Date();
      now = (Date.parse(now) / 1000);
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400); 
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));  
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }
      $(".days").html(days + "<span>Days</span>");
      $(".hours").html(hours + "<span>Hours</span>");
      $(".minutes").html(minutes + "<span>Minutes</span>");
      $(".seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 1000);


    /* ----- Swiper Slider ----- */
    
    var swiper = new Swiper(".one-item-slider", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  // Video play on hover js
  document.addEventListener("DOMContentLoaded", function () {
    const hoverVideoElements = document.querySelectorAll(".hover-video");

    hoverVideoElements.forEach(element => {
      let video;

      if (element.tagName.toLowerCase() === "video") {
        video = element;
      } else {
        video = element.querySelector("video");
      }

      if (video) {
        element.addEventListener("mouseover", function () {
          video.play();
        });

        element.addEventListener("mouseout", function () {
          video.pause();
        });
      }
    });
  });
  
  // Counter Down js 
  document.addEventListener('DOMContentLoaded', function () {
    // Countdown script here
    var countDownDate = new Date("Jun 5, 2026 15:37:25").getTime();

    var x = setInterval(function () {
      var presentTime = new Date().getTime();
      var distance = countDownDate - presentTime;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown display
      if (document.getElementById("day")) document.getElementById("day").innerHTML = days;
      if (document.getElementById("hrs")) document.getElementById("hrs").innerHTML = hours;
      if (document.getElementById("min")) document.getElementById("min").innerHTML = minutes;
      if (document.getElementById("sec")) document.getElementById("sec").innerHTML = seconds;

      // Handle countdown expiry
      if (distance < 0) {
        clearInterval(x);
        if (document.getElementById("day")) document.getElementById("day").innerHTML = "EXPIRED";
        if (document.getElementById("hrs")) document.getElementById("hrs").innerHTML = "EXPIRED";
        if (document.getElementById("min")) document.getElementById("min").innerHTML = "EXPIRED";
        if (document.getElementById("sec")) document.getElementById("sec").innerHTML = "EXPIRED";
      }
    }, 1000);
  });


    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-video").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type:"image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type:"image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });

        $('.popup-image').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true
          }
        });

        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
          type: 'iframe'
        });
    };

    // Search Right Hidden Sidebar 
    if ($('.search-filter-btn').length) {
        //Show Form
        $('.search-filter-btn').on('click', function (e) {
            e.preventDefault();
            $('body').addClass('search-hidden-sidebar-content');
        });
        //Hide Form
        $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('search-hidden-sidebar-content');
        });
    }

    /*** ====  Right Side Hidden Sidebar Start ==== ***/
    //Side Content Toggle
    if($('.signin-filter-btn').length){
      //Show Form
      $('.signin-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('signin-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('signin-hidden-sidebar-content');
      });
    } 

    if($('.signup-filter-btn').length){
      //Show Form
      $('.signup-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('singup-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('singup-hidden-sidebar-content');
      });
    }



    if ($('.cart-filter-btn').length) {
      //Show Form
      $('.cart-filter-btn').on('click', function (e) {
        $('.minicart-16').addClass('show');
      });
      //Hide Form
      $('.minicart-close-icon,.minicart-16-overlay').on('click', function (e) {
        e.preventDefault();
        $('.minicart-16').removeClass('show');
      });
    }

    $(function () {
      if ($('.cart-search-btn').length) {
        // Show popup
        $(document).on('click', '.cart-search-btn', function (e) {
          e.preventDefault();
          $('.search-16-wrap').addClass('show');
        });

        // Hide popup
        $(document).on('click', '.search-close-icon, .open-search-16-overlay', function (e) {
          e.preventDefault();
          $('.search-16-wrap').removeClass('show');
        });
      }
    });

    if ($('.signin-cart-btn').length) {
      //Show Form
      $('.signin-cart-btn').on('click', function (e) {
        $('.signin-16-wrap').addClass('show');
      });
      //Hide Form
      $('.singin-close-icon').on('click', function (e) {
        e.preventDefault();
        $('.signin-16-wrap').removeClass('show');
      });
    }

    // prouduct sidebar info js
    $(".prd-side-btn").on("click", function () {
      $(".prd-sidebar-overlay,.prd-sidebar-info").addClass("active")
    })
    $(".close-prd-sidebar,.prd-sidebar-overlay").on("click", function () {
      $(".prd-sidebar-overlay,.prd-sidebar-info").removeClass("active")
    })
    $(".cloth-size-btn").on("click", function () {
      $(".cloth-sidebar-overlay,.cloth-size-sidebar").addClass("active")
    })
    $(".close-cloth-sidebar,.cloth-sidebar-overlay").on("click", function () {
      $(".cloth-sidebar-overlay,.cloth-size-sidebar").removeClass("active")
    })

    if($('.cart-filter-btn').length){
      //Show Form
      $('.cart-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('cart-dropdown');
      });
      //Hide Form
      $('.sidebar-close-icon').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('cart-dropdown');
      });
    }


    if ($('.spece-filter-btn').length) {
        $('.spece-filter-btn, .hiddenbar-body-ovelay').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('spece-filter-hidden-sidebar-content');
        });
    }
    
    //Accordion Box
    if ($('.shop-sidebar').length) {
        $('.filter-box').show(); // initially hidden
    
        $(".shop-sidebar").on('click', '.filter-button', function () {
            $(this).toggleClass('collapsed');
            let box = $(this).next('.filter-box');    
            if (box.is(':visible')) {
                box.animate({ height: 'toggle', opacity: 'toggle' }, 700);
            } else {
                box.animate({ height: 'toggle', opacity: 'toggle' }, 700);
            }
        });
    }

    //Price Range Slider
    if ($('.price-range-slider').length) {
        $(".price-range-slider").slider({
            range: true,
            min: 10,
            max: 99,
            values: [10, 60],
            slide: function(event, ui) {
                $("input.property-min").val(ui.values[0]); // Min Value
                $("input.property-max").val(ui.values[1]); // Max Value
            }
        });
        // Set initial values
        $("input.property-min").val($(".price-range-slider").slider("values", 0));
        $("input.property-max").val($(".price-range-slider").slider("values", 1));
    }
    //Price Range Slider

    if($('.cart-filter-btn').length){
      //Show Form
      $('.cart-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('cart-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('cart-hidden-sidebar-content');
      });
    }

    if($('.descrip-filter-btn').length){
      //Show Form
      $('.descrip-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('descrip-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('descrip-hidden-sidebar-content');
      });
    }

    if($('.spece-filter-btn').length){
      //Show Form
      $('.spece-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('spcfictn-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('spcfictn-hidden-sidebar-content');
      });
    } 

    if($('.repc-filter-btn').length){
      //Show Form
      $('.repc-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('retrnplc-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('retrnplc-hidden-sidebar-content');
      });
    }

    if($('.comqstn-filter-btn').length){
      //Show Form
      $('.comqstn-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('faq-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('faq-hidden-sidebar-content');
      });
    }

    if($('.review-filter-btn, .department-filter-btn').length){
      //Show Form
      $('.review-filter-btn, .department-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('review-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('review-hidden-sidebar-content');
      });
    }

    if($('.menu-filter-btn, .department-filter-btn').length){
      //Show Form
      $('.menu-filter-btn, .department-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('menu-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('menu-hidden-sidebar-content');
      });
    }

    if($('.department-filter-btn').length){
      //Show Form
      $('.department-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('department-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('department-hidden-sidebar-content');
      });
    }

    if($('.all-filter-btn').length){
      //Show Form
      $('.all-filter-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('allfilter-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('allfilter-hidden-sidebar-content');
      });
    }
    /*** ====  Right Side Hidden Sidebar END ==== ***/

    // Custom Search Dropdown Script Start
    var showSuggestions = function () {
      $(".top-search form.form-search .box-search").each(function () {
        $("form.form-search .box-search input").on('focus', (function () {
          $(this).closest('.boxed').children('.overlay').css({
            opacity: '1',
            display: 'block'
          });
          $(this).parent('.box-search').children('.search-suggestions').css({
            opacity: '1',
            visibility: 'visible',
            top: '50px'
          });
        }));
        $("form.form-search .box-search input").on('blur', (function () {
          $(this).closest('.boxed').children('.overlay').css({
            opacity: '0',
            display: 'block'
          });
          $(this).parent('.box-search').children('.search-suggestions').css({
            opacity: '0',
            visibility: 'hidden',
            top: '100px'
          });
        }));
      });

      $(".top-search.style1 form.form-search .box-search").each(function () {
        $("form.form-search .box-search input").on('focus', (function () {
          $(this).closest('.boxed').children('.overlay').css({
            opacity: '1',
            display: 'block'
          });
          $(this).parent('.box-search').children('.search-suggestions').css({
            opacity: '1',
            visibility: 'visible',
            top: '100px'
          });
        }));
      });
    }; // Toggle Location
    $(function () {
        showSuggestions();
    });
    // Custom Search Dropdown Script Start


    // Custom Shop item add Option increase decrease home 3
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus");
        var $quantityArrowPlus = $(".quantity-arrow-plus");
        var $quantityNum = $(".quantity-num");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });
    
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus2");
        var $quantityArrowPlus = $(".quantity-arrow-plus2");
        var $quantityNum = $(".quantity-num2");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });

    // review open hide js
    $(function() {  // Shorthand for $(document).ready()
      // Event delegation for dynamically loaded elements (if any)
      $(document).on('click', '.review-details-btn', function() {
        var $btn = $(this);
        var $info = $btn.next('.review-details-info');
        var isVisible = $info.is(':visible');
        
        // Close all other open sections first
        $('.review-details-info').not($info).slideUp();
        $('.review-details-btn').not($btn)
          .html('More Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-down"></i></span>');
        
        // Toggle current section
        $info.stop().slideToggle(function() {
          $btn.html(
            $(this).is(':visible') 
            ? 'Less Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-up"></i></span>'
            : 'More Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-down"></i></span>'
          );
        });
      });
    });

    //Event Countdown Timer
    if($('.time-countdown').length){  
      $('.time-countdown').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><sub>Days</sub></div> ' + '<div class="counter-column"><span class="count">%H</span><sub>Hours</sub></div>  ' + '<div class="counter-column"><span class="count">%M</span><sub>Minutes</sub></div>  ' + '<div class="counter-column"><span class="count">%S</span><sub>Seconds</sub></div>'));
      });
     });
    }

  // review open hide js
  $(document).on("ready",function () {
    $(".review-details-btn").on("click",function () {
      var $btn = $(this);
      var $info = $btn.next(".review-details-info");

      // Close all other details and reset buttons
      $(".review-details-info").not($info).slideUp();
      $(".review-details-btn").not($btn).html('More Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-down"></i></span>');

      // Toggle current section
      if ($info.is(":visible")) {
          $info.slideUp();
          $btn.html('More Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-down"></i></span>');
      } else {
          $info.slideDown();
          $btn.html('Less Detail <span class="icon ms-2"><i class="fa-solid fa-chevron-up"></i></span>');
      }
    });
  });

  /* ----- Scroll To top ----- */
  function scrollToTop() {
    var btn = $('.scrollToHome');
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 300) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
    });
    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, '300');
    });
  }
    

/* ======
   When document is ready, do
   ====== */
    $(document).on('ready', function() {
      // add your functions
      navbarScrollfixed();
      scrollToTop();
      mobileNavToggle();
    });
    
/* ======
   When document is loading, do
   ====== */
    // window on Load function
    $(window).on('load', function() {
      // add your functions
      preloaderLoad();
    });
    // window on Scroll function
    $(window).on('scroll', function() {
      // add your functions
    });


})(window.jQuery);