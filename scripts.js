// Navigation Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Image Slider
const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if (prev && next) {
    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Contact Form Validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name.length < 2) {
            formMessage.textContent = 'Name must be at least 2 characters long.';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = 'Message must be at least 10 characters long.';
            return;
        }

        formMessage.style.color = 'green';
        formMessage.textContent = 'Message sent successfully!';
        form.reset();
    });
}