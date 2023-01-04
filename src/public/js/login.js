//Show and hide password
const eyeIcons = document.querySelectorAll(".eye-icon");

eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const Fields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        Fields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})
