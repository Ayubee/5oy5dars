const mod = document.querySelector("#dark-mood");
const image = document.querySelector("#dark__mod__img");
const images = document.querySelector("#logo");
const body = document.body;

mod.addEventListener("click", () => {
  body.classList.toggle("dark__mode");
  image.src = "./src/images/Icon.svg";
  images.src = "./src/images/Dark-Logo.svg";
  mod.classList.toggle("dark");
});
