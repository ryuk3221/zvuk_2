const recommendSlider = new Swiper('.recommend__inner2', {
  spaceBetween: 10,
  freeMode: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next-recommend2',
    prevEl: '.swiper-button-prev-recommend2',
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  }
});
const recommendSlider1 = new Swiper('.recommend__inner1', {
  spaceBetween: 10,
  freeMode: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next-recommend1',
    prevEl: '.swiper-button-prev-recommend1',
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  }
});

if (window.innerWidth <= 768) {
  document.querySelectorAll('.recommend__item-btn').forEach(btn => {
    btn.innerHTML = 'В 1 клик';
  });
}

//Скрипты для counter товара
//Разметка counter
const counterHTML = `
    <div class="recommend__counter">
      <button class="increment">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="5.5" fill="#BCBAB7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50001 2.44434C5.16251 2.44434 4.8889 2.71794 4.8889 3.05545V4.88878H3.05557C2.71806 4.88878 2.44446 5.16238 2.44446 5.49989C2.44446 5.8374 2.71806 6.111 3.05557 6.111H4.8889V7.94434C4.8889 8.28184 5.16251 8.55545 5.50001 8.55545C5.83752 8.55545 6.11112 8.28184 6.11112 7.94434V6.111H7.94446C8.28197 6.111 8.55557 5.8374 8.55557 5.49989C8.55557 5.16238 8.28197 4.88878 7.94446 4.88878H6.11112V3.05545C6.11112 2.71794 5.83752 2.44434 5.50001 2.44434Z" fill="white"/>
          </svg>
      </button>
      <span class="count">1</span>
      <button class="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="5.5" fill="#BCBAB7"/>
          <rect x="2.44446" y="6.11108" width="1.22222" height="6.11111" rx="0.611111" transform="rotate(-90 2.44446 6.11108)" fill="white"/>
          </svg>
      </button>
    </div> 
`;
//Разметка кнопки
const addToCartIcon = `
<button class="recommend__add-btn">
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7766 23H19.5003C21.0314 23 22.2769 21.7545 22.2769 20.2234V11.9231C22.2769 11.6523 22.0554 11.4308 21.7846 11.4308H18.8308V10.6923C18.8308 8.65662 17.1742 7 15.1385 7C13.1028 7 11.4462 8.65662 11.4462 10.6923V11.4308H8.49231C8.22154 11.4308 8 11.6523 8 11.9231V20.2234C8 21.7545 9.24554 23 10.7766 23ZM12.4308 10.6923C12.4308 9.19815 13.6443 7.98462 15.1385 7.98462C16.6326 7.98462 17.8462 9.19815 17.8462 10.6923V11.4308H12.4308V10.6923ZM8.98462 12.4154H11.4462V13.6462C11.4462 13.9169 11.6677 14.1385 11.9385 14.1385C12.2092 14.1385 12.4308 13.9169 12.4308 13.6462V12.4154H17.8462V13.6462C17.8462 13.9169 18.0677 14.1385 18.3385 14.1385C18.6092 14.1385 18.8308 13.9169 18.8308 13.6462V12.4154H21.2923V20.2234C21.2923 21.2105 20.4874 22.0154 19.5003 22.0154H10.7766C9.78954 22.0154 8.98462 21.2105 8.98462 20.2234V12.4154Z" fill="#2BC25E"/>
    <circle cx="15" cy="15" r="14.5" stroke="#2BC25E"/>
  </svg>
</button>
`;
//Получаю все кнопки добавления в корзину товара
const addToCartBtns = document.querySelectorAll('.recommend__add-btn');

//Функция отображения counter
const counterShow = (event) => {
  //Получаю родительский элемент в который буду вшивать разметку counter
  const counterContainer = event.target.closest('.recommend__counter-container');
  counterContainer.innerHTML = counterHTML;
  const incrementBtn = counterContainer.querySelector('.increment');
  incrementBtn.onclick = handleIncrement;
  const decrementBtn = counterContainer.querySelector('.decrement');
  decrementBtn.onclick = handleDecrement;
}

addToCartBtns.forEach(btn => {
  btn.onclick = counterShow;
});


const handleIncrement = (event) => {
  //Получаю родительский элемент counter
  const counterElement = event.target.closest('.recommend__counter');
  //Получаю элемент котрый отображает количество
  const count = counterElement.querySelector('.count');
  count.innerHTML = Number(count.innerHTML) + 1;
  
}

const handleDecrement = (event) => {
  //Получаю родительский элемент counter
  const counterElement = event.target.closest('.recommend__counter');
  //Получаю элемент котрый отображает количество
  const count = counterElement.querySelector('.count');
  count.innerHTML = Number(count.innerHTML) - 1;
  if (Number(count.innerHTML) === 0) {
    const counterContainer = event.target.closest('.recommend__counter-container');
    counterContainer.innerHTML = addToCartIcon;
    counterContainer.querySelector('.recommend__add-btn').onclick = counterShow;
  }
  
}

