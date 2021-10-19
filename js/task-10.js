function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxes = document.querySelector("div#boxes");
const inputDivNumber = document.querySelector("input");
inputDivNumber.value = 1;

// createBoxes(amount)

const createBtn = document.querySelector("button[data-create]");

function createBoxes(amount) {

  destroyBoxes();

  amount = inputDivNumber.value;
  console.log("create boxes", amount);

  let startWidth = 30;
  let startHeight = 30;
  let newDiv;


  // empty div, like margin
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("created-boxes");
  emptyDiv.style.height = "10px";
  divBoxes.append(emptyDiv);
  // 
  
  // old version
  // for (let index = 0; index < amount; index++) {

  //   newDiv = document.createElement("div");
  //   newDiv.classList.add("created-boxes");
  //   newDiv.style.backgroundColor = getRandomHexColor();
  //   newDiv.style.border = "inset 3px gray";
  //   newDiv.style.width = `${startWidth}px`;
  //   newDiv.style.height = `${startHeight}px`;
  //   startWidth += 10;
  //   startHeight += 10;
    
  //   divBoxes.append(newDiv);
  //   console.log("divBoxes", divBoxes);

  // };  
  
  let newDivs = [];

for (let index = 0; index < amount; index++) {

  newDiv = document.createElement("div");
  newDiv.classList.add("created-boxes");
  newDiv.style.backgroundColor = getRandomHexColor();
  newDiv.style.border = "inset 3px gray";
  newDiv.style.width = `${startWidth}px`;
  newDiv.style.height = `${startHeight}px`;
  startWidth += 10;
  startHeight += 10;
  
  newDivs.push(newDiv);
  
  };
    
  divBoxes.append(...newDivs);
  console.log('newDivs',newDivs);
  console.log("divBoxes", divBoxes);
};

createBtn.addEventListener("click", createBoxes);


// destroyBoxes

const destroyBtn = document.querySelector("button[data-destroy]");


function destroyBoxes() {
  const newDivs = document.querySelectorAll(".created-boxes");
  // console.log(newDivs);

  newDivs.forEach(newDiv => {
  newDiv.remove();
  });
};

destroyBtn.addEventListener("click", destroyBoxes);

