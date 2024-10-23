// Navbar toggle
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');
const getStartedBtn = document.getElementById('get-started');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');

    if (menulinks.classList.contains('active')) {
        getStartedBtn.style.display = 'none'; // Hide button when menu is open
    } else {
        getStartedBtn.style.display = 'block'; // Show button when menu is closed
    }
});

// Sign up modal
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
    nameField.style.display = "none";
    title.innerHTML = "Bejelentkezés";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.display = "flex";
    title.innerHTML = "Regisztráció";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};

// Modal items
const formBox = document.getElementById('formBox');
const openBtn = document.querySelector('.cta-button');  // Replace with the new button selector
const closeBtn = document.querySelector('.close-btn');

// Click event to open modal
openBtn.addEventListener('click', () => {
    formBox.style.display = 'block';
});

// Click event to close modal
closeBtn.addEventListener('click', () => {
    formBox.style.display = 'none';
});

// New code for "Bejelentkezés" button
const bejelentkezesBtn = document.getElementById('bejelentkezesBtn');

// Open the same modal when "Bejelentkezés" is clicked
bejelentkezesBtn.addEventListener('click', () => {
    formBox.style.display = 'block';  // Same modal is shown
});
