function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const randomColor = getRandomHexColor();

console.log(randomColor);
