
const menu = document.querySelector('.nav-list');
const overlay = document.querySelector(".overlay");
const mobileMenuButton = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener('click', () => {  // Corrigido "cklick" para "click"
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});