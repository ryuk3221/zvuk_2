//Открытие мобильного меню
const drawerInner = document.querySelector('.drawer__inner');
const drawer = document.querySelector('.drawer');
let toggler = false;
const burger = document.querySelector('.header-bot__burger');
const burgerOpenSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <g opacity="0.5">
    <circle cx="15" cy="15" r="14.5" stroke="#817F7D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78262 10C9.36841 10 9.03262 10.3358 9.03262 10.75C9.03262 11.1642 9.36841 11.5 9.78262 11.5H20.2174C20.6316 11.5 20.9674 11.1642 20.9674 10.75C20.9674 10.3358 20.6316 10 20.2174 10H9.78262ZM9.03262 14.75C9.03262 14.3358 9.36841 14 9.78262 14H20.2174C20.6316 14 20.9674 14.3358 20.9674 14.75C20.9674 15.1642 20.6316 15.5 20.2174 15.5H9.78262C9.36841 15.5 9.03262 15.1642 9.03262 14.75ZM9.03262 18.75C9.03262 18.3358 9.36841 18 9.78262 18H20.2174C20.6316 18 20.9674 18.3358 20.9674 18.75C20.9674 19.1642 20.6316 19.5 20.2174 19.5H9.78262C9.36841 19.5 9.03262 19.1642 9.03262 18.75Z" fill="#817F7D"/>
    </g>
  </svg>
`;
const burgerClosenSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="14.5" stroke="#514C47"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4749 20.5331C10.1805 20.8245 9.70565 20.822 9.41429 20.5275C9.12293 20.2331 9.12542 19.7583 9.41984 19.4669L13.9337 15L9.41984 10.5331C9.12542 10.2417 9.12293 9.76687 9.41429 9.47245C9.70565 9.17803 10.1805 9.17555 10.4749 9.4669L15 13.9448L19.525 9.4669C19.8194 9.17555 20.2943 9.17803 20.5856 9.47245C20.877 9.76687 20.8745 10.2417 20.5801 10.5331L16.0662 15L20.5801 19.4669C20.8745 19.7583 20.877 20.2331 20.5856 20.5275C20.2943 20.822 19.8194 20.8245 19.525 20.5331L15 16.0552L10.4749 20.5331Z" fill="#514C47"/>
  </svg>
`;
burger.onclick = (event) => {
  if (toggler == false) {
    drawerInner.style.transform = 'translateY(-0%)';
    burger.innerHTML = burgerClosenSvg;
    drawer.style.visibility = 'visible';
    drawer.style.opacity = '1';
    toggler = true;
  }
  else {
    drawerInner.style.transform = 'translateY(-100%)';
    burger.innerHTML = burgerOpenSvg;
    drawer.style.visibility = 'hidden';
    drawer.style.opacity = '0';
    toggler = false;
  }
}
drawer.onclick = (event) => {
  if (event.target.classList.contains('drawer')) {
    drawerInner.style.transform = 'translateY(-100%)';
    burger.innerHTML = burgerOpenSvg;
    drawer.style.visibility = 'hidden';
    drawer.style.opacity = '0';
    toggler = false;
  }
}


//Выпадающие списки ссылок мобильного меню
//Получаю верхушки выпадающих списков
const accordionHeaders = document.querySelectorAll('.drawer__accordion-head');
//Получаю все dropdown элементы 
const accordionItems = document.querySelectorAll('.drawer__accordion-item');


const dropDownShow = (event) => {
  //Получаю родительский элемент аккордиона по которому кликнули
  const dropDownParent = event.target.closest('.drawer__accordion-item');
  //Получаю выпадающий список
  const ul = dropDownParent.querySelector('ul');
  accordionItems.forEach(item => {
    if (item === dropDownParent) {
      dropDownParent.classList.toggle('drawer__accordion-item--active');
    }
    else {
      item.classList.remove('drawer__accordion-item--active');
      const ul = item.querySelector('ul');
      ul.style.height = '0';
      ul.style.marginTop = '0';
    }
  });
  if (dropDownParent.classList.contains('drawer__accordion-item--active')) {
    ul.style.height = ul.scrollHeight + 'px';
    ul.style.marginTop = '15px';
  }
  else {
    ul.style.height = '0';
    ul.style.marginTop = '0';
  }
}

