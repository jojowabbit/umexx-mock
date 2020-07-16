import AOS from 'aos';
import 'aos/dist/aos.css';
import Siema from 'siema';



import '../sass/main.scss';
const servicesCarousel = new Siema({
    selector: '.siema',
    duration: 400,
    easing: 'ease',
    loop: true,
    onInit: () => {},
});

const servNext = document.querySelectorAll('.next');
const servPrev = document.querySelectorAll('.prev');
servNext.forEach((next) => next.addEventListener('click', () => servicesCarousel.next()));
servPrev.forEach((prev) => prev.addEventListener('click', () => servicesCarousel.prev()));
//servPrev.addEventListener('click', () => servicesCarousel.prev());

// Nav Bar
const toggleMenu = document.querySelector('.nav__toggle-menu');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.nav__logo');


toggleMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navList.classList.toggle('nav-active')
    nav.classList.toggle('nav-active')
    if(navList.classList.contains('nav-active')) {
        toggleMenu.innerHTML = 'Close';
    } else {
        toggleMenu.innerHTML = 'Menu';
    }
});

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
    toggleMenu.classList.toggle('scrolling-active', windowPosition);
    navLogo.classList.toggle('scrolling-active', windowPosition);
    navList.classList.toggle('scrolling-active', windowPosition);
})

AOS.init({
    offset: 200,
    delay: 300,
    duration: 800,
    mirror: false,
    once: true
});

