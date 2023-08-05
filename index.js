const seasonSelect = document.querySelector("#season");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");
let swiper = null;

window.addEventListener("load", () => {
  document.querySelector(".swiper-wrapper").classList.remove("cls");
  document.querySelector(".swiper-wrapper").removeAttribute("role");
  swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 16,
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

  seasonSelect.addEventListener("change", updateSeason);
});

function updateSeason() {
  const season = Number(this.value);
  const slides = { 1: 25, 2: 13, 3: 1 };
  let slideTo = slides[season] || slides[3];
  const duration = motionState.matches ? 0 : 500;

  if (window.innerWidth <= 478) {
    focusOffset = 600;
    slideTo -= 1;
    setTimeout(() => {
      document
        .querySelector(".swiper-slide.w-dyn-item.swiper-slide-active")
        .setAttribute("tabindex", "-1");
      document
        .querySelector(".swiper-slide.w-dyn-item.swiper-slide-active")
        .focus();
    }, focusOffset);
  }

  if (swiper) {
    swiper.slideTo(slideTo, duration, true);
    focusOffset = 600;
    setTimeout(() => {
      document
        .querySelector(".swiper-slide.w-dyn-item.swiper-slide-active")
        .setAttribute("tabindex", "-1");
      document
        .querySelector(".swiper-slide.w-dyn-item.swiper-slide-active")
        .focus();
    }, focusOffset);
  }
}
