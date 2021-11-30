const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-carousel-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let nexIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (nexIndex < 0) {
      nexIndex = slides.children.length - 1;
    }
    if (nexIndex > slides.children.length - 1) {
      nexIndex = 0;
    }
    slides.children[nexIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
