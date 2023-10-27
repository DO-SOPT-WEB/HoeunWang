const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const imagesWrappers = $$(".images-wrapper"); //하나의 이미지 card

imagesWrappers.forEach((image) => {
  image.addEventListener("mouseover", () => {
    const images__description = image.querySelector(".images__description");
    images__description.classList.add("description-appear");
  });

  image.addEventListener("mouseout", () => {
    const images__description = image.querySelector(".images__description");
    images__description.classList.remove("description-appear");
  });
});

const topBtn = $(".top-button");
const pageHeight = window.innerHeight;

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / pageHeight;
});
