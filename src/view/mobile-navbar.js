// Seleciona os elementos do DOM
const menu = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const mobileMenuButton = document.querySelector('.mobile-menu');

// Função para alternar o menu (abrir/fechar)
const toggleMenu = () => {
    const isActive = menu.classList.toggle('active');
    overlay.classList.toggle('active', isActive);
};

// Função para fechar o menu
const closeMenu = () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
};

// Adiciona eventos de clique
mobileMenuButton.addEventListener('click', toggleMenu); // Abre/fecha o menu
overlay.addEventListener('click', closeMenu); // Fecha o menu ao clicar no overlay