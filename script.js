// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initializeHeader();
        });
});

function initializeHeader() {
    const navLinkNav = document.getElementById('nav-link-nav');
    const navMenu = document.getElementById('nav-menu');
    const navLinkAbout = document.getElementById('nav-link-about');

    // Функциональность "Навигация"
    navLinkNav.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Функциональность "О нас"
    navLinkAbout.addEventListener('click', function(e) {
        e.preventDefault();
        handleAboutUsClick();
    });

    // Скрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!navLinkNav.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.style.display = 'none';
        }
    });
}

function handleAboutUsClick() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#about-us';
    }
}
