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
    default: 1,
  };

  const handleSeasonChange = function () {
    const season = Number(seasonSelect.value);
    let slideIndex = slideIndices[season] || slideIndices.default;

    const duration = motionState.matches ? 0 : 500;

    // Adjust slideIndex for viewport widths of 478px or less
    if (window.innerWidth <= 478) {
      slideIndex -= 1;
    }

    swiper.slideTo(slideIndex, duration, true);
  };

  // Call on window load
  window.onload = handleSeasonChange;

  // Call on window resize
  window.onresize = handleSeasonChange;

  // Bind to seasonSelect change event
  seasonSelect.onchange = handleSeasonChange;

  // seasonSelect.onchange = function () {
  //   const season = Number(this.value);

  //   if (motionState.matches) {
  //     if (season === 1) {
  //       swiper.slideTo(25, 0, true);
  //     } else if (season === 2) {
  //       swiper.slideTo(13, 0, true);
  //     } else if (season === 3) {
  //       swiper.slideTo(1, 0, true);
  //     } else {
  //       swiper.slideTo(1, 0, true);
  //     }
  //   } else {
  //     if (season === 1) {
  //       swiper.slideTo(25, 500, true);
  //     } else if (season === 2) {
  //       swiper.slideTo(13, 500, true);
  //     } else if (season === 3) {
  //       swiper.slideTo(1, 500, true);
  //     } else {
  //       swiper.slideTo(1, 500, true);
  //     }
  //   }
  // };
});
