'use strict';

jQuery(document).ready(function($) {

});


/**
 * #Menu
 */
jQuery(document).ready(function($) {
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    if ($('.mobile-nav').is('[hidden]')) {
      $('.mobile-nav').removeAttr('hidden');
    } else {
      $('.mobile-nav').attr('hidden', '');
    }

    $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').toggleClass('is-visible');

    $('html, body').toggleClass('is-overflowed');
  });

  $('.side-menu__close, .mobile-nav__overlay').click(function(e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-active');
    $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').removeClass('is-visible');
    $('.mobile-nav').attr('hidden', '');
    $('html, body').removeClass('is-overflowed');
  });
});




/**
 * #Hero Slider
 */
jQuery(document).ready(function($) {
  var slider = $('.js-hero-slider');

  slider.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#hero-nav .slider-nav__prev'),
    nextArrow: $('#hero-nav .slider-nav__next'),
    // pauseOnHover: false,
    // pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});




/**
 * #Portfolio Slider
 */
jQuery(document).ready(function($) {
  var slider = $('.js-portfolio-slider');

  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#portfolio-nav .slider-nav__prev'),
    nextArrow: $('#portfolio-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});




/**
 * #Trust Slider
 */
jQuery(document).ready(function($) {
  var slider = $('.js-trust-slider');

  slider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#trust-nav .slider-nav__prev'),
    nextArrow: $('#trust-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});




/**
 * #Reviews Slider
 */
jQuery(document).ready(function($) {
  var slider = $('.js-reviews-slider');

  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#reviews-nav .slider-nav__prev'),
    nextArrow: $('#reviews-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});




/**
 * #Team Slider
 */
jQuery(document).ready(function($) {
  var slider = $('.js-team-slider'),
      current = $('.js-counter-team .slider-counter__current'),
      total = $('.js-counter-team .slider-counter__total'),
      eventSet = 'init reInit afterChange';

  slider.on(eventSet, function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    current.text(i);
    total.text(slick.slideCount);
  });

  slider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#team-nav .slider-nav__prev'),
    nextArrow: $('#team-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});



/**
 * #Fancybox init
 */
jQuery(document).ready(function($) {
  $('[data-fancybox]').fancybox({
    buttons: [
      'close',
    ],
  });
});



/**
 * Micromodal init
 * 1. Prevent page scrolling when a modal is open
 */
(function() {
  let body = document.body,
      site = document.documentElement;

  MicroModal.init({
    onShow: function() {
      body.classList.add('is-overflowed'); /* 1 */
      site.classList.add('is-overflowed'); /* 1 */
    },
    onClose: function() {
      body.classList.remove('is-overflowed'); /* 1 */
      site.classList.remove('is-overflowed'); /* 1 */
    },
  });
})();


/**
 * Calc
 */
jQuery(document).ready(function($) {
  // Check Radios
  $('.js-check').click(function() {
    $(this).siblings().removeClass('checked').addClass('unchecked');
    $('.js-check').has(':checked').removeClass('unchecked').addClass('checked');
  });

  // Increase quantity
  $('.quantity').click(function(e) { 
    e.preventDefault();
    var plus = $(this).find('.quantity__btn--plus'),
        minus = $(this).find('.quantity__btn--minus'),
        field = $(this).find('.quantity__input'),
        fieldVal = +field.val(),
        target = $(event.target);

    if (target.is(plus)) {
      field.val(fieldVal += 1);
    } else if (target.is(minus)) {
      if (fieldVal > 0) {
        field.val(fieldVal -= 1);
      }
    }
  });
});



/**
 * #Map
 */
/*
(function() {
  ymaps.ready(function() {
    var centerPoint = (window.innerWidth  < 1280) ?
      [55.678707, 37.343568] : [55.678707, 37.3478];

    var myMap = new ymaps.Map('map', {
          center: centerPoint,
          zoom: 16,
          controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark([55.678707, 37.343568], {}, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/icons/place.png',
          // Размеры метки.
          iconImageSize: [47, 63],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-30, -70]
        });

    myMap.geoObjects
      .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  });
})();
*/
