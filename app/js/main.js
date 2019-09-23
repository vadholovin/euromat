'use strict';


/**
 * #Detect touch devices
 */
(function () {
  document.documentElement.className +=
    (('ontouchstart' in document.documentElement) ? ' touch' : ' no-touch');
})();


/**
 * #Lazy loading for images
 */
(function () {
  var observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('fade');
    }
  });
  observer.observe();
})();


/**
 * #Animate on scroll
 */
(function () {
  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out',
  });
})();


/**
 * #Scroll Header
 */
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var b = $(window).scrollTop();

    if (b > 40) {
      $('.js-header-scrollable').addClass('is-scroll');
    } else {
      $('.js-header-scrollable').removeClass('is-scroll');
    }
  });
});


/**
 * #Menu
 */
jQuery(document).ready(function ($) {
  $('.hamburger').click(function (e) {
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

  $('.side-menu__close, .mobile-nav__overlay').click(function (e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-active');
    $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').removeClass('is-visible');
    $('.mobile-nav').attr('hidden', '');
    $('html, body').removeClass('is-overflowed');
  });
});




/**
 * #Hero main Slider
 */
jQuery(document).ready(function ($) {
  var slider = $('.js-hero-main-slider');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#hero-main-nav .slider-nav__prev'),
    nextArrow: $('#hero-main-nav .slider-nav__next'),
    lazyLoad: 'progressive',
  });
});


/**
 * #Hero Slider
 */
jQuery(document).ready(function ($) {
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
        breakpoint: 991.98,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  slider.on('wheel', (function (e) {
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
jQuery(document).ready(function ($) {
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
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          // dots: true,
          // arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          // dots: true,
          arrows: false,
        },
      },
    ],
  });

  slider.on('wheel', (function (e) {
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
jQuery(document).ready(function ($) {
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
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
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

  slider.on('wheel', (function (e) {
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
jQuery(document).ready(function ($) {
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
          // dots: true,
          // arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          // dots: true,
          // arrows: false,
        },
      },
    ],
  });

  slider.on('wheel', (function (e) {
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
jQuery(document).ready(function ($) {
  var slider = $('.js-team-slider');

  slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#team-nav .slider-nav__prev'),
    nextArrow: $('#team-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          // dots: true,
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
          // arrows: false,
        },
      },
    ],
  });

  slider.on('wheel', (function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
});



/**
 * Action button
 */
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
      $('#back_to_top').removeClass('off');
      $('#back_to_top').addClass('on');
    } else {
      $('#back_to_top').removeClass('on');
      $('#back_to_top').addClass('off');
    }
  });

  $(document).on('click', '#back_to_top', function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
});


/**
 * #Fancybox init
 */
jQuery(document).ready(function ($) {
  $('[data-fancybox]').fancybox({
    buttons: [
      'zoom',
      'close',
    ],
  });
});



/**
 * Micromodal init
 * 1. Prevent page scrolling when a modal is open
 */
(function () {
  var body = document.body;
  var site = document.documentElement;
  var buttons = document.querySelectorAll('.js-button-call');

  if (site.classList.contains('touch')) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('href', 'tel:495');
      buttons[i].removeAttribute('data-micromodal-trigger');
    }
  }

  MicroModal.init({
    onShow: function () {
      body.classList.add('is-overflowed'); /* 1 */
      site.classList.add('is-overflowed'); /* 1 */
    },
    onClose: function () {
      body.classList.remove('is-overflowed'); /* 1 */
      site.classList.remove('is-overflowed'); /* 1 */
    },
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 992) {
        setTimeout(function () {
          MicroModal.show('modal-form-kill');
        }, 10000);
      }
    });
  }

})();


/**
 * Calc
 */
jQuery(document).ready(function ($) {
  // Check Radios
  $('.js-check').click(function () {
    var name = $(this).find('input').attr('name');
    var toggler = $('[data-toggle=' + name + ']');
    if (!toggler.is(':checked')) {
      $('.js-check').has('[name=' + name + ']').removeClass('checked').addClass('unchecked');
      $('.js-check').has(':checked').removeClass('unchecked').addClass('checked');
    }
  });

  $('.js-switch').click(function () {
    var name = $(this).siblings('input').data('toggle');
    var target = $('[name=' + name + ']');

    if (target.attr('disabled')) {
      target.removeAttr('disabled');
      $('.js-check').has(target).removeClass('unchecked').removeClass('checked');
    } else {
      target.attr('disabled', 'disabled');
      $('.js-check').has(target).removeClass('checked').addClass('unchecked');
    }
  });

  // Increase quantity
  $('.quantity').click(function (e) {
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
 * Show youtube video
 */
jQuery(document).ready(function ($) {
  var link = $('.card-media__content [data-fancybox], .video-box [data-fancybox]');

  link.each(function () {
    var videoSrc = $(this).attr('href');
    var youtubeVideoId = videoSrc.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

    if (youtubeVideoId.length == 11) {
      var imageUrl = '//img.youtube.com/vi/' + youtubeVideoId + '/2.jpg';
      $(this).siblings('.card-media__btn, .video-box__btn').css('background-image', 'url(' + imageUrl + ')');
    }
  });
});



/**
 * Prevent image download
 */
jQuery(document).ready(function ($) {
  $('img').mousedown(function (e) {
    if (e.button === 2) {
      return false;
    }
  });
});

/**
 * #Map
 */

(function () {
  ymaps.ready(function () {
    var centerPoint = (window.innerWidth < 1280) ?
      [55.678707, 37.343568] :
      [55.678707, 37.3478];

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

    ymaps.geolocation.get({
      // Зададим способ определения геолокации
      // на основе ip пользователя.
      provider: 'yandex',
      // Включим автоматическое геокодирование результата.
      autoReverseGeocode: true
    })
      .then(function (res) {
        // Выведем результат геокодирования.
        var firstGeoObject = res.geoObjects.get(0);
        var placement = firstGeoObject.getLocalities().join(', ');
        var target = document.querySelectorAll('.js-place');

        for (var i = 0; i < target.length; i++) {
          target[i].textContent = placement;
        }
      });
  });
})();
