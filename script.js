'use strict';

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.list__nav__links');
const btnSearch = document.querySelector('.btn__search');

const descriptionCar = document.querySelectorAll('.description__Car');
const firstNameUser = document.querySelectorAll('.firstName__autor__Card');
const data = document.querySelectorAll('.span__Date');
const aboutCar = document.querySelectorAll('.about_Car');
const card = document.querySelectorAll('.conteiner__Card__Tovar');

const conteinerButtons = document.querySelector('.conteiner__buttons ');
const descriptionBloger = document.querySelector('.description__bloger');
const btnBloger = document.querySelector('.button__bloger');
const buttonPrev = document.querySelector('.button__prev');
const buttonNext = document.querySelector('.button__next');

const formBtn = document.querySelector('.form__button');
const form = document.querySelector('.form');
const modalFormButton = document.querySelector('.conteiner__form__button');
const showModalForm = document.querySelector('.conteiner__form ');

const numberPage = document.querySelectorAll('.number__page');

const nameWebsite = document.querySelector('.name__website');

const slideCardMostPopular = document.querySelectorAll('.card__most__popular');
const conteinerSlider = document.querySelector(
  '.conteiner__card__most__popular'
);

const formFooter = document.querySelector('.form__footer');
const modalformFooter = document.querySelector('.conteiner__show__modal__form');

//бургер меню
// Обновить обработчики бургера
burger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  btnSearch.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Закрытие меню при клике на ссылку
const navItems = document.querySelectorAll('.list__nav__links a');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Закрытие меню при клике вне области
document.addEventListener('click', (e) => {
  const isBurger = e.target.closest('.burger');
  const isMenu = e.target.closest('.list__nav__links');
  const isSearch = e.target.closest('.btn__search');

  if (!isBurger && !isMenu && !isSearch) {
    closeMobileMenu();
  }
});

// Функция закрытия меню
function closeMobileMenu() {
  navLinks.classList.remove('active');
  btnSearch.classList.remove('active');
  burger.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

//nav панель закреплена и при достижении скролла получает прозрчность
window.addEventListener('scroll', function () {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('nav__transporent');
  } else {
    nav.classList.remove('nav__transporent');
  }
});

//анимация мигающего логоти

setInterval(function () {
  nameWebsite.classList.add('opacity');
  setTimeout(function () {
    nameWebsite.classList.remove('opacity');
  }, 1000);
}, 2000);

//получение текста изи апи для оисание карточки
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const testApiArr = json.map((el) => el.body);
    descriptionCar.forEach((el, index) => (el.textContent = testApiArr[index]));
  });

//получение имени автора для описания карточки
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    const testUserApi = json
      .map((el, index) => el.name)
      .filter((el) => el.length <= 18);

    firstNameUser.forEach(
      (el, index) =>
        (el.textContent = `${testUserApi[index]} ${'  '}  ${functionDate()}`)
    );
  });
//Создание даты
const functionDate = () => {
  return `${objectDate.day}-${objectDate.month}-${objectDate.year}`;
};
let date = new Date();
let objectDate = {
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
};
console.log(objectDate.day);
console.log(date.toISOString());

data.forEach((el) => (el.textContent = functionDate()));

//появление кнопки при наведение мыши на карточку товара и вызов модального окна при клике на кнопку

card.forEach((el) => {
  const description = el.querySelector('.about_Car');
  const showDescription = el.querySelector('.show__description');
  const cardtovaractive = el.querySelector('.card__tovar__active');
  const modalShowDescription = el.querySelector('.conteiner__discription');
  const btnClose = el.querySelector('.close');

  description.addEventListener('mouseenter', function (e) {
    console.log(e.target);
    showDescription.classList.remove('hidden');
  });
  if (!showDescription.classList.contains('hidden')) {
    setTimeout(() => {
      showDescription.classList.add('hidden');
    }, 5000);
    console.log('hello settimeout');
  }
  showDescription.addEventListener('click', function () {
    console.log(modalShowDescription);
    modalShowDescription.classList.remove('hidden');

    console.log('good');
  });

  btnClose.addEventListener('click', function () {
    modalShowDescription.classList.add('hidden');
    showDescription.classList.add('hidden');
    console.log('btnclose');
  });
});

//работа с контейнером adversting__bloger создание слайдера для для описания контейнера

