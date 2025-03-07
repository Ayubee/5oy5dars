const mod = document.querySelector("#dark-mood");
const image = document.querySelector("#dark__mod__img");
const images = document.querySelector("#logo");
const textarea = document.querySelector("#textArea");
const body = document.body;

mod.addEventListener("click", () => {
  body.classList.toggle("dark__mode");
  image.src = "./src/images/Icon.svg";
  images.src = "./src/images/Dark-Logo.svg";
  mod.classList.toggle("dark");
  textarea.classList.toggle("dark-mode");
});
const list = document.querySelector("#list");

textarea.addEventListener("input", () => {
  let element = {};
  const elementsCounter = [];
  const elements = textarea.value.split("");

  elements.forEach((el) => {
    const item = elementsCounter.find((e) => {
      return Object.keys(e)[0] == el;
    });
    if (item) {
      item[el] += 1;
    } else {
      element[el] = 1;
      elementsCounter.push(element);
    }

    element = {};
  });
  console.log(elementsCounter);
  list.textContent = "";

  elementsCounter.forEach((el) => {
    const length = textarea.value.length;
    const key = Object.keys(el)[0];
    console.log(key, (el[key] / length) * 100);

    const item = document.createElement("li");
    const wrapper = document.createElement("div");
    const proccess = document.createElement("div");
    const result = document.createElement("div");
    const spanChar = document.createElement("span");
    const spanPersent = document.createElement("span");
    const spanCount = document.createElement("span");

    wrapper.appendChild(proccess);
    wrapper.classList.add("wrapper");
    proccess.classList.add("proccess");
    proccess.style.width = `${((el[key] / length) * 100).toFixed(2)}%`;
    spanChar.textContent = key;
    spanPersent.textContent = `${((el[key] / length) * 100).toFixed(2)}%`;
    spanCount.textContent = el[key];
    result.classList.add("result");
    result.append(spanChar, spanCount);

    item.append(spanChar, wrapper, spanPersent, result);
    list.appendChild(item);
  });
});
