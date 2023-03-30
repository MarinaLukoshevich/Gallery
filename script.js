// ROUTE
document.addEventListener('DOMContentLoaded', () => {

  const routeBtns = document.querySelectorAll('.route__btn');
  const drops = document.querySelectorAll('.dropdown');

  routeBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      // 1строка- найдем dropdown (текущий) через родителя route__item
      let drop = currentBtn.closest('.route__item').querySelector('.dropdown');

      // 3с- клик на кнопку и ей добавится .route__btn--active
      // 2с- класс добавится нужной, а у соседей сбросится
      routeBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('route__btn--active');
        }
      });
      currentBtn.classList.toggle('route__btn--active');

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });
      drop.classList.toggle('dropdown--active');
    });
  });
  // по клику в другое место закрыть dropdown
  // если наша цель не является потомком route-list, тогда...
  // будем удалять классы, перенеся 2с сюда + подкорректируя:
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.route-list')) {
      routeBtns.forEach(el => {
        el.classList.remove('route__btn--active');
      });
      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });
  // + сделать .route-list inline-flex в css!
});




// SWIPER
const swiperHero = new Swiper('.hero__swiper', {
  spaceBetween: 5,
  loop: true,
  speed: 300,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

});


new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 50,
  speed: 300,

  navigation: {
    prevEl: ".gallery__prev",
    nextEl: ".gallery__next",
  },

  pagination: {
    el: ".gallery__pagin",
    type: 'fraction',
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDoun: true,
  // },
});









// TOOLTIP
const button1 = document.querySelector('#button1');
const tooltip1 = document.querySelector('#tooltip1');
Popper.createPopper(button1, tooltip1, {
	placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 7],
      },
    },
  ],
});

const button2 = document.querySelector('#button2');
const tooltip2 = document.querySelector('#tooltip2');
Popper.createPopper(button2, tooltip2, {
	placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 7],
      },
    },
  ],
});

const button3 = document.querySelector('#button3');
const tooltip3 = document.querySelector('#tooltip3');
Popper.createPopper(button3, tooltip3, {
	placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 7],
      },
    },
  ],
});






