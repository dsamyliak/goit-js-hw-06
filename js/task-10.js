function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxes = document.querySelector("div#boxes");
const inputDivNumber = document.querySelector("input");

const startWidth = 30;
const startHeight = 30;
let lastDeltaWidth = 0;
let lastDeltaHeight = 0;
let newDiv;
let newDivs = [];

// createBoxes(amount)

const createBtn = document.querySelector("button[data-create]");

function createBoxes(amount) {
  
  amount = inputDivNumber.value;
  console.log("create boxes", amount);

  if (amount === 1) {
    newDiv = document.createElement("div");
    newDiv.classList.add("created-boxes");
    newDiv.style.backgroundColor = getRandomHexColor();
    // newDiv.style.border = "inset 3px gray";
    newDiv.style.width = `${startWidth}px`;
    newDiv.style.height = `${startHeight}px`;
    console.log(newDiv);

    newDivs.push(newDiv);
    return divBoxes.append(...newDivs);

  } else {
    for (let index = 0; index < amount; index++) {
  
  newDiv = document.createElement("div");
  newDiv.classList.add("created-boxes");
  newDiv.style.backgroundColor = getRandomHexColor();
  newDiv.style.border = "inset 3px gray";
  newDiv.style.width = `${startWidth + lastDeltaWidth}px`;
  newDiv.style.height = `${startHeight + lastDeltaHeight}px`;
  lastDeltaWidth += 10;
  lastDeltaHeight += 10;
  
  newDivs.push(newDiv);
  
  };
    
  divBoxes.append(...newDivs);
  
    console.log('newDivs', newDivs);
    console.log("divBoxes", divBoxes);
    
  newDivs = [];
  };
    
  inputDivNumber.value = "";

};

createBtn.addEventListener("click", createBoxes);


// destroyBoxes

const destroyBtn = document.querySelector("button[data-destroy]");


function destroyBoxes() {
  let newDivs = document.querySelectorAll(".created-boxes");
  
  newDivs.forEach(newDiv => {
  newDiv.remove();
  });

  inputDivNumber.value = "";
  lastDeltaWidth = 0;
  lastDeltaHeight = 0;
  newDivs = [];
    
};

destroyBtn.addEventListener("click", destroyBoxes);