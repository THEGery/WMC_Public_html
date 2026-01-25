document.addEventListener("DOMContentLoaded", () => {   // Event = layout loaded
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", event => {  // event is genereated by the browser
        event.preventDefault(); // To not refresh page after submit pressed

        if(validateForm()) {
            successMessage.classList.remove("hidden");

            setTimeout(() => {
                successMessage.classList.add("hidden")
            }, 3000);
        }
    });
});


function validateForm() {
    const fname = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (fname === "") {
        alert("Name must be filled out!");
        return false;
    }

    if (lName === "") {
        alert("Name must be filled out!");
        return false;
    }

    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email must be filled out!");
        return false;
    } else if (!emailRegExp.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out!");
        return false;
    }

    return true;
}


// expanding message box
const textarea = document.getElementById('message')

function autoResize(element) {
    element.style.height = 'auto';
    const newHeight = Math.min(el.scrollHeight, 1000);

    element.style.height = Math.max(newHeight, 200) + 'px';

    if (el.scrollHeight > 1000) {
        element.style.overflowY = 'auto';
    } else {
        element.style.overflowY = 'hidden';
    }
}

textarea.addEventListener('input', () => autoResize(textarea));

autoResize(textarea);
