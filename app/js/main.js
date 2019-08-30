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
  var slickEl = $('.js-hero-slider');

  slickEl.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#hero-nav .slider-nav__prev'),
    nextArrow: $('#hero-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});




/**
 * #Portfolio Slider
 */
jQuery(document).ready(function($) {
  var slickEl = $('.js-portfolio-slider');

  slickEl.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#portfolio-nav .slider-nav__prev'),
    nextArrow: $('#portfolio-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});




/**
 * #Trust Slider
 */
jQuery(document).ready(function($) {
  var slickEl = $('.js-trust-slider');

  slickEl.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#trust-nav .slider-nav__prev'),
    nextArrow: $('#trust-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});




/**
 * #Reviews Slider
 */
jQuery(document).ready(function($) {
  var slickEl = $('.js-reviews-slider');

  slickEl.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#reviews-nav .slider-nav__prev'),
    nextArrow: $('#reviews-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});




/**
 * #Team Slider
 */
jQuery(document).ready(function($) {
  var slickEl = $('.js-team-slider'),
      current = $('.js-counter-team .slider-counter__current'),
      total = $('.js-counter-team .slider-counter__total'),
      eventSet = 'init reInit afterChange';

  slickEl.on(eventSet, function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    current.text(i);
    total.text(slick.slideCount);
  });

  slickEl.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#team-nav .slider-nav__prev'),
    nextArrow: $('#team-nav .slider-nav__next'),
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});






