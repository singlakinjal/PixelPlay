let emailInput = document.getElementById("email");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let confirmInput = document.getElementById("confirm-password");
let msg = document.getElementById("signup-message");
let btn = document.getElementById("btn");

btn.onclick = function () {
    let email = emailInput.value;
    let username = usernameInput.value;
    let pass = passwordInput.value;
    let confirmpass = confirmInput.value;

    if (email === "" || username === "" || pass === "" || confirmpass === "") {
        msg.innerText = "Fill all fields.";
    } else if (!email.includes("@")) { 
        msg.innerText = "Enter a valid email."; 
    }
    else if (pass !== confirmpass) {
        msg.innerText = "Passwords do not match.";
    } else {
        msg.innerText = "You have successfully signed up!";
        alert("You have successfully signed up!");
    }
};

