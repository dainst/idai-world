$(".slider-intro .slider__slides").slick({
  fade: true,
  speed: 2000,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }
  ]
});

// $(".slider-arch-images .slider__slides").slick({
//   fade: true,
//   speed: 2000,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 2000
// });
