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

if (window.innerWidth <= 768) {
  $('.propositions__btns').slick({
    swipeToSlide: true,
    touchThreshold: 30,
    variableWidth: true,
    arrows: false,
    infinite: false
  });
}