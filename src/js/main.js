import "slick-carousel";
import "bootstrap";
import * as $ from "jquery";

(function(window, document, $) {
  var $win = $(window);
  var $doc = $(document);

  $(".slider-intro .slider__slides").slick({
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $(".slider-arch-images .slider__slides").slick({
    fade: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // $(".partners-slider .slider__slides").slick({
  //   slidesToShow: 1,
  //   sidesToScroll: 1,
  //   infinite: false,
  //   mobileFirst: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: false
  //       }
  //     },

  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },

  //     {
  //       breakpoint: 1439,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1
  //       }
  //     },

  //     {
  //       breakpoint: 1799,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  $(".tiles-slider-one-row .slider__slides").slick({
    slidesToShow: 1,
    sidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: false
        }
      },
      {
        breakpoint: 1800,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        }
      }
    ]
  });

  $(".tiles-slider-two-rows .slider__slides").slick({
    slidesToShow: 1,
    sidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: false
        }
      },
      {
        breakpoint: 1800,
        settings: {
          infinite: false,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        }
      }
    ]
  });

  /* EVENTS */
  $(".section__subpage-banner .tile:not(.active)")
    .on("mouseover", function() {
      $(".section__subpage-banner")
        .find(".tile.active")
        .addClass("tile--mute");
    })
    .on("mouseout", function() {
      $(".section__subpage-banner")
        .find(".tile.active")
        .removeClass("tile--mute");
    });

  $(window).on("resize", function() {
    //setSubheaderHeight();
  });

  // menuTrigger();
  //setSubheaderHeight();

  function menuTrigger() {
    const $navTrigger = $(".header .nav-trigger");
    const $navsContainer = $(".header .navs");

    $navTrigger.on("click", function(ev) {
      ev.preventDefault();
      $(this).toggleClass("active");
      $navsContainer.toggleClass("active");
    });
  }

  function setSubheaderHeight() {
    if ($(window).width() < 1800) {
      $(".section__subpage-banner").css(
        "padding-top",
        $(".header__subpage .header__inner").outerHeight() - 3
      );
    }
  }
})(window, document, $);
