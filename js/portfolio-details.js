const productSmallSlider = new Swiper('.small-slider-swiper', {
  spaceBetween: 10,
  slidesPerView: '5',
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
  },
});

const productMainSlider = new Swiper('.big-slider-swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: ".product-slider-button-next",
    prevEl: ".product-slider-button-prev",
  },
  thumbs: {
    swiper: productSmallSlider,
  }
});

const ceoBlockSlider = new Swiper('.ceo-block__slider', {
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next-ceoblock',
    prevEl: '.swiper-button-prev-ceoblock',
  },
  breakpoints: {
    991: {
      direction: "vertical",
    }
  }
});