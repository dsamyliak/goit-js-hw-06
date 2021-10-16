const fontControl = document.querySelector('input#font-size-control');
const changedText = document.querySelector('span#text');

console.log('fontControl Value:', fontControl.value);

const fontControlEvent = fontControl.addEventListener("input", (e) => {

    changedText.style.fontSize = `${e.currentTarget.value}px`;
    
});