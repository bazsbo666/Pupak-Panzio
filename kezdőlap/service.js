

const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');
const getStartedBtn = document.getElementById('get-started');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');

    if (menulinks.classList.contains('active')) {
        getStartedBtn.style.display = 'none';
    } else {
        getStartedBtn.style.display = 'block';
    }
});

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


signupBtn.onclick = function() {
        nameField.style.display = "flex";
        title.innerHTML = "Regisztráció";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
}

signinBtn.onclick = function() {
    nameField.style.display = "none";
    title.innerHTML = "Bejelentkezés";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

// New code for "Bejelentkezés" button
const bejelentkezesBtn = document.getElementById('bejelentkezesBtn');

// Open the same modal when "Bejelentkezés" is clicked
bejelentkezesBtn.addEventListener('click', () => {
    formBox.style.display = 'block';  // Same modal is shown
});

const formBox = document.getElementById('formBox');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    formBox.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    formBox.style.display = 'block';
});


/* appointment click events */
function selectService(serviceName) {
    // Get the dropdown
    const dropdown = document.querySelector('select[name="category"]');
    
    // Set the value
    dropdown.value = serviceName;

    // Add animation class
    dropdown.classList.remove('highlight-select'); // Remove if already exists
    setTimeout(() => {
        dropdown.classList.add('highlight-select');
    }, 10);
    
    // Scroll to the form
    document.getElementById('appointment').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}