// Seleção dos elementos
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');
const navList = document.querySelector('.nav-list');

// Exibir apenas o ícone de menu inicialmente
menuIcon.style.display = 'block';
closeIcon.style.display = 'none';

// Alternar menu
mobileMenu.addEventListener('click', () => {
    const isMenuOpen = overlay.classList.toggle('active');
    navList.classList.toggle('active');

    // Alternar visibilidade dos ícones
    if (isMenuOpen) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
        navList.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});
