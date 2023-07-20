const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("load", () => {
  document.querySelector(".swiper-wrapper").classList.remove("cls");
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

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

  const slideIndices = {
    1: 25,
    2: 13,
    3: 1,
  };

  const handleSeasonChange = function () {
    const season = Number(seasonSelect.value);
    let slideIndex = slideIndices[season] || slideIndices.default;

    const duration = motionState.matches ? 0 : 500;

    if (window.innerWidth <= 478) {
      slideIndex -= 1;
    }

    swiper.slideTo(slideIndex, duration, true);
  };

  handleSeasonChange();

  seasonSelect.onchange = handleSeasonChange;
});
