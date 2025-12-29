/**
 * Lakás Étterem - Interactive JavaScript
 * Handles navigation, scroll effects, form validation, and animations
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================

    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const reservationForm = document.getElementById('reservation-form');
    const revealElements = document.querySelectorAll('.reveal');

    // ========================================
    // Header Scroll Effect
    // ========================================

    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // ========================================
    // Mobile Navigation
    // ========================================

    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========================================
    // Reveal on Scroll Animation
    // ========================================

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }

    // Initial check for elements already in view
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll, { passive: true });

    // ========================================
    // Form Validation & Submission
    // ========================================

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\d\s\-\+\(\)]{6,}$/;
        return re.test(phone);
    }

    function showFormError(input, message) {
        // Remove existing error
        const existingError = input.parentNode.querySelector('.form__error');
        if (existingError) {
            existingError.remove();
        }

        // Add error styling and message
        input.style.borderColor = '#e74c3c';

        const errorDiv = document.createElement('div');
        errorDiv.className = 'form__error';
        errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.875rem; margin-top: 0.5rem;';
        errorDiv.textContent = message;

        input.parentNode.appendChild(errorDiv);
    }

    function clearFormError(input) {
        input.style.borderColor = '';
        const existingError = input.parentNode.querySelector('.form__error');
        if (existingError) {
            existingError.remove();
        }
    }

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = reservationForm.querySelector('#name');
            const email = reservationForm.querySelector('#email');
            const phone = reservationForm.querySelector('#phone');
            const date = reservationForm.querySelector('#date');
            const guests = reservationForm.querySelector('#guests');

            let isValid = true;

            // Clear previous errors
            [name, email, phone, date, guests].forEach(clearFormError);

            // Validate name
            if (!name.value.trim()) {
                showFormError(name, 'Kérjük, add meg a neved');
                isValid = false;
            }

            // Validate email
            if (!email.value.trim()) {
                showFormError(email, 'Kérjük, add meg az email címed');
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showFormError(email, 'Kérjük, adj meg egy érvényes email címet');
                isValid = false;
            }

            // Validate phone
            if (!phone.value.trim()) {
                showFormError(phone, 'Kérjük, add meg a telefonszámod');
                isValid = false;
            } else if (!validatePhone(phone.value)) {
                showFormError(phone, 'Kérjük, adj meg egy érvényes telefonszámot');
                isValid = false;
            }

            // Validate date
            if (!date.value) {
                showFormError(date, 'Kérjük, válassz dátumot');
                isValid = false;
            } else {
                const selectedDate = new Date(date.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                if (selectedDate < today) {
                    showFormError(date, 'A dátum nem lehet a múltban');
                    isValid = false;
                }
            }

            // Validate guests
            if (!guests.value) {
                showFormError(guests, 'Kérjük, add meg a vendégek számát');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                // For now, we'll show a success message

                const formData = {
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    date: date.value,
                    guests: guests.value,
                    message: reservationForm.querySelector('#message').value
                };

                console.log('Form submitted:', formData);

                // Show success message
                reservationForm.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 1rem;">
                            Köszönjük a foglalást!
                        </h3>
                        <p style="color: var(--color-text-light);">
                            Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken
                            a foglalás megerősítéséhez.
                        </p>
                    </div>
                `;
            }
        });

        // Real-time validation feedback
        const inputs = reservationForm.querySelectorAll('.form__input');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    clearFormError(input);
                }
            });
        });
    }

    // ========================================
    // Set minimum date for reservation
    // ========================================

    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const minDate = new Date(today.setDate(today.getDate() + 7)); // Minimum 1 week ahead
        dateInput.min = minDate.toISOString().split('T')[0];
    }

    // ========================================
    // Active Navigation Link on Scroll
    // ========================================

    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink, { passive: true });

})();
