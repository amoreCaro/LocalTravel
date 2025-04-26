// function tabs() {
//   const tabs = document.querySelector('.document__tabs');
//   if (!tabs) return;

//   const tabHeaders = tabs.querySelectorAll('.document__head__item');
//   const tabContents = tabs.querySelectorAll('.document__tabs__item');

//   tabHeaders.forEach(header => {
//     header.addEventListener('click', function () {
//       const targetId = this.getAttribute('data-id');
//       tabHeaders.forEach(h => h.classList.remove('active'));
//       this.classList.add('active');
//       tabContents.forEach(content => content.classList.remove('active'));
//       const targetContent = document.getElementById(targetId);
//       if (targetContent) {
//         targetContent.classList.add('active');
//       }
//     });
//   });
// }

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

// function funcyboxInit() {
//   const documents = document.querySelector('.accordion');
//   if (!documents) return

//   const fancyboxElements = documents.querySelectorAll('.accordion__content__item[data-fancybox]');
//   if (fancyboxElements.length > 0) {
//     Fancybox.bind("[data-fancybox]", {});
//   }
// }





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

function collapse() {
  const accordion = document.querySelector('.collapse');
  if (!accordion) return;

  document.querySelectorAll('.collapse__head').forEach(item => {
    if (!item.classList.contains('collapse__head--link')) {
      item.addEventListener('click', function () {
        const parent = this.parentElement;
        const isActive = parent.classList.contains("active");

        if (isActive) {
          parent.classList.remove("active");

          const animationItem = parent.querySelector('.h-animation-right');
          if (animationItem) {
            animationItem.classList.remove('active');
            document.querySelector('.collapse-overlay')?.classList.remove('active');
          }
        } else {
          document.querySelectorAll(".collapse__item").forEach(item => {
            item.classList.remove("active");
            const animationItem = item.querySelector('.h-animation-right');
            if (animationItem) {
              animationItem.classList.remove('active');
            }
          });

          parent.classList.add("active");
          const animationItem = parent.querySelector('.h-animation-right');
          if (animationItem) {
            animationItem.classList.add('active');
            document.querySelector('.collapse-overlay')?.classList.add('active');
          }
        }
      });
    }
  });
}







function fancyboxInit() {
  const slider = document.querySelector('.point__slider');
  if (!slider) return;

  const icons = slider.querySelectorAll('.slider__icon a, .point__icon a');

  const fancyboxItems = Array.from(icons).map((icon) => ({
    src: icon.getAttribute('href'),
    caption: icon.getAttribute('data-caption'),
    type: 'image',
  }));

  icons.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();

      Fancybox.show(fancyboxItems, {
        startIndex: index,
        loop: true,
        buttons: [
          "zoom",
          "slideShow",
          "fullScreen",
          "download",
          "thumbs",
          "close"
        ],
        thumbs: {
          autoStart: true,
        },
        afterLoad: (fancybox) => {
          const image = fancybox.slides[fancybox.currentIndex].querySelector('img');
          if (image) {
            image.style.maxWidth = '80vw';
            image.style.maxHeight = '80vh';
            image.style.width = 'auto';
            image.style.height = 'auto';
          }
        }
      });
    });
  });

  // Додаємо обробку фокусу перед закриттям Fancybox
  document.addEventListener('close.fancybox', () => {
    const activeEl = document.activeElement;
    const container = document.querySelector('.fancybox__container');

    if (container && container.contains(activeEl)) {
      activeEl.blur(); // Прибираємо фокус, щоб уникнути конфлікту з aria-hidden
    }
  });
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
  window.addEventListener('load', checkFadeIn);
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

window.initMap = function () {
  const location = { lat: 49.8397, lng: 24.0297 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 13,
  });

  new google.maps.Marker({
    position: location,
    map: map,
  });
};

function setupNavigationWithSlideNumber(nextSelector, prevSelector, itemSelector, activeClass, currentSlideSelector) {
  const $items = $(itemSelector);
  const totalSlides = $items.length;

  function updateSlideNumber(index) {
    $(currentSlideSelector).text(index + 1);
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

  updateSlideNumber($items.index($items.filter('.' + activeClass)));
}
function countPointItems() {
  const points = document.querySelector('.points');
  if (!points) return 0;

  const items = points.querySelectorAll('.point__item');
  return items.length;
}
function updateTotalSlides() {
  const totalSlidesElement = document.querySelector('.total-slides');
  const count = countPointItems();

  if (totalSlidesElement) {
    totalSlidesElement.textContent = count;
  }
}

const pointSlider = new Swiper('.point__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
function initPlacesSlider() {
  const slider = document.querySelector('.places__slider');
  if (!slider) return;

  return new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.places__pagination',
      clickable: false,
    },
    grabCursor: true,
    touchEventsTarget: 'container',
  });
}

function initPlacesItemToggle() {

  const items = document.querySelectorAll(".places__slide, .swiper-slide");

  items.forEach(item => {
    item.addEventListener("click", () => {

      items.forEach(i => i.classList.remove("active"));

      item.classList.add("active");
    });
  });
}

function initPlacesItemToggle() {
  const items = document.querySelectorAll(".places__slide");
  const details = document.querySelector(".places__details");
  const buttonWrapper = document.querySelector(".places__button");

  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const title = item.getAttribute("data-title");
      const distance = item.getAttribute("data-distance");
      const time = item.getAttribute("data-time");

      if (details) {
        details.innerHTML = `
          <p>${title}</p>
          <div class="places__info">
            <span>${distance}</span>
            <li>${time}</li>
          </div>
        `;
      }

      // Показати кнопку
      if (buttonWrapper) {
        buttonWrapper.classList.add("active");
      }
    });
  });
}

function initBackButton() {
  $('.header__back').on('click', function () {
    window.history.back();
  });
}
function sidebarLogic() {
  const sidebar = $('.sidebar');
  const openModal = $('.openModal');
  const closeModal = $('.closeModal');


  const hasChildren = $('.has-children');
  const items = $('.dropdown__items');
  const back = $('.dropdown__item-back');



  openModal.on('click', function () {
    const sidebarId = $(this).data('sidebarTarget');
    const overlayId = '.overlay';

    if (sidebarId) {
      $(sidebarId).addClass('active');
      $(overlayId).addClass('active');
    }
  });

  closeModal.on('click', function () {
    sidebar.removeClass('active');
  });

  hasChildren.on('click', function () {
    const submenu = $(this).find('.submenu');

    if (submenu.length) {
      submenu.toggleClass('show');
    }
  });

  back.on('click', function () {
    items.removeClass('show').addClass('h-animation-right');
  });
}

function popupLogic() {
  const openPopup = $('.openPopup');
  const closePopup = $('.popup__close');

  openPopup.on('click', function () {
    const target = $(this).data('popupTarget');
    const $popup = $(target);

    if ($popup.length) {
      $popup.addClass('active');
      // overlay.addClass('active');
    }
  });

  closePopup.on('click', function () {
    $(this).closest('.popup').removeClass('active');
    // overlay.removeClass('active');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fadeInSections();
  initPlacesSlider();
  accordion();
  fancyboxInit();
  collapse();
  helperCollapse();
  // initMap();
  setupNavigationWithSlideNumber('#nextBtn', '#prevBtn', '.point__item', 'active', '.current-slide');
  countPointItems();
  updateTotalSlides();
  initPlacesItemToggle();
  initBackButton();
  sidebarLogic();
  popupLogic();
});