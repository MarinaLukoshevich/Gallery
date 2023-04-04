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


// new Swiper('.gallery__swiper', {
//   slidesPerView: 3,
//   slidesPerGroup: 3,
//   // loop: true,
//   spaceBetween: 50,
//   speed: 300,

//   navigation: {
//     prevEl: ".gallery__prev",
//     nextEl: ".gallery__next",
//   },

//   pagination: {
//     el: ".gallery__pagin",
//     type: 'fraction',
//   },

//   a11y: {
//     paginationBulletMessage: 'Перейти к слайду {{index}}',
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDoun: true,
//   },
// });



document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    speed: 300,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      prevEl: ".gallery__btn-prev",
      nextEl: ".gallery__btn-next"
    },

    breakpoints: {
      441: {
        slidesPerView: 1,
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    // a11y: false,
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

  });
});





new Swiper('.projects__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  speed: 300,

  navigation: {
    prevEl: ".projects__prev",
    nextEl: ".projects__next",
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});




































// SELECT
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom',
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










// MAP
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map1", {
    center: [55.76021556895837, 37.614769499999944],
    zoom: 17,
    controls: [], // это отключает элементы управления
    controls: ['zoomControl', 'geolocationControl'],
  },
    {
      suppressMapOpenBlock: true, // это отключает некоторые элементы внизу карты
    });

  var myPlacemark = new ymaps.Placemark([55.76021556895837, 37.614769499999944], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}










// FORM-validator
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate(".form", {
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  messages: {
    name: {
      required: "Ваше имя",
      minlength: "Слишком короткое имя",
      maxLength: "Слишком длинное имя",
    },
    tel: {
      required: "Укажите ваш телефон",
      function: "Укажите ваш телефон полностью",
    },
  },
});

validation.onSuccess(function () {
  document.getElementById("form").submit();
});















