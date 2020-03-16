$(function () {

  $('.slider__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/next.png"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/prev.png"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    infinite: true,
    responsive: [{
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: false
        }
      },
      {
        breakpoint: 1085,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: false
        }
      }
    ]
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
      $("#header-sroll").addClass("small")
    } else {
      $("#header-sroll").removeClass("small")
    }
  });

  new WOW({
    mobile: false
  }).init();

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle(1112);
  });
  $(window).resize(function () {
    if ($(window).width() > 1112) {
      $('.header__menu ul').removeAttr('style');
    }
  });

});