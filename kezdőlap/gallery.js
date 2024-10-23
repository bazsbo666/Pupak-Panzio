
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
    nameField.style.display = "none";
    title.innerHTML = "Bejelentkezés";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.display = "flex";
    title.innerHTML = "Regisztráció";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

const formBox = document.getElementById("formBox");
const openBtn = document.querySelector(".main-btn");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener('click', () => {
    formBox.style.display = 'none';
});

const bejelentkezesBtn = document.getElementById('bejelentkezesBtn');

bejelentkezesBtn.addEventListener('click', () => {
    formBox.style.display = 'block';
})