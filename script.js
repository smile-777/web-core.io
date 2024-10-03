//== main-page ===

let overlay = document.querySelector('.overlay');
let dropMenu = document.querySelector('.drop-menu');
let menuButton = document.querySelector('.rect-box_horizontal');
let callButton = document.querySelectorAll('.button_call');
let modalWindow = document.querySelector('.modal');
let menuCloserCross = document.querySelector('.drop-menu__cross');
let greenRectangle = menuButton.querySelector('.rect-box__rectange_small');
let menuLinkButton = document.querySelectorAll('.drop-menu a');

menuButton.addEventListener('click', function () {
  overlay.classList.add('overlay_visible');
  dropMenu.classList.add('drop-menu_visible');
  greenRectangle.classList.add('rect-box__rectange_small_active');
});

menuCloserCross.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
  modalWindow.classList.remove('modal_visible');
});

for (let i = 0; i < menuLinkButton.length; i++) {
  menuLinkButton[i].addEventListener('click', function () {
    closeModal();
  });
}

for (let i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener('click', function () {
    overlay.classList.add('overlay_visible');
    modalWindow.classList.add('modal_visible');
  });
}

var closeModal = function () {
  overlay.classList.remove('overlay_visible');
  dropMenu.classList.remove('drop-menu_visible');
  greenRectangle.classList.remove('rect-box__rectange_small_active');
};


//=== extend-button ===

let extendButton = document.querySelector('.extend-button');
let swiperBox = document.querySelector('.swiper');

extendButton.addEventListener('click', function () {
    if(extendButton.className !== 'extend-button extend-button_pushed') {
        extendButton.classList.add('extend-button_pushed');
        swiperBox.classList.add('swiper_extended');
    } else {
        extendButton.classList.remove('extend-button_pushed');
        swiperBox.classList.remove('swiper_extended');
    }
    
});

//=== swiper ===

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    };

//============= 2 ================      
const resizableSwiper_2 = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper_2;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper_2 = function(className, settings) {
    swiper_2 = new Swiper(className, settings);

    if (callback) {
      callback(swiper_2);
    }
  }

  const checker_2 = function() {
    if (breakpoint.matches) {
      return enableSwiper_2(swiperClass, swiperSettings);
    } else {
      if (swiper_2 !== undefined) swiper_2.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener('change', checker_2);
  checker_2();
};

//===============================    
  
    resizableSwiper(
      '(max-width: 767px)',
      '.swiper',
      {
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
        },

        slidesPerView: 'auto',
        spaceBetween: 150,
        centeredSlides: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      },
    );

    resizableSwiper_2(
      '(max-width: 1440px)',
      '.swiper-sertificate',
      {
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
        },

        slidesPerView: 1,
        spaceBetween: 150,
        centeredSlides: true,
        loop: false,

        pagination: {
            el: '.sertificate__swiper-pagination',
            clickable: true,
        },
      },
    );

  });