const slide0 =
  ' Hi, Im Leon. Cooking is the way I express my creative side tothe world. Welcome to my Kitchen Corner on…';
const slide1 =
  ' Hi Im Leon. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa quas laboriosam tempore tempora consequuntur vitae qui voluptates, distinctio optio.';

const slide2 =
  'Quibusdam voluptate eos iure, nostrum, accusamus nisi velit mollitia delectus recusandae expedita placeat quam dignissimos. Laudantium, minus porro! Dolor at quod libero commodi eius, unde explicabo pariatur repudiandae distinctio et, sunt voluptate, perferendis quas atque ut minima? Aperiam, dicta ab, eaque id sequi alias in repudiandae rem magni, totam modi earum reprehenderit!';
const slide3 =
  'Maiores in commodi consectetur accusantium quis sapiente reprehenderit quasi dolorum corrupti, impedit reiciendis iste unde quo, voluptatem a dolor laudantium dignissimos. Aliquam dolorem voluptate dolorum sunt tenetur ipsum illum sapiente quia sequi debitis autem magnam provident numquam et deserunt non commodi, a deleniti magni maxime fuga repellat reiciendis ratione natus! Pariatur saepe eius porro accusamus possimus sit nisi facilis, aliquid adipisci esse libero maiores tempore nesciunt ut. Deserunt magni suscipit vel id perspiciatis maxime cum harum voluptatem quisquam et? Est, neque porro vitae itaque suscipit dolorum quam unde facilis, reprehenderit commodi cumque.';

const arrslide = [slide0, slide1, slide2, slide3];
let currentslide = 0;

const updateSlide = function () {
  descriptionBloger.textContent = arrslide[currentslide];
  btnBloger.textContent = currentslide === 0 ? 'Continue Reading' : 'CLOSE';
  conteinerButtons.classList.toggle('hidden', currentslide === 0);
};
btnBloger.addEventListener('click', function () {
  if (currentslide === 0) {
    currentslide = 1;
  } else {
    currentslide = 0;
  }
  updateSlide();
});
buttonNext.addEventListener('click', function () {
  currentslide = (currentslide + 1) % arrslide.length;
  if (currentslide === 0) {
    currentslide = 1;
  }
  updateSlide();
});
buttonPrev.addEventListener('click', function () {
  currentslide = (currentslide - 1) % arrslide.length;
  if (currentslide === 0) currentslide = arrslide.length - 1;
  updateSlide();
});

//Подписка на рассылку отправка формы

const hiddenForm = (par1, par2) => {
  form.classList[par1]('hidden');
  showModalForm.classList[par2]('hidden');
};

let formArray = [];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  formArray.push(data);
  document.querySelectorAll('.inputForm').forEach((el) => (el.value = ''));
  hiddenForm('add', 'remove');
});

modalFormButton.addEventListener('click', function () {
  hiddenForm('remove', 'add');
});

//переключение страниц с помощью pagination
let currentPuganation = -1;
numberPage.forEach((el) => el.addEventListener('click', function (e) {}));

//Слайдер который переключается автоматически при попадание в вью порт

let currentSlide = 0;
let sliderInterval = null;

function slider() {
  slideCardMostPopular.forEach((el) => el.classList.add('hidden'));
  currentSlide = (currentSlide + 1) % slideCardMostPopular.length;
  slideCardMostPopular[currentSlide].classList.remove('hidden');
}
slider();

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!sliderInterval) {
          sliderInterval = setInterval(slider, 3000);
        }
      } else {
        if (sliderInterval) {
          clearInterval(sliderInterval);
          sliderInterval = null;
        }
      }
    });
  },
  { root: null, rootMargin: '0px', threshold: 0.3 }
);

const targetElement = document.querySelector('.conteiner__card__most__popular');
if (targetElement) {
  observer.observe(targetElement);
}

//еще одна форма которая в футере

const HiddenformAndModalWindow = (par1, par2) => {
  modalformFooter.classList[par1]('hidden');
  formFooter.classList[par2]('hidden');
};

let userArray = [];
formFooter.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(formFooter);

  const data = Object.fromEntries(formData);
  userArray.push(data);
  document
    .querySelectorAll('.inputFormFooter')
    .forEach((el) => (el.value = ''));

  HiddenformAndModalWindow('remove', 'add');

  setTimeout(function () {
    HiddenformAndModalWindow('add', 'remove');
  }, 5000);
});
