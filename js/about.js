const ourProjectsSlider = new Swiper('.our-projects__inner', {
  spaceBetween: 15,
  freeMode: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next-ourprojects',
    prevEl: '.swiper-button-prev-ourprojects',
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

if (window.innerWidth <= 769) {
  $('.about__gallery').slick({
    swipeToSlide: true,
    touchThreshold: 30,
    variableWidth: true,
    arrows: false,
    infinite: false
  });
  $('.propositions__btns').slick({
    swipeToSlide: true,
    touchThreshold: 30,
    variableWidth: true,
    arrows: false,
    infinite: false
  });
}

//Скрипты для открытия модалок
//Поучаю все кнопки откртыия модального окна
const popupOpenBtns = document.querySelectorAll('.propositions__button');
//Получаю все модальные окна
const allPopups = document.querySelectorAll('.popup');

const handlePopupShow = (event) => {
  //Извлекаю id чтобы по нему найти нужное модальное окно
  const id = event.target.id;
  document.querySelector(`.${id}`).classList.add('popup--active');
}

const handlePopupHide = (event) => {
  allPopups.forEach(el => {
    el.classList.remove('popup--active');
  });
}

popupOpenBtns.forEach(el => {
  el.onclick = handlePopupShow;
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup') || event.target.classList.contains('close-popup-icon')) {
    handlePopupHide();
  }

});