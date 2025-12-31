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
                gallery: 'Galéria',
                reservation: 'Foglalás',
                contact: 'Kapcsolat'
            },
            hero: {
                description: 'Ahol a hagyomány és az ízek találkoznak. Tíz vendég. Egy asztal. Felejthetetlen élmény.',
                scroll: 'Görgess'
            },
            about: {
                subtitle: 'A mi történetünk',
                title: 'Bemutatkozás',
                text1: 'Üdvözöljük a Tradish lakáséttermében, ahol az otthon melege találkozik a kifinomult, mégis lélekmelengető gasztronómiai élménnyel. Koncepciónk arra hív, hogy hagyja maga mögött a hagyományos éttermek formalitását, és lépjen be egy gondosan kialakított lakótérbe, amelyet a kapcsolódás és a kulináris felfedezés jegyében terveztünk. Autentikus magyar comfort food-ra specializálódtunk, stílusos, modern csavarral tálalva. Minden este konyhaművészetünk élénk örökségét ünnepeljük a legfrissebb, közvetlenül a termelőktől származó alapanyagokkal.',
                text2: 'Az én utam gyermekként kezdődött, amikor nagymamám mellett főzve tanultam meg az ízek titkait és mások megvendégelésének örömét. A főzés szeretete végül arra vezetett, hogy éveket töltsek helyi termelői piacokon séfként, ahol elsajátítottam a művészetét annak, hogyan építsek menüket az adott évszak legjobb terményeiből.',
                text3: 'Ma a munkám ezeknek a gyökereknek az emléke, a hagyományos magyar ételekre összpontosítva, amelyeket stílusos, kortárs csavarral szeretek tálalni. Hiszem, hogy az étel akkor a legértékesebb, ha pontosan tudjuk, honnan származik, ezért ma is közvetlenül azoktól a termelőktől szerzem be az alapanyagokat, akikkel partnerkapcsolatot építettem ki.',
                text4: 'Nyugodt, közösségi légkört kínálok, ahol az asztal a kapcsolódás és a mesélés helye. Minden részlet, a hangulatos gyertyafénytől a modern tálalásig, arra szolgál, hogy tisztelt barátnak érezze magát. Meghívom, hogy csatlakozzon hozzám, és tapasztalja meg az igazi farm-to-table utazást. Várom Önt és barátait, hogy megosszunk egy étkezést, amely generációkat köt össze.',
                guests: 'vendég esténként',
                courses: 'fogásos menü',
                table: 'közös asztal',
                imageAlt: 'Séf munka közben'
            },
            menu: {
                subtitle: 'Kóstolj bele',
                title: 'Az Étlapunk',
                courses: {
                    coldStarter: 'Hideg előétel:',
                    starter: 'Előétel:',
                    soup: 'Leves:',
                    main: 'Főétel:',
                    dessert: 'Desszert:',
                    second: 'Második fogás:'
                },
                classics: {
                    subtitle: 'Klasszikus magyar fogások – tartalmas, gazdag ízek a kiváló minőségű pirospaprika jellegzetes színével és mélységével, változatos húsokkal, szezonális zöldségekkel és sűrű tejföllel.'
                },
                forest: {
                    subtitle: 'Fedezd fel a vadon kulináris utazását az Erdő & Mező válogatásunkkal, helyi tájakról származó, kézzel szedett alapanyagokkal. Menüink az erdő és a mező egyszerű szépségét emelik ki, egyedülálló étkezési élményt kínálva a természet változó ritmusai által inspirálva.'
                },
                sunday: {
                    subtitle: 'Magyarországon a vasárnapi ebéd szent családi rituálé. Több mint egy étkezés – ez az a pillanat, amikor a generációk összegyűlnek, és az otthoni főzés időtlen, megnyugtató ízei mellett újra kapcsolódnak egymáshoz. Ez a heti hagyomány a magyar vendégszeretet lényegét ragadja meg, lélekmelengető kulináris élményt kínálva, amely évtizedek óta gyakorlatilag változatlan.'
                },
                menu1: {
                    title: 'Magyar Klasszikusok I.',
                    price: '50 EUR/fő',
                    starter: 'tepertőkrém, füstölt sertésszűz, májpástétom, füstölt kolbász, pirítós',
                    soup: 'lassan főtt marhapörkölt, kovászos kenyér',
                    main: 'autentikus tejfölös csirkepaprikás házi galuskával és kovászos uborkával',
                    dessert: 'mákos guba vaníliakrémmel'
                },
                menu2: {
                    title: 'Magyar Klasszikusok II.',
                    price: '50 EUR/fő',
                    starter: 'lecsó, pirítós',
                    soup: 'halászlé, kovászos kenyér',
                    main: 'töltött káposzta (kétféle módon), kovászos kenyér',
                    dessert: 'édes túrógombóc pirított zsemlemorzsában, édes tejföllel'
                },
                menu3: {
                    title: 'Erdő & Mező I.',
                    price: '70 EUR/fő',
                    starter: 'tepertőkrém, füstölt libamell, libamáj pástétom, füstölt fürjtojás, savanyított erdei gomba, pirítós',
                    soup: 'csicsókakrémleves füstös paprikaszósszal, csicsókachips-szel és krutonnal',
                    main: 'szarvasragu zsályával és vargányával, karamellizált cékla, meggyecet, cukorborsó, krumplipüré, savanyított vöröskáposzta',
                    dessert: 'édes citrusos túrópalacsinta meggyszósszal és tejszínhabbal'
                },
                menu4: {
                    title: 'Erdő & Mező II.',
                    price: '70 EUR/fő',
                    starter: 'füstölt vaddisznó karaj, diós vadgyógynövény pesto, tormakrém, savanyított bogyók',
                    soup: 'erdei gomba krémleves fűszeres krémsajttal töltött kucsmagombával, snidlingolajos',
                    main: 'lassan párolt vaddisznó, bodzás szósz, medvehagymás burgonya, mézzel glazírozott sárgarépa és cékla, savanyított gomba',
                    dessert: 'bodzavirág panacotta csipkebogyó veloutéval'
                },
                menu5: {
                    title: 'Hagyományos Vasárnapi Ebéd',
                    price: '50 EUR/fő',
                    soup: 'húsleves házi tésztával',
                    second: 'hús, zöldség és borsodi töltött a levesből',
                    main: 'vasárnapi sült tál: bécsi szelet, petrezselymes burgonya, uborkasaláta',
                    dessert: 'nagymama almás pitéje vaníliakrémmel'
                },
                note: 'A menük tartalmazzák az üdvözlőitalt, 2 pohár bort (2x1 dl) és 1 liter ásványvizet.'
            },
            gallery: {
                subtitle: 'Pillanatok',
                title: 'Galéria',
                intro: 'Betekintés a Tradish világába',
                img1: 'Séfünk',
                img2: 'Elegáns teríték',
                img3: 'Asztali részletek',
                img4: 'Közös asztal',
                img5: 'Szalvéta részlet',
                img6: 'Terített asztal',
                img7: 'Ünnepi előétel',
                img8: 'Terrine közelről',
                img9: 'Krémleves',
                img10: 'Intim hangulat',
                img11: 'Vacsora hangulat',
                img12: 'Élmény az asztalnál'
            },
            reservation: {
                subtitle: 'Foglalás',
                title: 'Foglalási Információk',
                groupTitle: 'Csoportméret',
                groupText: 'Az otthonunk intim hangulatának megőrzése érdekében 6-12 fős csoportokat fogadunk.',
                menuTitle: 'Menüválasztás',
                menuText: 'A legfrissebb piacról az asztalra élmény érdekében kérjük, hogy az egész csoport egyetlen menüt válasszon az alkalomra.',
                availabilityTitle: 'Nyitvatartás',
                availabilityText: 'Kedd, szerda, csütörtök, péntek és vasárnap fogadunk foglalásokat.',
                timesTitle: 'Étkezési Időpontok',
                timesIntro: 'Két időpontot kínálunk az Ön igényeihez igazodva:',
                lunch: 'Ebéd',
                dinner: 'Vacsora',
                bookingTitle: 'Foglalás Menete',
                bookingText1: 'Mivel az alapanyagokat a visszaigazolt vendégek alapján készítjük elő, kérjük, előre érdeklődjön a kívánt időpont elérhetőségéről. Foglalja le helyét közvetlenül nálunk, megadva a csoportlétszámot és a választott menüt.',
                bookingText2: 'A legjobb élmény érdekében javasoljuk, hogy legalább egy héttel előre foglaljon, hogy séfünk be tudja szerezni a legfinomabb alapanyagokat a következő piaci napról.',
                cta: 'Foglaljon Helyet'
            },
            contact: {
                subtitle: 'Találj meg minket',
                title: 'Kapcsolat',
                district: 'VII. kerület'
            },
            footer: {
                copyright: '© 2024 Tradish. Minden jog fenntartva.'
            }
        },
        en: {
            nav: {
                about: 'About',
                menu: 'Menu',
                gallery: 'Gallery',
                reservation: 'Reservation',
                contact: 'Contact'
            },
            hero: {
                description: 'Where tradition meets the dish. Ten guests. One table. An unforgettable experience.',
                scroll: 'Scroll'
            },
            about: {
                subtitle: 'Our Story',
                title: 'Introduction',
                text1: 'Welcome to Tradish apartment restaurant, where the warmth of a private home meets a refined yet soulful dining experience. Our concept invites you to step away from the formality of traditional eateries and into a curated living space designed for connection and culinary discovery. We specialize in authentic Hungarian comfort food presented with a stylish, modern flair. Each evening, we celebrate the vibrant heritage of our cuisine by using the freshest ingredients sourced directly from the growers.',
                text2: 'My journey began as a child, learning the secrets of flavors and the joy of feeding others while cooking alongside my grandmother. The love of cooking eventually led me to spend years at local farmers\' markets as a chef, where I mastered the art of building menus around the very best of each season\'s harvest.',
                text3: 'Today, my work is a tribute to those roots, focusing on traditional Hungarian meals that I love to present with a stylish, contemporary flair. I believe that food is most meaningful when you know exactly where it comes from, which is why I still source my ingredients directly from the growers I\'ve partnered with.',
                text4: 'I offer a relaxed, communal atmosphere where the table is a place for connection and storytelling. Every detail, from the ambient candlelight to the modern plating, is designed to make you feel like an honored friend. I invite you to join me and experience a true farm-to-table journey. I look forward to welcoming you and your friends sharing a meal that bridges generations.',
                guests: 'guests per evening',
                courses: 'course menu',
                table: 'shared table',
                imageAlt: 'Chef at work'
            },
            menu: {
                subtitle: 'Have a Taste',
                title: 'Our Menu',
                courses: {
                    coldStarter: 'Cold Starter:',
                    starter: 'Starter:',
                    soup: 'Soup:',
                    main: 'Main Course:',
                    dessert: 'Dessert:',
                    second: '2nd Course:'
                },
                classics: {
                    subtitle: 'Classic Hungarian courses - hearty, rich flavours with the characteristic color and depth of high quality paprika spice, a variety of meats, seasonal vegetables, and thick sour cream.'
                },
                forest: {
                    subtitle: 'Experience a culinary journey through the wild with our Forest & Meadow selection, featuring hand-picked ingredients sourced from local landscapes. These menus highlight the simple beauty of forest and field, offering a unique dining experience inspired by the changing rhythms of nature.'
                },
                sunday: {
                    subtitle: 'In Hungary, Sunday lunch is a sacred family ritual. More than just a meal, it is a cherished moment for generations to gather and reconnect over the timeless, comforting flavors of home-style cooking. This weekly tradition captures the essence of Hungarian hospitality, offering a soul-warming culinary experience that has remained virtually unchanged for decades.'
                },
                menu1: {
                    title: 'Hungarian Classics I.',
                    price: 'EUR 50/person',
                    starter: 'crackling spread, smoked pork tenderloin, liver pâté, smoked sausage, toast',
                    soup: 'slow cooked beef goulash, sourdough bread',
                    main: 'authentic creamy chicken paprikash with homemade dumplings and pickled cucumber',
                    dessert: 'poppy seed bread pudding with vanilla custard'
                },
                menu2: {
                    title: 'Hungarian Classics II.',
                    price: 'EUR 50/person',
                    starter: 'lecsó (Hungarian ratatouille), toast',
                    soup: 'Hungarian fisherman\'s soup, sourdough bread',
                    main: 'stuffed cabbage (two different styles), sourdough bread',
                    dessert: 'sweet cottage cheese dumplings coated in toasted breadcrumbs, sweetened sour cream'
                },
                menu3: {
                    title: 'Forest & Meadow Delights I.',
                    price: 'EUR 70/person',
                    starter: 'crackling spread, smoked goose breast, goose liver pâté, boiled-smoked quail egg, pickled forest mushrooms, toast',
                    soup: 'sunchoke cream soup with smoky paprika sauce, sunchoke chips, and croutons',
                    main: 'venison stew with sage and porcini mushrooms, caramelized beets, sour cherry vinegar, sugar snap peas, mashed potatoes, fermented red cabbage',
                    dessert: 'sweet and citrusy cottage cheese crêpes with sour cherry sauce and whipped cream'
                },
                menu4: {
                    title: 'Forest & Meadow Delights II.',
                    price: 'EUR 70/person',
                    starter: 'smoked boar loin, walnut & wild herb pesto, horseradish cream, pickled berries',
                    soup: 'forest mushroom cream soup with herbed cream cheese stuffed morel, chive oil',
                    main: 'slow-braised wild boar, elderberry jus, wild garlic potato, honey glazed carrots and beetroot, pickled mushrooms',
                    dessert: 'elderflower posset with rosehip velouté'
                },
                menu5: {
                    title: 'Traditional Hungarian Sunday Lunch',
                    price: 'EUR 50/person',
                    soup: 'Hungarian meat broth, hand made pasta',
                    second: 'meat, vegetables and Borsod-style stuffing from the broth',
                    main: 'Sunday roast platter: wiener schnitzel, parsley potato, cucumber salad',
                    dessert: 'granny\'s apple pie, vanilla custard'
                },
                note: 'The menus include a welcome drink, 2 glasses of wine (2x1 dl), and a bottle of water (1l).'
            },
            gallery: {
                subtitle: 'Moments',
                title: 'Gallery',
                intro: 'A glimpse into the world of Tradish',
                img1: 'Our Chef',
                img2: 'Elegant setting',
                img3: 'Table details',
                img4: 'Shared table',
                img5: 'Napkin details',
                img6: 'Table setting',
                img7: 'Festive appetizer',
                img8: 'Terrine close-up',
                img9: 'Cream soup',
                img10: 'Intimate ambiance',
                img11: 'Dinner atmosphere',
                img12: 'Experience at the table'
            },
            reservation: {
                subtitle: 'Booking',
                title: 'Reservation Details',
                groupTitle: 'Group Size',
                groupText: 'To maintain the intimate atmosphere of our home, we welcome groups of 6 to 12 guests.',
                menuTitle: 'Menu Selection',
                menuText: 'To ensure the freshest market-to-table experience, we ask that your entire group chooses one single menu for the occasion.',
                availabilityTitle: 'Availability',
                availabilityText: 'We are open for bookings on Tuesday, Wednesday, Thursday, Friday, and Sunday.',
                timesTitle: 'Dining Times',
                timesIntro: 'We offer two distinct sittings to fit your schedule:',
                lunch: 'Lunch',
                dinner: 'Dinner',
                bookingTitle: 'How to Book',
                bookingText1: 'As we prepare our ingredients based on confirmed guests, please reach out in advance to check availability for your preferred date. You can Reserve Your Spot by contacting us directly with your group size and chosen menu.',
                bookingText2: 'For the best experience, we recommend booking at least one week in advance to allow our chef to source the finest ingredients from the upcoming market day.',
                cta: 'Reserve Your Spot'
            },
            contact: {
                subtitle: 'Find Us',
                title: 'Contact',
                district: 'District VII'
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

    // ========================================
    // Lightbox Gallery
    // ========================================

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery__item');

    let currentIndex = 0;
    const galleryImages = [];

    // Build gallery images array
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery__caption');
        galleryImages.push({
            src: img.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200'),
            caption: caption ? caption.textContent : ''
        });

        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        const item = galleryItems[currentIndex];
        const caption = item.querySelector('.gallery__caption');

        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxImage.alt = caption ? caption.textContent : '';
        lightboxCaption.textContent = caption ? caption.textContent : '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    if (lightbox) {
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrev);
        lightboxNext.addEventListener('click', showNext);

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrev();
                    break;
                case 'ArrowRight':
                    showNext();
                    break;
            }
        });
    }

})();
