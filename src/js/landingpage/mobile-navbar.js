const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector(".menu-toggle")
const navLinks = document.querySelector('.nav-links')

//Alterna o menu no mobile
toggleButton.addEventListener('click',()=>{
        navLinks.classList.toggle('show')
})



window.addEventListener('scroll',()=>{
        if(window.scrollY > 50){
                navbar.classList.add('scrolled');
        }else{
                navbar.classList.remove('scrolled')
        }
})