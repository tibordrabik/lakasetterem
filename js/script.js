/**
 * Tradish - Interactive JavaScript
 * Handles navigation, scroll effects, animations, and translations
 */

(function() {
    'use strict';

    // ========================================
    // Translations
    // ========================================

    const translations = {
        hu: {
            nav: {
                about: 'Rólunk',
                menu: 'Étlap',
                contact: 'Kapcsolat'
            },
            hero: {
                subtitle: 'Budapest VII. kerület',
                description: 'Ahol a hagyomány és az ízek találkoznak. Tíz vendég. Egy asztal. Felejthetetlen élmény.',
                scroll: 'Görgess'
            },
            about: {
                subtitle: 'A mi történetünk',
                title: 'A Főzés Művészete',
                text1: 'A Tradish több mint egy étterem – ez egy élmény. A pesti zsidónegyed szívében, egy gondosan felújított századfordulós lakásban várjuk vendégeinket egy olyan vacsorára, amely összeköti Budapest gazdag kulináris örökségét a modern gasztronómia finesszével.',
                text2: 'Séfünk filozófiája egyszerű: a legjobb alapanyagok, a legfrissebb szezonális termékek, és a hagyományok tisztelete. Minden este egyetlen menüt kínálunk, amely a piac aznapi kincseiből születik.',
                guests: 'vendég esténként',
                courses: 'fogásos menü',
                table: 'közös asztal',
                imageAlt: 'Séf munka közben'
            },
            menu: {
                subtitle: 'Kóstolj bele',
                title: 'Az Étlapunk',
                intro: 'Menünk hetente változik a szezonális alapanyagok függvényében. Íme néhány kedvenc fogásunk:',
                dish1: {
                    title: 'Libamáj Terrine',
                    tag: 'Előétel',
                    desc: 'Tokaji aszúval készült zselével, pirított brioche-sal és füstölt sóval'
                },
                dish2: {
                    title: 'Mangalica Szűzérme',
                    tag: 'Főétel',
                    desc: 'Konfitált fokhagymával, erdei gombákkal és fekete szarvasgombás mártással'
                },
                dish3: {
                    title: 'Somlói Reimagined',
                    tag: 'Desszert',
                    desc: 'A klasszikus Somlói galuska modern értelmezése, bourbon vaníliával és rum habbal'
                },
                dish4: {
                    title: 'Balatoni Fogassüllő',
                    tag: 'Hal',
                    desc: 'Beurre blanc-nal, kapribogyóval és friss zöldfűszerekkel'
                },
                note: 'A teljes menüt és az aktuális borlapot érdeklődésre küldjük el.'
            },
            contact: {
                subtitle: 'Találj meg minket',
                title: 'Kapcsolat',
                district: 'VII. kerület',
                imageAlt: 'Elegáns éttermi környezet'
            },
            footer: {
                copyright: '© 2024 Tradish. Minden jog fenntartva.'
            }
        },
        en: {
            nav: {
                about: 'About',
                menu: 'Menu',
                contact: 'Contact'
            },
            hero: {
                subtitle: 'Budapest District VII',
                description: 'Where tradition meets the dish. Ten guests. One table. An unforgettable experience.',
                scroll: 'Scroll'
            },
            about: {
                subtitle: 'Our Story',
                title: 'The Art of Cooking',
                text1: 'Tradish is more than a restaurant – it\'s an experience. In the heart of the Jewish Quarter, within a carefully restored turn-of-the-century apartment, we invite guests to a dinner that bridges Budapest\'s rich culinary heritage with modern gastronomy.',
                text2: 'Our chef\'s philosophy is simple: the finest ingredients, the freshest seasonal produce, and respect for tradition. Each evening we offer a single menu, born from the day\'s market treasures.',
                guests: 'guests per evening',
                courses: 'course menu',
                table: 'shared table',
                imageAlt: 'Chef at work'
            },
            menu: {
                subtitle: 'Have a Taste',
                title: 'Our Menu',
                intro: 'Our menu changes weekly based on seasonal ingredients. Here are some of our favorite dishes:',
                dish1: {
                    title: 'Foie Gras Terrine',
                    tag: 'Starter',
                    desc: 'With Tokaji Aszú jelly, toasted brioche, and smoked salt'
                },
                dish2: {
                    title: 'Mangalica Tenderloin',
                    tag: 'Main',
                    desc: 'With confit garlic, wild mushrooms, and black truffle sauce'
                },
                dish3: {
                    title: 'Somlói Reimagined',
                    tag: 'Dessert',
                    desc: 'A modern interpretation of the classic Somlói sponge cake, with bourbon vanilla and rum foam'
                },
                dish4: {
                    title: 'Lake Balaton Pike-Perch',
                    tag: 'Fish',
                    desc: 'With beurre blanc, capers, and fresh herbs'
                },
                note: 'Full menu and current wine list available upon request.'
            },
            contact: {
                subtitle: 'Find Us',
                title: 'Contact',
                district: 'District VII',
                imageAlt: 'Elegant restaurant ambiance'
            },
            footer: {
                copyright: '© 2024 Tradish. All rights reserved.'
            }
        }
    };

    // ========================================
    // Language Switcher
    // ========================================

    let currentLang = localStorage.getItem('tradish-lang') || 'hu';

    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('tradish-lang', lang);
        document.documentElement.lang = lang;

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedValue(translations[lang], key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = getNestedValue(translations[lang], key);
            if (translation) {
                element.alt = translation;
            }
        });

        // Update active state on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(currentLang);

        // Set up language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.dataset.lang);
            });
        });
    });

    // ========================================
    // DOM Elements
    // ========================================

    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
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
