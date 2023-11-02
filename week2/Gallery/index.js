const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const topBtn = $(".top-button");
const pageHeight = window.innerHeight;

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / pageHeight;
});
