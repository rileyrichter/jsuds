const careerItems = document.querySelectorAll(".careers-poster-image-wrapper");
const modalCloseBtn = document.querySelectorAll(".button.light.modal");

careerItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
    item.nextElementSibling.tabIndex = -1;
    item.nextElementSibling.focus();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modalCloseBtn.forEach((btn) => {
          btn.click();
        });
      }
    });
  });
});

modalCloseBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    window.onscroll = function () {};
  });
});
