var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  //Scroll with click
  slideToClickedSlide: true,

  //Mouse scroll
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper',
  },

  //Autoplay
  autoplay: true,
  autoplaySpeed: 1000,

  //Quantity of slides Responsive breakpoints

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.28,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
