function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyColor: document.querySelector("body"),
  spanColor: document.querySelector("span.color"),
  changeColorBtn: document.querySelector("button.change-color"),
};

refs.changeColorBtn.addEventListener("click", btnClick);

function btnClick () {
  const color = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = color;
  refs.spanColor.textContent = color;

};
