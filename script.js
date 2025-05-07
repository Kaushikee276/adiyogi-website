// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) { 
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn("Target section not found:", this.getAttribute('href'));
        }
    });
});