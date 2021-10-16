const inputString = document.querySelector('input#validation-input');
console.log('inputString', inputString);

const bluredString = inputString.addEventListener("blur", (e) => {
    
    if (inputString.value.length !== Number(inputString.dataset.length)) {
        inputString.classList.add("invalid");
        console.log('invalid');
    } else {
        inputString.classList.replace("invalid", "valid");
        console.log('valid');
    };
    
});

