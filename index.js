const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentSeason = Number(seasonSelect.value);

window.addEventListener("load", () => {
  document.querySelector(".swiper-wrapper").classList.remove("cls");
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
        slidesPerView: 1.2,
        spaceBetween: 16,
        slidesPerGroup: 1,
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
    if (season !== currentSeason) {
      currentSeason = season;

      const slides = { 1: 25, 2: 13, 3: 1 };
      const slideTo = slides[season] || slides[3];
      const duration = motionState.matches ? 0 : 500;
      swiper.slideTo(slideTo, duration, true);
    }
  };
});

// const seasonSelect = document.querySelector("#season");
// const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");

// window.addEventListener("load", () => {
//   document.querySelector(".swiper-wrapper").classList.remove("cls");
//   const swiper = new Swiper(".swiper", {
//     direction: "horizontal",
//     loop: false,
//     slidesPerView: 3,
//     spaceBetween: 10,
//     slidesPerGroup: 3,

//     breakpoints: {
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 16,
//         slidesPerGroup: 3,
//       },
//       479: {
//         slidesPerView: 1.2,
//         spaceBetween: 16,
//         slidesPerGroup: 1,
//       },
//       0: {
//         slidesPerView: 1.2,
//         spaceBetween: 16,
//         slidesPerGroup: 1,
//       },
//     },
//     pagination: {
//       el: ".pagination",
//     },
//     navigation: {
//       nextEl: ".next",
//       prevEl: ".prev",
//     },
//   });

//   seasonSelect.onchange = function () {
//     const season = Number(this.value);

//     if (motionState.matches) {
//       if (season === 1) {
//         swiper.slideTo(25, 0, true);
//       } else if (season === 2) {
//         swiper.slideTo(13, 0, true);
//       } else if (season === 3) {
//         swiper.slideTo(1, 0, true);
//       } else {
//         swiper.slideTo(1, 0, true);
//       }
//     } else {
//       if (season === 1) {
//         swiper.slideTo(25, 500, true);
//       } else if (season === 2) {
//         swiper.slideTo(13, 500, true);
//       } else if (season === 3) {
//         swiper.slideTo(1, 500, true);
//       } else {
//         swiper.slideTo(1, 500, true);
//       }
//     }
//   };
// });
