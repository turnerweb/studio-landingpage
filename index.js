let overlay = document.querySelector('.mobile-nav-overlay');

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    overlay.classList.toggle('open-overlay');
})

document.querySelector('.mobile-nav-close').addEventListener('click', function() {
    overlay.classList.toggle('open-overlay');
})