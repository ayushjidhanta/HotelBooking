let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
let windowPosition = window.scrolly > 0;
header.classList.toggle('acctive', window.scrolly > 0)
})

hamburgerMenu.addEventListener('click', function () {
   header.classList.toggle('menu-open'); 
})

