const loginButton = document.getElementById("login-btn")
const loginPopup = document.getElementById("loginPopup")
const overlay = document.getElementById("overlay")
const closeButton = document.getElementById("close-btn")

function openPopup() {
    overlay.classList.add('active');
    loginPopup.classList.add('active');
}

function closePopup() {
    overlay.classList.remove('active');
    loginPopup.classList.remove('active');
}

//click to open
loginButton.addEventListener('click', openPopup);

//click to close
closeButton.addEventListener('click', closePopup);

//click outside popup to close
overlay.addEventListener('click', closePopup);


// image page horizontal scroll
const element = document.querySelector('.images-container');

element.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0 ) {
        event.preventDefault();
        element.scrollLeft += event.deltaY * 5;
    }
}, {passive: false});