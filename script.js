document.addEventListener('DOMContentLoaded', () => {

  function headerBurger() {
    const burger = document.querySelector('.burger'),
      burgerClose = document.querySelector('.burger-close'),
      navLogin = document.querySelector('.header__NavLogin'),
      menu = document.querySelector('.header__nav'),
      menuLinks = menu.querySelectorAll('.nav__link'),
      login = document.querySelector('.login');

    function addBurger() {
      navLogin.classList.add('header__NavLogin--active');
      menu.classList.add('header__nav--active');
      login.classList.add('login--active');
      document.body.classList.add('stop-scroll');
    }

    function removeBurger() {
      navLogin.classList.remove('header__NavLogin--active');
      menu.classList.remove('header__nav--active');
      login.classList.remove('login--active');
      document.body.classList.remove('stop-scroll');
    }

    burger.onclick = () => {
      addBurger();
    }

    const elForRemoveBurger = [];

    elForRemoveBurger.push(burgerClose);
    elForRemoveBurger.push(login);
    menuLinks.forEach((link) => {
      elForRemoveBurger.push(link)
    });

    elForRemoveBurger.forEach((el) => {
      el.onclick = () => {
        removeBurger();
      }
    });
  }



  function headerSearch() {
    const searchBtn = document.querySelector('.header__search-btn');
    const searchForm = document.querySelector('.header__search');
    const searchClose = document.querySelector('.header__search-close');

    searchBtn.onclick = () => {
      searchForm.classList.add('header__search--active')
    };

    searchClose.onclick = () => {
      searchForm.classList.remove('header__search--active')
    };
  }



  function headerRoute() {
    const routeBtns = document.querySelectorAll('.route__btn');
    const drops = document.querySelectorAll('.dropdown');

    //addDropdown
    routeBtns.forEach(btn => {
      btn.onclick = (el) => {
        let currentItem = el.currentTarget; // currentTarget = this(нельзя исп в стрелочных function)- элемент, в котором в данный момент обрабатывается событие(<li class = route__item>)
        let currentDrop = currentItem.closest('.route__item').querySelector('.dropdown'); // в действующем родителе route__item найдем соответствующий ему dropdown

        // сначала удалить, затем добавить!
        routeBtns.forEach(btn => {
          if (btn !== currentItem) {
            btn.classList.remove('route__btn--active');
          }
        });
        currentItem.classList.toggle('route__btn--active');

        drops.forEach(drop => {
          if (drop !== currentDrop) {
            drop.classList.remove('dropdown--active');
          }
        });
        currentDrop.classList.toggle('dropdown--active');
      }
    });

    //removeDropdown
    document.onclick = (e) => {
      if (!e.target.closest('.route-list')) { // если наша цель не является потомком route-list
        routeBtns.forEach(btn => {
          btn.classList.remove('route__btn--active');
        });
        drops.forEach(drop => {
          drop.classList.remove('dropdown--active');
        });
      }
    }
  }



  function allSlides() {
    new Swiper(".hero__swiper", {
      loop: true,
      a11y: false,
      speed: 2000,
      direction: 'vertical',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false // autoplay восстановится взаимодействия с клавиатурой
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
    });


    let commonProperties = {
      speed: 300,

      a11y: {
        paginationBulletMessage: 'Перейти к слайду {{index}}', // доступность
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      // сделать слайды вне области видимости не фокусируемыми
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
    }

    new Swiper(".gallery__swiper", {
      ...commonProperties,
      pagination: {
        el: ".gallery__pagination",
        type: "fraction"
      },
      navigation: {
        prevEl: ".gallery__btn-prev",
        nextEl: ".gallery__btn-next"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 38
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        },
      },

    });

    new Swiper(".events__swiper", {
      ...commonProperties,
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
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 27
        },
        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        },
      },
    });

    new Swiper(".projects__swiper", {
      ...commonProperties,
      navigation: {
        prevEl: ".projects__btn-prev",
        nextEl: ".projects__btn-next"
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        },
      },
    });
  }



  function gallerySelect() {
    const element = document.querySelector('select');
    new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
      position: 'bottom',
    });
  }



  function galleryModal() {
    const btns = document.querySelectorAll('.gallery__slide');
    const modals = document.querySelectorAll('.gallery__modal');
    const btnsClose = document.querySelectorAll('.gallery__modal-close');
    const modalsWrap = document.querySelector('.gallery__modals-overlay');

    btns.forEach((btn) => {
      btn.onclick = (el) => {
        let path = el.currentTarget.getAttribute('data-path'); // currentTarget = this
        modalsWrap.classList.add('gallery__modals-overlay--visible');
        document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal--visible');
      }
    })

    function removeModal() {
      modalsWrap.classList.remove('gallery__modals-overlay--visible');
      modals.forEach((modal) => {
        modal.classList.remove('gallery__modal--visible');
      })
    }

    modalsWrap.onclick = (el) => {
      if (el.target === modalsWrap) { // без этого условия окно закроется ,если кликнуть на потомков modals
        removeModal();
      }
    }

    btnsClose.forEach((btn) => {
      btn.onclick = () => {
        removeModal();
      }
    })

  }



  function catalogAccordion() {
    new Accordion(".js-accordion-container", {
      openOnInit: [0]
    });

    const params = {
      wrap: "js-tabs-wrap",
      content: "js-tab-content",
      active: "js-active",
      tabsClass: "js-tab-btn"
    };

    setTabs(params);
    function setTabs(params) {
      const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

      tabBtns.forEach(function (btn) {
        btn.addEventListener("click", onTabClick);
      });

      function onTabClick(tab) {
        tab.preventDefault();
        const path = this.dataset.path; //  .js-tab-btn with data-path='path'
        const wrap = this.closest(`.${params.wrap}`); // .js-tabs-wrap (тут будем искать селекторы, вместо document.querySel...)
        const contents = wrap.querySelectorAll(`.${params.content}`);
        const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`); // .js-tab-content with data-target='path'

        // сначала удалить, затем добавить!
        contents.forEach((card) => {
          card.classList.remove(params.active);
        });
        currentContent.classList.add(params.active); // current .js-tab-content

        tabBtns.forEach((btn) => {
          btn.classList.remove(params.active);
        });
        this.classList.add(params.active); // current .js-tab-btn
      }
    }
  }



  function projectToolTips() {
    let locationTips = {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 7],
          },
        },
      ],
    }

    const button1 = document.querySelector('#button1');
    const tooltip1 = document.querySelector('#tooltip1');
    Popper.createPopper(button1, tooltip1, locationTips);

    const button2 = document.querySelector('#button2');
    const tooltip2 = document.querySelector('#tooltip2');
    Popper.createPopper(button2, tooltip2, locationTips);

    const button3 = document.querySelector('#button3');
    const tooltip3 = document.querySelector('#tooltip3');
    Popper.createPopper(button3, tooltip3, locationTips);
  }



  function contactsMap() {
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
  }



  function contactsForm() {
    let selector = document.querySelector("input[type='tel']");
    let im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    const validation = new JustValidate(".form", {
      rules: {
        name: {
          required: true,
          minLength: 3,
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
          minLength: "Слишком короткое имя",
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
  }


  headerBurger();
  headerSearch();
  headerRoute();
  allSlides();
  gallerySelect();
  galleryModal();
  catalogAccordion();
  projectToolTips();
  contactsMap();
  contactsForm();
})




