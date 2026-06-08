window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar-z');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});