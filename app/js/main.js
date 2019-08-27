'use strict';

jQuery(document).ready(function($) {

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






