const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
let swiper = null;

window.addEventListener("load", () => {
  document.querySelector(".swiper-wrapper").classList.remove("cls");
  swiper = new Swiper(".swiper", {
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
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      0: {
        slidesPerView: 1,
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

  seasonSelect.addEventListener("change", updateSeason);
});

function updateSeason() {
  const season = Number(this.value);
  const slides = { 1: 25, 2: 13, 3: 1 };
  const slideTo = slides[season] || slides[3];
  const duration = motionState.matches ? 0 : 500;

  if (swiper) {
    swiper.slideTo(slideTo, duration, true);
  }
}

// const seasonSelect = document.querySelector("#season");
// const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
// let currentSeason = Number(seasonSelect.value);

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
//         slidesPerView: 1,
//         spaceBetween: 16,
//         slidesPerGroup: 1,
//       },
//       0: {
//         slidesPerView: 1,
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

//   seasonSelect.addEventListener("change", updateSeason);
// });

// function updateSeason() {
//   const season = Number(this.value);
//   const slides = { 1: 25, 2: 13, 3: 1 };
//   const slideTo = slides[season] || slides[3];
//   const duration = motionState.matches ? 0 : 500;
//   swiper.slideTo(slideTo, duration, true);
// }
