
        document.addEventListener('DOMContentLoaded', function() {
            // --- Preloader ---
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                preloader.classList.add('hidden');
            });

            // --- Custom Cursor ---
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: 'forwards' });
            });

            document.querySelectorAll('a, button, input, textarea, [data-tilt]').forEach(el => {
                el.addEventListener('mouseover', () => cursorOutline.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
            });
            document.body.addEventListener('mouseleave', () => {
                cursorDot.classList.add('cursor-hidden');
                cursorOutline.classList.add('cursor-hidden');
            });
            document.body.addEventListener('mouseenter', () => {
                cursorDot.classList.remove('cursor-hidden');
                cursorOutline.classList.remove('cursor-hidden');
            });

            // --- Typing Effect ---
            new Typed('#typed-text', {
                strings: ['Front-End Developer', 'Web Enthusiast', 'Problem Solver'],
                typeSpeed: 70, backSpeed: 50, loop: true, cursorChar: '|', autoInsertCss: true,
            });

            // --- Mobile Menu Toggle ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuIcon = mobileMenuButton.querySelector('i');
            mobileMenuButton.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                mobileMenuIcon.classList.toggle('fa-bars', isHidden);
                mobileMenuIcon.classList.toggle('fa-times', !isHidden);
            });
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuIcon.classList.add('fa-bars');
                    mobileMenuIcon.classList.remove('fa-times');
                });
            });

            // --- Header Shadow on Scroll ---
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                header.classList.toggle('shadow-md', window.scrollY > 50);
            });
            
            // --- Active Nav Link Highlighting on Scroll ---
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 80) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('active');
                    }
                });
            });

            // --- Reveal Elements on Scroll ---
            const revealElements = document.querySelectorAll('.reveal');
            const reveal = () => {
                const windowHeight = window.innerHeight;
                revealElements.forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;
                    el.classList.toggle('active', elementTop < windowHeight - 150);
                });
            }
            window.addEventListener('scroll', reveal);
            reveal();

            // --- Back to Top Button ---
            const backToTopBtn = document.getElementById('back-to-top-btn');
            window.onscroll = () => {
                backToTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
            };
            backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

            // --- Particles.js Initialization ---
            particlesJS('particles-js', {
                "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#60a5fa" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#93c5fd", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } } }, "retina_detect": true
            });

            // --- Vanilla-Tilt.js Initialization ---
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                max: 15, speed: 400, glare: true, "max-glare": 0.1
            });
        });
    