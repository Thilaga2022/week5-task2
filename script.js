var nameInput = document.getElementById("name");
var passwordInput = document.getElementById("pw");
var repwInput = document.getElementById("repw");
var verify = document.getElementById("btn");
var nameErr = document.getElementById("nameError");
var pwerr = document.getElementById("pwError");
var rePwerror = document.getElementById("rePwerror");

verify.addEventListener("click", function () {
    
    

    // Get input values
    let name = nameInput.value.trim();
    let password = passwordInput.value.trim();
    let repassword = repwInput.value.trim();

    // Regex for name and password
    var nameRegex = /^[A-Za-z]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let valid = true;

    // Validate Name
    if (nameRegex.test(name)) {
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "block";
        nameErr.innerHTML = "Mandatory and Texts Only Allowed";
        valid = false;
    }

    // Validate Password
    if (passwordRegex.test(password)) {
        pwerr.style.display = "none";
    } else {
        pwerr.style.display = "block";
        pwerr.innerHTML = "Mandatory & should contain min 8 characters";
        valid = false;
    }

    // Confirm Password
    if (password !== repassword) {
        rePwerror.style.display = "block";
        rePwerror.innerHTML = "Password Doesn't Match!";
        valid = false;
    } else {
        rePwerror.style.display = "none";
    }

    // Clear fields if all validations pass
    if (valid) {
        alert("Form submitted successfully!");
        nameInput.value = "";
        passwordInput.value = "";
        repwInput.value = "";
        rePwerror.style.display = "none";
        
    }
});

function togglePassword() {
    
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  }
  function toggleRePassword() {
    
    const type = repwInput.getAttribute("type") === "password" ? "text" : "password";
    repwInput.setAttribute("type", type);
  }
