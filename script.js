
// BURGER
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger-close');
let navLogin = document.querySelector('.header__NavLogin');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let login = document.querySelector('.login');

burger.addEventListener('click',
  function () {
    navLogin.classList.add('header__NavLogin--active');
    menu.classList.add('header__nav--active');
    login.classList.add('login--active');
    document.body.classList.add('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    navLogin.classList.remove('header__NavLogin--active');
    menu.classList.remove('header__nav--active');
    login.classList.remove('login--active');
    document.body.classList.remove('stop-scroll');
  });

  login.addEventListener('click',
    function () {
      navLogin.classList.remove('header__NavLogin--active');
      menu.classList.remove('header__nav--active');
      login.classList.remove('login--active');
      document.body.classList.remove('stop-scroll');
    });

  burgerClose.addEventListener('click',
    function () {
      navLogin.classList.remove('header__NavLogin--active');
      menu.classList.remove('header__nav--active');
      login.classList.remove('login--active');
      document.body.classList.remove('stop-scroll');
    });
});





// HEADER-SEARCH
let searchBtn = document.querySelector('.header__search-btn');
let searchForm = document.querySelector('.header__search');
let searchClose = document.querySelector('.header__search-close');

searchBtn.addEventListener('click',
  function () {
    searchForm.classList.add('header__search--active')
  });
searchClose.addEventListener('click',
  function () {
    searchForm.classList.remove('header__search--active')
  });





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
document.addEventListener("DOMContentLoaded", () => {
  let heroSlider = new Swiper(".hero__swiper", {
    loop: true,
    a11y: false,
    spaceBetween: 50,
    speed: 300,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
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
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      768: {
        spaceBetween: 38
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      }
    },

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


document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper(".events__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    speed: 300,
    navigation: {
      prevEl: ".events__btn-prev",
      nextEl: ".events__btn-next"
    },
    pagination: {
      el: '.events__pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
      1024: {
        spaceBetween: 27
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      }
    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
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


document.addEventListener("DOMContentLoaded", () => {
  let projectsSlider = new Swiper(".projects__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    speed: 300,
    navigation: {
      prevEl: ".projects__btn-prev",
      nextEl: ".projects__btn-next"
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 2
      },
      768: {
        spaceBetween: 34
      },
      320: {
        slidesPerView: 1
      }
    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
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





// SELECT
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom',
});





// ACCORDEON
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// Табы
const params = {
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "js-active",
  tabsClass: "js-tab-btn"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });
    currentContent.classList.add(params.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });
    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}
setTabs(params);





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
    controls: [], // отключает элементы управления
    controls: ['zoomControl', 'geolocationControl'],
  },
    {
      suppressMapOpenBlock: true, // отключает некоторые элементы внизу карты
    });
  var myPlacemark = new ymaps.Placemark([55.76021556895837, 37.614769499999944], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
};





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









