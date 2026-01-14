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
                text1: 'Köszöntünk a Tradish lakásétteremben, ahol otthonos környezetben, lélekmelengető gasztronómiai élményekkel várunk! Ha vágysz a hazai ízekre, de elkerülnéd a merev éttermi hangulatot, nálunk egy ízlésesen kialakított, mégis barátságos környezetben élvezheted a kulináris kalandokat.',
                text2: 'Konyhánk a magyar gasztronómia öröksége előtt tiszteleg: az autentikus ízekhez, hozzávalókhoz ragaszkodva stílusos tálalásban álmodjuk újra hagyományos ételeinket. Elkötelezettek vagyunk a hazai kistermelők támogatása mellett, így közvetlenül a termelőktől származó alapanyagokkal dolgozunk.',
                text3: 'A főzés iránti szenvedélyem még gyermekként kezdődött nagymamám konyhájában, ahol az ízekről, mások vendégelátásának örömeiről tanultam. Hosszú út vezetett idáig, de végül megérkeztem oda, amiben igazán jól érzem magam. Szakácsként dolgozom évek óta, és a kistermelői piacok világából érkezve pontosan tudom, miből születik az igazi ízélmény. Itt ismerhettem meg azokat a magyar termelőket, akik szívvel-lélekkel készítik portékájukat. Lakáséttermünkben a tőlük származó, friss és egészséges alapanyagokat felhasználva készülnek ételeink, figyelembe véve a szezonális kínálatot, és különlegességeket.',
                text4: 'Tarts velünk ezen a hamisítatlan \'farm-to-table\' utazáson, hogy egy közös étkezéssel együtt ünnepeljük az ízeket, amelyek generációkat kötnek össze.',
                guests: 'vendég esténként',
                courses: 'fogásos menü',
                table: 'közös asztal',
                imageAlt: 'Séf munka közben'
            },
            menu: {
                subtitle: 'Kóstolj bele',
                title: 'Étlapunk',
                courses: {
                    coldStarter: 'Hideg előétel:',
                    starter: 'Előétel:',
                    soup: 'Leves:',
                    main: 'Főétel:',
                    dessert: 'Desszert:',
                    second: 'Második fogás:'
                },
                classics: {
                    subtitle: 'Klasszikus magyar fogások – tartalmas, gazdag ízek a kiváló minőségű fűszerpaprika jellegzetes színével és mélységével, változatos húsokkal, szezonális zöldségekkel és sűrű tejföllel.'
                },
                forest: {
                    subtitle: 'Erdők-Mezők Kincsei menüinkben a vadonból származó, kézzel válogatott természetes alapanyagok tiszta szépségét emeljük ki. Egyedülálló gasztronómiai utazásra hívunk, amelyet a természet örök változása és az évszakok ritmusa inspirál.'
                },
                sunday: {
                    subtitle: 'Magyarországon a vasárnapi ebéd szent családi rituálé. Több mint egy étkezés – ez az a pillanat, amikor a generációk összegyűlnek, és az otthoni főzés időtlen, megnyugtató ízei mellett újra kapcsolódnak egymáshoz. Ez a heti hagyomány a magyar vendégszeretet lényegét ragadja meg, lélekmelengető kulináris élményt kínálva, amely évtizedek óta gyakorlatilag változatlan.'
                },
                menu1: {
                    title: 'Magyar Klasszikusok I.',
                    price: '50 EUR/fő',
                    starter: 'tepertőkrém, füstölt sertésszűz, májpástétom, füstölt kolbász, pirítós',
                    soup: 'marhagulyás omlós hússal, kovászos kenyér',
                    main: 'tejfölös csirkepaprikás házi galuskával és kovászos uborkával',
                    dessert: 'mákos guba vaníliasodóval'
                },
                menu2: {
                    title: 'Magyar Klasszikusok II.',
                    price: '50 EUR/fő',
                    starter: 'lecsó variációk, pirítós',
                    soup: 'halászlé szürkeharcsa filével, kovászos kenyér',
                    main: 'töltött káposzta (kétféle módon), kovászos kenyér',
                    dessert: 'túrógombóc pirított zsemlemorzsában, édes tejföllel'
                },
                menu3: {
                    title: 'Erdők-Mezők Kincsei I.',
                    price: '70 EUR/fő',
                    starter: 'tepertőkrém, füstölt libamell, libamáj pástétom, füstölt fürjtojás, savanyított erdei gomba, pirítós',
                    soup: 'csicsókakrémleves füstös paprikaszósszal, csicsókachips-szel és krutonnal',
                    main: 'szarvasragu zsályával és vargányával, karamellizált cékla, meggyecet, cukorborsó, burgonyapüré, savanyított vöröskáposzta',
                    dessert: 'könnyű, rumos gesztenyemousse, ropogós pirított fenyőmag, fanyar csipkebogyó-zselé, étcsokoládé morzsa'
                },
                menu4: {
                    title: 'Erdők-Mezők Kincsei II.',
                    price: '70 EUR/fő',
                    starter: 'sült cékla szeletek (sárga és vörös), morzsolt krémes kecskesajt, pirított napraforgó magos-zöldfűszeres pesto, erdeibogyós mártás',
                    soup: 'erdei gomba krémleves fűszeres krémsajttal töltött kucsmagombával, snidlingolaj',
                    main: 'lassan párolt vaddisznó, bodzás szósz, medvehagymás burgonya, mézzel glazírozott sárgarépa és cékla, savanyított gomba',
                    dessert: 'bodzavirág posset csipkebogyó veloutéval'
                },
                menu5: {
                    title: 'Hagyományos Vasárnapi Ebéd',
                    price: '50 EUR/fő',
                    soup: 'húsleves házi tésztával',
                    second: 'hús, zöldség és borsodi töltike a levesből',
                    main: 'vasárnapi sült tál: rántott hús, petrezselymes burgonya, uborkasaláta',
                    dessert: 'nagymama almás pitéje vaníliakrémmel'
                },
                note: 'A menü tartalmaz egy welcome pálinkát, 1 pohár bort és 1 liter ásványvizet.'
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
                img12: 'Élmény az asztalnál',
                img13: 'Galéria kép',
                img14: 'Galéria kép',
                img15: 'Galéria kép',
                img16: 'Galéria kép',
                img17: 'Galéria kép',
                img18: 'Galéria kép',
                img19: 'Galéria kép',
                img20: 'Galéria kép',
                img21: 'Galéria kép',
                img22: 'Galéria kép',
                img23: 'Galéria kép',
                img24: 'Galéria kép',
                img25: 'Galéria kép',
                img26: 'Galéria kép',
                img27: 'Galéria kép'
            },
            reservation: {
                subtitle: 'Foglalás',
                title: 'Foglalási Információk',
                groupTitle: 'Csoportméret',
                groupText: 'Az otthonunk intim hangulatának megőrzése érdekében 6-12 fős csoportokat fogadunk.',
                menuTitle: 'Menüválasztás',
                menuText: 'A legfrissebb "piacról az asztalra" élmény érdekében kérjük, hogy egy alkalomra az egész csoport egyetlen menüt válasszon.',
                availabilityTitle: 'Nyitvatartás',
                availabilityText: 'Kedd, szerda, csütörtök, péntek és vasárnap fogadunk foglalásokat.',
                timesTitle: 'Étkezési Időpontok',
                timesIntro: 'Két időpontot kínálunk az Ön igényeihez igazodva:',
                lunch: 'Ebéd',
                dinner: 'Vacsora',
                bookingTitle: 'Foglalás Menete',
                bookingText1: 'Mivel minden fogást a nálunk asztalt foglaló vendégek számához igazítva, frissen készítünk el, kérjük, érdeklődj előre a szabad időpontokról. Kérjük, foglalásnál add meg a választott időpontot, a vendégek számát és a preferált menüsort.',
                bookingText2: 'Javasoljuk, hogy legalább egy héttel az érkezésed előtt keress meg minket: ez garantálja, hogy séfünk a legfrissebb, legszebb portékákat válogathassa össze a helyi termelőktől.',
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
                text1: 'Welcome to Tradish apartment restaurant, where the warmth of a private home meets a refined yet soulful dining experience. Our concept invites you to step away from the formality of traditional eateries into a curated living space designed for connection and culinary discovery. We specialize in authentic Hungarian comfort food presented with a stylish, modern flair. Each evening, we celebrate the vibrant heritage of our cuisine by using the freshest ingredients sourced directly from the growers.',
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
                    subtitle: 'Our Forest & Meadow Treasures menus highlight the pure beauty of hand-picked natural ingredients from the wild. We invite you on a unique gastronomic journey inspired by the eternal changes of nature and the rhythm of the seasons.'
                },
                sunday: {
                    subtitle: 'In Hungary, Sunday lunch is a sacred family ritual. More than just a meal, it is a cherished moment for generations to gather and reconnect over the timeless, comforting flavors of home-style cooking. This weekly tradition captures the essence of Hungarian hospitality, offering a soul-warming culinary experience that has remained virtually unchanged for decades.'
                },
                menu1: {
                    title: 'Hungarian Classics I.',
                    price: 'EUR 50/person',
                    starter: 'crackling spread, smoked pork tenderloin, liver pâté, smoked sausage, toast',
                    soup: 'slow cooked beef goulash, sourdough bread',
                    main: 'creamy chicken paprikash with homemade dumplings and pickled cucumber',
                    dessert: 'poppy seed bread pudding with vanilla custard'
                },
                menu2: {
                    title: 'Hungarian Classics II.',
                    price: 'EUR 50/person',
                    starter: 'lecsó variations (Hungarian ratatouille), toast',
                    soup: 'Hungarian fisherman\'s soup with wels catfish fillet, sourdough bread',
                    main: 'stuffed cabbage (two different styles), sourdough bread',
                    dessert: 'cottage cheese dumplings coated in toasted breadcrumbs, sweetened sour cream'
                },
                menu3: {
                    title: 'Forest & Meadow Treasures I.',
                    price: 'EUR 70/person',
                    starter: 'crackling spread, smoked goose breast, goose liver pâté, boiled-smoked quail egg, pickled forest mushrooms, toast',
                    soup: 'sunchoke cream soup with smoky paprika sauce, sunchoke chips, and croutons',
                    main: 'venison stew with sage and porcini mushrooms, caramelized beets, sour cherry vinegar, sugar snap peas, mashed potatoes, fermented red cabbage',
                    dessert: 'light rum-infused chestnut mousse, crunchy toasted pine nut, rosehip jelly, and dark chocolate soil'
                },
                menu4: {
                    title: 'Forest & Meadow Treasures II.',
                    price: 'EUR 70/person',
                    coldStarter: 'smoked wild boar, walnut herb pesto, horseradish cream, pickled mushrooms, toast',
                    starter: 'roasted beetroot slices (golden and red), crumbled creamy goat cheese, toasted sunflower seed and herb pesto, forest berry coulis',
                    soup: 'forest mushroom cream soup with herbed cream cheese stuffed morel, chive oil',
                    main: 'slow-braised wild boar, elderberry jus, wild garlic potato, honey glazed carrots and beetroot, pickled mushrooms',
                    dessert: 'elderflower posset with rosehip velouté'
                },
                menu5: {
                    title: 'Traditional Hungarian Sunday Lunch',
                    price: 'EUR 50/person',
                    soup: 'Hungarian meat broth, hand made pasta',
                    second: 'meat, vegetables and Borsod-style stuffing from the broth',
                    main: 'Sunday roast platter: golden-brown breaded chicken and pork cutlet, parsley potato, Hungarian cucumber salad',
                    dessert: 'granny\'s apple pie, vanilla custard'
                },
                note: 'The menu includes a welcome drink (Palinka), a glass of wine, and a bottle of water (1l).'
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
                img12: 'Experience at the table',
                img13: 'Gallery image',
                img14: 'Gallery image',
                img15: 'Gallery image',
                img16: 'Gallery image',
                img17: 'Gallery image',
                img18: 'Gallery image',
                img19: 'Gallery image',
                img20: 'Gallery image',
                img21: 'Gallery image',
                img22: 'Gallery image',
                img23: 'Gallery image',
                img24: 'Gallery image',
                img25: 'Gallery image',
                img26: 'Gallery image',
                img27: 'Gallery image'
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
