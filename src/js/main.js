function tabs() {
  const tabs = document.querySelector('.document__tabs');
  if (!tabs) return;

  const tabHeaders = tabs.querySelectorAll('.document__head__item');
  const tabContents = tabs.querySelectorAll('.document__tabs__item');

  tabHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const targetId = this.getAttribute('data-id');
      tabHeaders.forEach(h => h.classList.remove('active'));
      this.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// function headerFixed(){
//   const header = document.querySelector(".header");
//   const links = document.querySelectorAll("a[href^='#']");

//   if (window.scrollY > 20) {
//     header.classList.add("header-fixed");
//   } else {
//     header.classList.remove("header-fixed");
//   }

//   document.addEventListener("scroll", function () {
//     if (window.scrollY > 20) {
//       header.classList.add("header-fixed");
//     } else {
//       header.classList.remove("header-fixed");
//     }
//   });
   
//   links.forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//             const extraOffset = window.innerWidth <= 768 ? 60 : 100;

//           if (targetElement) {
//             window.scrollTo({
//                   top: targetElement.getBoundingClientRect().top + window.scrollY - extraOffset,
//                   behavior: "smooth"
//             });
//           }
//       });
//   });
 
// }

function funcyboxInit() {
  const documents = document.querySelector('.accordion');
  if (!documents) return

  const fancyboxElements = documents.querySelectorAll('.accordion__content__item[data-fancybox]');
  if (fancyboxElements.length > 0) {
    Fancybox.bind("[data-fancybox]", {});
  }
}

function accordion() {
  const accordion = document.querySelector('.accordion');
  if (!accordion) return

  document.querySelectorAll('.accordion__header').forEach(item => {
    item.addEventListener('click', function () {
      const parent = this.parentElement;
      const isActive = parent.classList.contains("active");

      document.querySelectorAll(".accordion__item").forEach(item => {
        item.classList.remove("active");
      });

      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });
}

function faq() {
  const accordion = document.querySelector('.faq');
  if (!accordion) return

    document.querySelectorAll('.faq__head').forEach(item => {
      if (!item.classList.contains('faq__head--link')) {
        item.addEventListener('click', function () {
          const parent = this.parentElement;
          const isActive = parent.classList.contains("active");

          document.querySelectorAll(".faq__item").forEach(item => {
            item.classList.remove("active");
          });

          if (!isActive) {
            parent.classList.add("active");
          }
        });
      }
    });
  
}

// function headerMenu() {
//   const btnMenu = document.querySelector('.header__button-menu');

//   if (!btnMenu) return;

//   btnMenu.addEventListener('click', function () {
//     const isActive = btnMenu.classList.contains('active');

//     if (isActive) {
//       document.querySelector('.header__button-menu .open').classList.add('active');
//       document.querySelector('.header__button-menu .close').classList.remove('active');
//       document.querySelector('.header__dropdown').classList.remove('active');
//       document.querySelector('.header__actions').classList.remove('active');
//       document.querySelector('.header__wrapper').classList.remove('active');
//     } else {
//       document.querySelector('.header__button-menu .open').classList.remove('active');
//       document.querySelector('.header__button-menu .close').classList.add('active');
//       document.querySelector('.header__dropdown').classList.add('active');
//       document.querySelector('.header__actions').classList.add('active');
//       document.querySelector('.header__wrapper').classList.add('active');
//     }
//     btnMenu.classList.toggle('active');
//   });

// }

// function headerMobile(){
//   const header = document.querySelector('.header-mobile .header__nav');

//   header.addEventListener('click', function () {
//     document.querySelector('.header__button-menu').classList.remove('active')
//     document.querySelector('.header__button-menu .open').classList.add('active');
//     document.querySelector('.header__button-menu .close').classList.remove('active');
//     document.querySelector('.header__dropdown').classList.remove('active');
//     document.querySelector('.header__actions').classList.remove('active');
//     document.querySelector('.header__wrapper').classList.remove('active');
//   });
// }

function sliderSwipers() {
  const label = document.querySelector('.hero__label');
  const title = document.querySelector('.hero__title h1');
  if (label && title) {
    title.appendChild(label);
  }
  if (document.querySelector('.hero__slider-swiper')) {

    const imageswiper = new Swiper('.hero__slider-swiper', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        reverseDirection: false,
      },
      speed: 1000,
      effect: "slide",
      allowTouchMove: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      }
    });

    const textSwiper = new Swiper('.hero__box-swiper', {
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        reverseDirection: false,
      },
      slidesPerView: 1,
      speed: 1000,
      allowTouchMove: false,
    });

    document.querySelector('.next').addEventListener('click', function () {
      imageswiper.slideNext();
      textSwiper.slideNext();
      this.classList.add('active');
      document.querySelector('.prev').classList.remove('active');
    });

    document.querySelector('.prev').addEventListener('click', function () {
      imageswiper.slidePrev();
      textSwiper.slidePrev();
      this.classList.add('active');
      document.querySelector('.next').classList.remove('active');
    });

  }
  if(document.querySelector('.article__slider')){
    new Swiper('.article__slider', {
      slidesPerView: 3,
      loopAdditionalSlides: 3,
      speed: 1600,
      spaceBetween: 40,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });

  }
}


