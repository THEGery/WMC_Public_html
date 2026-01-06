function setupForm() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const successMessage = document.getElementById("successMessage");

    if (validateForm()) {
        successMessage.classList.remove("hidden");

        setTimeout(hideSuccessMessage, 3000);
    }
}

function hideSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", setupForm);

// Alternative version (shorter)

/* document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", event => {
        event.preventDefault();

        if(validateForm()) {
            successMessage.classList.remove("hidden");

            setTimeout(() => {
                successMessage.classList.add("hidden")
            }, 3000);
        }
    });
}); */


function validateForm() {
    const fName = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (fname === "") {
        alert("Name must be filled out!");
        return false;
    }

    if (lName == "") {
        alert("Name must be filled out!");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out!");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out!");
        return false;
    }

    return true;
}