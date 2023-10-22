function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const commentsError = document.getElementById("comments-error");
    const successMessage = document.getElementById("success");

    nameError.innerText = "";
    emailError.innerText = "";
    commentsError.innerText = "";
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    commentsInput.classList.remove("error-border");
    successMessage.innerText = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required";
        nameInput.classList.add("error-border");
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        isValid = false;
    }

    if (commentsInput.value.trim() === "") {
        commentsError.innerText = "Comments are required";
        commentsInput.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        successMessage.innerText = "Form submitted successfully!";
    }
}