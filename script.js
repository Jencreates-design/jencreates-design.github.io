// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile nav after click
            const navLinks = document.getElementById('nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks && navToggle && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
