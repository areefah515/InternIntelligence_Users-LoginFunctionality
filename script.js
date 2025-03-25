// Form Validation
function validateForm(formId) {
    let form = document.getElementById(formId);
    let username = form.querySelector("input[name='username']").value.trim();
    let emailField = form.querySelector("input[name='email']");
    let email = emailField ? emailField.value.trim() : "";
    let password = form.querySelector("input[name='password']").value.trim();

    if (username === "" || password === "" || (emailField && email === "")) {
        alert("All fields are required!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    return true;
}
