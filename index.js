// hamburger icon 
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
// event listener for hamburger icon 
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});