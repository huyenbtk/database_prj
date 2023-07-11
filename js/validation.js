inputs = document.querySelectorAll(".form-control-group input");
submit = document.querySelector("#btn_submitForm");
msgList = document.querySelectorAll("small");
email = document.querySelector("#email");
password = document.querySelector("#password");
password_cf = document.querySelector("#password_cf");
function checkFilled(inputs) {
    let isFilled = true;
    inputs.forEach((input) => {
        input.value = input.value.trim();
        var parent = input.parentElement;
        var msg = parent.querySelector("small");
        if (!input.value) {
            isFilled = false;
            msg.innerText = "This field is required";
        } else msg.innerText = "";
    });
    return isFilled;
}
function checkEmail(email) {
    email.value = email.value.trim();
    let parent = email.parentElement;
    let msg = parent.querySelector("small");
    let isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
    if (!isValid) {
        msg.innerText = "Email is not valid";
    } else msg.innerText = "";
    console.log(isValid);
    return isValid;
}
function checkPassword(password) {
    password.value = password.value.trim();
    let parent = password.parentElement;
    let msg = parent.querySelector("small");
    if (password.value.length < 6) {
        msg.innerText = "Password must be at least 6 characters";
    } else msg.innerText = "";
}
function confirmPassword(password_cf) {
    password_cf.value = password_cf.value.trim();
    let parent = password_cf.parentElement;
    let msg = parent.querySelector("small");
    if (password_cf.value != password.value) {
        msg.innerText = "Password is not match";
    } else msg.innerText = "";
}
email.addEventListener("change", (e) => {
    checkEmail(e.target);
});
password.addEventListener("change", (e) => {
    checkPassword(e.target);
});
submit.addEventListener("click", (e) => {
    let isValid = checkFilled(inputs);
    isValid = checkEmail(email) && isValid;
    isValid = checkPassword(password) && isValid;
    isValid = confirmPassword(password_cf) && isValid;
    email.value = password.value = password_cf.value = "";
    if (isValid) {
        alert("Form is valid");
        console.log(isValid);
    } else {
        e.preventDefault();
    }
});