// Get the elements
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

// Toggle menu visibility on mobile
mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
