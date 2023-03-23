// BURGER
let home = document.querySelector('.home');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

home.addEventListener('click',
  function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})



// HEADER-SEARCH
let searchBtn = document.querySelector('.header__search-btn');
let searchForm = document.querySelector('.header__search');
let searchClose = document.querySelector('.header__search-close');

searchBtn.addEventListener('click',
  function () {
    searchForm.classList.add('header__search--active')
  })

searchClose.addEventListener('click',
  function () {
    searchForm.classList.remove('header__search--active')
  })



// SWIPER
const swiper = new Swiper('.home__swiper', {
  spaceBetween: 50,
  loop: true,
  speed: 300,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
  paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});



// TABS
let tabsBtn = document.querySelectorAll('.stage__btn');
let tabsItem = document.querySelectorAll('.tabs__bloc');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('stage__btn--active')
    });
    e.currentTarget.classList.add('stage__btn--active');

    tabsItem.forEach(function (element) {
      element.classList.remove('tabs--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs--active');
  });
});



// ACCORDION
new Accordion('.question__list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