function fadeInSections() {
  const sections = document.querySelectorAll('.animate-fade');

  function checkFadeIn() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < windowHeight - 50) { 
        section.style.opacity = '1';
        section.style.transition = 'opacity 0.6s ease-out';
      }
    });
  }

  window.addEventListener('scroll', checkFadeIn);
  window.addEventListener('load', checkFadeIn); // Запускаємо при завантаженні сторінки
}

function helperCollapse() {
  const btnCollapse = document.querySelector('.btn-collapse');

  if (!btnCollapse) return;

  btnCollapse.addEventListener('click', function () {
    const textElement = document.querySelector('.help__item__hide');
    const openIcon = document.querySelector('.btn-collapse .open');
    const closeIcon = document.querySelector('.btn-collapse .close');

    const isActive = textElement.classList.contains('active');

    if (!isActive) {
      textElement.classList.add('active');
      openIcon.classList.remove('active');
      closeIcon.classList.add('active');
    } else {
      textElement.classList.remove('active');
      openIcon.classList.add('active');
      closeIcon.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initManualSlider('.point__slider');
});

function initMap() {
  const location = { lat: 49.8397, lng: 24.0297 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 13,
  });

  new google.maps.Marker({
    position: location,
    map: map,
  });
}

function setupNavigationWithSlideNumber(nextSelector, prevSelector, itemSelector, activeClass, currentSlideSelector) {
  const $items = $(itemSelector);
  const totalSlides = $items.length;

  function updateSlideNumber(index) {
    $(currentSlideSelector).text(index + 1); // Індекс починається з 0
  }

  $(nextSelector).on('click', function () {
    let $current = $items.filter('.' + activeClass);
    let $next = $current.next(itemSelector);
    if ($next.length) {
      $current.removeClass(activeClass);
      $next.addClass(activeClass);
      updateSlideNumber($items.index($next));
    }
  });

  $(prevSelector).on('click', function () {
    let $current = $items.filter('.' + activeClass);
    let $prev = $current.prev(itemSelector);
    if ($prev.length) {
      $current.removeClass(activeClass);
      $prev.addClass(activeClass);
      updateSlideNumber($items.index($prev));
    }
  });

  // Початкове значення
  updateSlideNumber($items.index($items.filter('.' + activeClass)));
}



document.addEventListener('DOMContentLoaded', function () {
  // headerFixed();
  // headerMobile();
  fadeInSections();
  // headerMenu();
  sliderSwipers();
  tabs();
  accordion();
  funcyboxInit();
  faq();
  helperCollapse();
  initMap();
  setupNavigationWithSlideNumber('#nextBtn', '#prevBtn', '.point__item', 'active', '.current-slide');
});