const themesSlider = new Swiper('.themes__inner', {
  spaceBetween: 10,
  freeMode: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next-themes',
    prevEl: '.swiper-button-prev-themes',
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
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