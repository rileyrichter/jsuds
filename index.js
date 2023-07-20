const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
const swiperWrapper = document.querySelector(".swiper-wrapper");

// Mapping seasons to steps from the first slide
const slideSteps = {
  1: 24,
  2: 12,
  3: 0,
  default: 0,
};

window.addEventListener("load", () => {
  swiperWrapper.classList.remove("cls");

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
      },
      479: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
    },
    pagination: {
      el: ".pagination",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  seasonSelect.onchange = function () {
    const season = Number(this.value);
    const slideStep = slideSteps[season] || slideSteps.default;
    const duration = motionState.matches ? 0 : 500;

    // Sliding to the step away from the first slide
    swiper.slideTo(swiper.activeIndex + slideStep, duration, true);
  };
});

/*

const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
const swiperWrapper = document.querySelector(".swiper-wrapper");

const slideIndices = {
  1: 25,
  2: 13,
  3: 1,
  default: 1,
};

window.addEventListener("load", () => {
  swiperWrapper.classList.remove("cls");

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
      },
      479: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
    },
    pagination: {
      el: ".pagination",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  seasonSelect.onchange = function () {
    const season = Number(this.value);
    const slideIndex = slideIndices[season] || slideIndices.default;
    const duration = motionState.matches ? 0 : 500;

    swiper.slideTo(slideIndex, duration, true);
  };
});

*/
