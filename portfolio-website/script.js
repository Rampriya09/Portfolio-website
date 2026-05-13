// Dark Mode Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Simple Form Validation
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    if (!email.includes('@')) {
        statusMsg.style.color = "red";
        statusMsg.textContent = "Please enter a valid email.";
    } else {
        statusMsg.style.color = "green";
        statusMsg.textContent = "Message sent successfully!";
        contactForm.reset();
    }
});
