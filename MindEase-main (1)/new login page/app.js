const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const form1 = document.querySelector(".sign-in-form");
const form2 = document.querySelector(".sign-up-form");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

form1.addEventListener('Submit',function(dets){
    dets.preventDefault();
});

form2.addEventListener('Submit',function(det){
    det.preventDefault();
});











// Animate panel content when switching
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");

    // Add a quick fade-in effect to sign-up form
    form2.style.opacity = "0";
    setTimeout(() => {
        form2.style.opacity = "1";
        form2.style.transition = "opacity 0.6s ease-in-out";
    }, 200);
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");

    // Add a quick fade-in effect to sign-in form
    form1.style.opacity = "0";
    setTimeout(() => {
        form1.style.opacity = "1";
        form1.style.transition = "opacity 0.6s ease-in-out";
    }, 200);
});

// Small input animation when typing
document.querySelectorAll(".input-field input").forEach(input => {
    input.addEventListener("focus", () => {
        input.parentNode.style.transform = "scale(1.05)";
        input.parentNode.style.transition = "transform 0.3s ease";
    });
    input.addEventListener("blur", () => {
        input.parentNode.style.transform = "scale(1)";
    });
});
