let counterValue = 0;
console.log('counterValue:', counterValue);
const idValue = document.querySelector('span#value');
console.log('text Content:',idValue.textContent);


const incrBtn = document.querySelector('button[data-action="increment"]');
const incrementFunc = () => {
    counterValue += 1;
    idValue.textContent = counterValue;
};
incrBtn.addEventListener("click", incrementFunc);

const decrBtn = document.querySelector('button[data-action="decrement"]');
const decrementFunc = () => {
    counterValue -= 1;
    idValue.textContent = counterValue;
};
decrBtn.addEventListener("click", decrementFunc);