accordionHeaders.forEach(el => {
  el.onclick = dropDownShow;
});

const headerBot = document.querySelector('.header-bot');

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 50 && window.innerWidth <= 991) {
    headerBot.classList.add('header-bot--sticky');
    drawer.style.paddingTop = '56px';
    document.body.style.paddingTop = '56px';
  }
  else if (window.pageYOffset <= 50 && window.innerWidth <= 991) {
    headerBot.classList.remove('header-bot--sticky');
    drawer.style.paddingTop = '106px';
    document.body.style.paddingTop = '0';
  }
  else if (window.innerWidth > 991 && window.pageYOffset >= 52) {
    // document.querySelector('.header-top').style.opacity = '0';
    // document.querySelector('.header-top').style.visibility = 'hidden';
    document.querySelector('.sticky-header').style.transform = 'translateY(0%)';
  }
  else if (window.innerWidth > 991 && window.pageYOffset <= 52) {
    // document.querySelector('.header-top').style.opacity = '1';
    // document.querySelector('.header-top').style.visibility = 'visible';
    document.querySelector('.sticky-header').style.transform = 'translateY(-0%)';
  }
});

let lastScroll = 0;
const header = document.querySelector('.header-top');


const scrollPosition = () => window.pageYOffset; 
const containHide = () => header.classList.contains('header-top--hide');

const stickyHeaderInit = () => {
  if (window.pageYOffset > 50) {
    let top = scrollPosition();
    if (top > lastScroll && !header.classList.contains('header-top--hide')) {
      
      header.classList.add('header-top--hide');
    }
    else if (top < lastScroll && header.classList.contains('header-top--hide')) {
      header.classList.remove('header-top--hide');
      
    }
    lastScroll = scrollPosition();
  }
};

window.addEventListener('scroll', stickyHeaderInit);


//Получаю иконку поиска и вешаю функцию которая открывает модапльное окно с поиском
const searchIcon = document.querySelector('.header-top__search-btn');
//получаю модальное окно с поиском
const searchModal = document.querySelector('.search-wrapper');



const toggleShowPopup = (event) => {
  searchModal.classList.toggle('search--open');
  document.querySelector('.input-search').focus();
  window.removeEventListener('scroll', stickyHeaderInit);
}

document.querySelector('.search-closer').onclick = toggleShowPopup;

searchIcon.onclick = toggleShowPopup;

searchModal.onclick = (event) => {
  if (event.target.classList.contains('search-wrapper')) {
    toggleShowPopup();
    document.querySelector('.input-search').focus();
    window.addEventListener('scroll', stickyHeaderInit);
  }
};

document.querySelector('.user-nav__search-btn').onclick = () => {
  document.querySelector('.input-search').focus();
  toggleShowPopup();
  window.removeEventListener('scroll', stickyHeaderInit);
};

//Модальное окно товара
//Получаю окно
const productPopup = document.querySelector('.product-popup');

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('recommend__item-btn') || event.target.classList.contains('info-box__btn2')) {
    productPopup.classList.add('product-popup--active');
  }
  else if (event.target.classList.contains('product-popup')) {
    productPopup.classList.remove('product-popup--active');
  }
  else if (event.target.closest('.product-popup__closer')) {
    productPopup.classList.remove('product-popup--active');
  }
});

if (window.innerWidth <= 768) {
  $('.search .sound-category').slick({
    swipeToSlide: true,
    touchThreshold: 30,
    variableWidth: true,
    arrows: false,
    infinite: false
  });
}

//Открытие окна с формой
const modalForm = document.querySelector('.modal-form-container');

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('product-popup__item-btn')) {
    modalForm.style.opacity = '1';
    modalForm.style.visibility = 'visible';
    document.querySelectorAll('.product-popup').forEach(el => {
      el.classList.remove('product-popup--active');
    });
  }
  
  else if (event.target.closest('.modal-closer')) {
    modalForm.style.opacity = '0';
    modalForm.style.visibility = 'hidden';
  }
  
  else if (event.target.classList.contains('modal-form-container')) {
    modalForm.style.opacity = '0';
    modalForm.style.visibility = 'hidden';
  }
});