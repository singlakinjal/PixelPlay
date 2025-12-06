let emailInput = document.getElementById("useremail");
let passwordInput = document.getElementById("password");

let msg = document.getElementById("login-message");
let btn = document.getElementById("btn");

btn.onclick = function () {
    let email = emailInput.value;
    let pass = passwordInput.value;

    if (email === "" || pass === "") {
        msg.innerText = "Fill all fields.";
    } else if (!email.includes("@")) { 
        msg.innerText = "Enter a valid email."; 
    } else if (email === "kinjal.s25699@nst.rishihood.edu.in" && pass==="kinjalsingla"){
         msg.innerHTML = "Login Successful"
         alert("You have successfully logged in!");

    }
    else {
        msg.innerText = "Invalid Email or Password";}
};

