const navMenu = document.querySelector('.nav');
const gamburgerButton = document.querySelector('.page-header__button');
const closeMenuButton = document.querySelector('.nav__button');

navMenu.classList.remove('nav--nojs');
closeMenuButton.classList.remove('nav__button--hidden');

const openMenu = function() {
    navMenu.classList.remove('nav--hidden');
    navMenu.classList.add('nav--show');
}

const closeMenu = function() {
    navMenu.classList.remove('nav--show');
    navMenu.classList.add('nav--hidden');
}

gamburgerButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
