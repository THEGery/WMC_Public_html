const openLoginButton = document.querySelectorAll('[data-login-target]')
const closeLoginButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openLoginButton.forEach(button => {
    button.addEventListener('click', () => {
        const loginPopup = document.querySelector(button.dataset.loginTarget)
        openLoginWindow(loginPopup)
    })
})


closeLoginButton.forEach(button => {
    button.addEventListener('click', () => {
        const loginPopup = button.closest('loginPopup')
        closeLoginWindow(loginPopup)
    })
})


function openLoginWindow(loginPopup) {
    if (loginPopup == null) return;
    loginPopup.classList.add('active');
    overlay.classList.add('active');
}


function closeLoginWindow(loginPopup) {
    if (loginPopup == null) return;
    loginPopup.classList.remove('active');
    overlay.classList.remove('active');
}

// functionality for registration and login

/* function register() {
    fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            username: regUsername.value,
            password: regPassword.value
        })
    })
    .then(res => res.json())
    .then(data => MessageChannel.innerTest = data.message);
}
 */