var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.24,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: true,
  autoplaySpeed: 2000,
  breakpoints: {
    // when window width is >= 414px
    414: {
      slidesPerView: 1.24,
      spaceBetween: 16,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
