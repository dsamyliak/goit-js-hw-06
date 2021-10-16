const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", pressLogin);

function pressLogin(e) {
    e.preventDefault();
    
    const {
        elements: { email, password }
    } = e.currentTarget;

    // console.log('e.currentTarget:', e.currentTarget);
        
    if (email.value === "" || password.value === "") {
    return  alert("Все поля должны быть заполнены!");
    }
    
    const formInfo = {};
    const formData = new FormData(e.currentTarget);

    formData.forEach((value, name) => {
        formInfo[name] = value;
     });
    
    console.log("formInfo:", formInfo);
    e.currentTarget.reset();
};


