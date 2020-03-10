$(function () {

  $('.slider__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/next.png"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/prev.png"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
      $("#header-sroll").addClass("small")
    } else {
      $("#header-sroll").removeClass("small")
    }
  });






});