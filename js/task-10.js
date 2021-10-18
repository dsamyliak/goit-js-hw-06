function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxes = document.querySelector("div#boxes");
const inputDivNumber = document.querySelector("input");

const createBtn = document.querySelector("button[data-create]");

function createBoxes(amount) {
  amount = inputDivNumber.value;
  console.log("create boxes", amount);

  let divBoxesString = {};
  let startWidth = 30;
  let startHeight = 30;
  
  for (let index = 0; index < amount; index++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("created-boxes");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${startWidth}px`;
    newDiv.style.height = `${startHeight}px`;
    console.log(newDiv);
    divBoxesString += newDiv;
    startWidth += 10;
    startHeight += 10;
  };

  console.log(divBoxesString);

  divBoxes.append(divBoxesString);
};

createBtn.addEventListener("click", createBoxes);


const destroyBtn = document.querySelector("button[data-destroy]");


const destroyBoxes = () => {
  const newDivs = document.querySelectorAll(".created-boxes");
  console.log(newDivs);

  newDivs.forEach(newDiv => {
  newDiv.remove();
  });
};

destroyBtn.addEventListener("click", destroyBoxes);

