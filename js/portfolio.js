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