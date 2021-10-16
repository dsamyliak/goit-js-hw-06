const inputString = document.querySelector('input#validation-input');
console.log('inputString', inputString);

const bluredString = inputString.addEventListener("blur", (e) => {
    console.log('yes, blured');
    if (inputString.value.length === inputString.dataset.length) {
        console.log('less then 6');
        inputString.classList.add("invalid");
    } else {
        console.log('6 and more');
        inputString.classList.replace("invalid", "valid");
    };
});

