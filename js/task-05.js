const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener("input", (e) => {
    textOutput.textContent = e.currentTarget.value;
    if (textInput.value === "") {
        textOutput.textContent = "Anonymous";
    };
});