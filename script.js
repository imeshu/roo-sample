/* =========================================================
   ROO GEMSTONES & JEWELLERY
   HOME PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const introLoader = document.getElementById("introLoader");

    const siteHeader = document.getElementById("siteHeader");

    const menuToggle = document.getElementById("menuToggle");

    const mobileMenu = document.getElementById("mobileMenu");

    const heroSlides = document.querySelectorAll(".hero-slide");

    const heroDots = document.querySelectorAll(".hero-dot");

    const heroPrev = document.getElementById("heroPrev");

    const heroNext = document.getElementById("heroNext");

    const monthsTrack = document.getElementById("monthsTrack");



    /* =====================================================
       CINEMATIC INTRO
    ===================================================== */

    function handleIntro() {

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        if (prefersReducedMotion) {

            if (introLoader) {
                introLoader.remove();
            }

            return;
        }


        /*
         * Session storage means:
         * cinematic intro appears only once per browser session.
         */

        const hasSeenIntro =
            sessionStorage.getItem("rooIntroSeen");


        if (hasSeenIntro) {

            introLoader.classList.add("hide");

            setTimeout(() => {
                introLoader.remove();
            }, 900);

            return;
        }


        setTimeout(() => {

            introLoader.classList.add("hide");

            sessionStorage.setItem(
                "rooIntroSeen",
                "true"
            );

        }, 2200);


        setTimeout(() => {

            if (introLoader.parentNode) {
                introLoader.remove();
            }

        }, 3200);

    }

    handleIntro();



    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function updateHeader() {

        if (window.scrollY > 50) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMobileMenu() {

        mobileMenu.classList.add("active");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");

    }


    function closeMobileMenu() {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");

    }


    menuToggle.addEventListener(
        "click",
        () => {

            if (
                mobileMenu.classList.contains("active")
            ) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("active")
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =====================================================
       HERO SLIDER
    ===================================================== */

    let currentSlide = 0;

    let heroTimer;

    const heroDuration = 7000;


    function showHeroSlide(index) {

        if (index < 0) {
            index = heroSlides.length - 1;
        }

        if (index >= heroSlides.length) {
            index = 0;
        }


        heroSlides.forEach(
            slide => {
                slide.classList.remove("active");
            }
        );


        heroDots.forEach(
            dot => {
                dot.classList.remove("active");
            }
        );


        heroSlides[index]
            .classList
            .add("active");


        heroDots[index]
            .classList
            .add("active");


        currentSlide = index;

    }


    function nextHeroSlide() {

        showHeroSlide(currentSlide + 1);

    }


    function previousHeroSlide() {

        showHeroSlide(currentSlide - 1);

    }


    function startHeroAutoplay() {

        stopHeroAutoplay();

        heroTimer = setInterval(
            nextHeroSlide,
            heroDuration
        );

    }


    function stopHeroAutoplay() {

        if (heroTimer) {

            clearInterval(heroTimer);

        }

    }


    heroNext.addEventListener(
        "click",
        () => {

            nextHeroSlide();

            startHeroAutoplay();

        }
    );


    heroPrev.addEventListener(
        "click",
        () => {

            previousHeroSlide();

            startHeroAutoplay();

        }
    );


    heroDots.forEach(
        dot => {

            dot.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            dot.dataset.slide
                        );

                    showHeroSlide(index);

                    startHeroAutoplay();

                }
            );

        }
    );


    /*
     * Pause slider while mouse is over hero.
     */

    const hero =
        document.getElementById("hero");


    hero.addEventListener(
        "mouseenter",
        stopHeroAutoplay
    );


    hero.addEventListener(
        "mouseleave",
        startHeroAutoplay
    );


    /*
     * Swipe support for mobile.
     */

    let touchStartX = 0;

    let touchEndX = 0;


    hero.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    hero.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleHeroSwipe();

        },
        {
            passive: true
        }
    );


    function handleHeroSwipe() {

        const distance =
            touchStartX - touchEndX;


        if (Math.abs(distance) < 50) {
            return;
        }


        if (distance > 0) {

            nextHeroSlide();

        } else {

            previousHeroSlide();

        }


        startHeroAutoplay();

    }


    startHeroAutoplay();



    /* =====================================================
       BIRTHSTONE DATA
    ===================================================== */

    const birthstones = [

        {
            month: "January",
            number: "01",
            name: "Garnet",
            description:
                "Known for its rich colour and enduring character, garnet has long been associated with warmth, strength and timeless beauty.",
            image:
                "assets/birthstones/january-garnet.webp"
        },

        {
            month: "February",
            number: "02",
            name: "Amethyst",
            description:
                "Amethyst is celebrated for its violet colour, elegant depth and unmistakable presence.",
            image:
                "assets/birthstones/february-amethyst.webp"
        },

        {
            month: "March",
            number: "03",
            name: "Aquamarine",
            description:
                "Aquamarine captures the serene colour of clear tropical water with an elegant blue that feels naturally luminous.",
            image:
                "assets/birthstones/march-aquamarine.webp"
        },

        {
            month: "April",
            number: "04",
            name: "Diamond",
            description:
                "Diamond is admired for exceptional brilliance, purity and enduring elegance.",
            image:
                "assets/birthstones/april-diamond.webp"
        },

        {
            month: "May",
            number: "05",
            name: "Emerald",
            description:
                "Emerald is treasured for its vivid green colour, remarkable depth and unmistakable sense of luxury.",
            image:
                "assets/birthstones/may-emerald.webp"
        },

        {
            month: "June",
            number: "06",
            name: "Pearl",
            description:
                "Pearl offers a quiet, organic beauty with soft lustre and a naturally elegant character.",
            image:
                "assets/birthstones/june-pearl.webp"
        },

        {
            month: "July",
            number: "07",
            name: "Ruby",
            description:
                "Ruby is celebrated for passionate red colour, rarity and extraordinary visual intensity.",
            image:
                "assets/birthstones/july-ruby.webp"
        },

        {
            month: "August",
            number: "08",
            name: "Peridot",
            description:
                "Peridot brings a distinctive fresh green tone with a luminous character unlike almost any other gemstone.",
            image:
                "assets/birthstones/august-peridot.webp"
        },

        {
            month: "September",
            number: "09",
            name: "Sapphire",
            description:
                "Sapphire is one of Sri Lanka's most celebrated gemstones, admired for extraordinary colour, rarity and timeless character.",
            image:
                "assets/birthstones/september-sapphire.webp"
        },

        {
            month: "October",
            number: "10",
            name: "Tourmaline",
            description:
                "Known for an extraordinary range of colour, tourmaline is a gemstone filled with individuality, depth and natural character.",
            image:
                "assets/birthstones/october-tourmaline.png"
        },

        {
            month: "November",
            number: "11",
            name: "Topaz",
            description:
                "Topaz is admired for brilliant clarity and a beautiful spectrum of natural colour.",
            image:
                "assets/birthstones/november-topaz.webp"
        },

        {
            month: "December",
            number: "12",
            name: "Zircon",
            description:
                "Zircon is known for remarkable brilliance, vivid colour and an extraordinary natural history.",
            image:
                "assets/birthstones/december-zircon.webp"
        }

    ];



    /* =====================================================
       AUTO BIRTHSTONE MONTH
    ===================================================== */

    function setCurrentBirthstone() {

        const date =
            new Date();

        const monthIndex =
            date.getMonth();

        const stone =
            birthstones[monthIndex];


        const birthstoneMonth =
            document.getElementById(
                "birthstoneMonth"
            );

        const birthstoneName =
            document.getElementById(
                "birthstoneName"
            );

        const birthstoneDescription =
            document.getElementById(
                "birthstoneDescription"
            );

        const birthstoneImage =
            document.getElementById(
                "birthstoneImage"
            );

        const birthMonthNumber =
            document.getElementById(
                "birthMonthNumber"
            );

        const birthDetailMonth =
            document.getElementById(
                "birthDetailMonth"
            );

        const birthDetailStone =
            document.getElementById(
                "birthDetailStone"
            );

        const heroBirthMonth =
            document.getElementById(
                "heroBirthMonth"
            );

        const heroBirthDescription =
            document.getElementById(
                "heroBirthDescription"
            );


        if (birthstoneMonth) {
            birthstoneMonth.textContent =
                stone.month;
        }

        if (birthstoneName) {
            birthstoneName.textContent =
                stone.name;
        }

        if (birthstoneDescription) {
            birthstoneDescription.textContent =
                stone.description;
        }

        if (birthstoneImage) {

            birthstoneImage.src =
                stone.image;

            birthstoneImage.alt =
                `${stone.month} birthstone ${stone.name}`;

        }

        if (birthMonthNumber) {
            birthMonthNumber.textContent =
                stone.number;
        }

        if (birthDetailMonth) {
            birthDetailMonth.textContent =
                stone.month;
        }

        if (birthDetailStone) {
            birthDetailStone.textContent =
                stone.name;
        }

        if (heroBirthMonth) {
            heroBirthMonth.textContent =
                stone.month;
        }

        if (heroBirthDescription) {

            heroBirthDescription.textContent =
                `Discover ${stone.month}'s birthstone, ${stone.name}, and jewellery created around its natural beauty.`;

        }


        /*
         * Highlight current month
         */

        const monthLinks =
            document.querySelectorAll(
                ".months-track a"
            );


        monthLinks.forEach(link => {

            link.classList.remove(
                "current-month"
            );


            if (
                Number(
                    link.dataset.month
                ) === monthIndex
            ) {

                link.classList.add(
                    "current-month"
                );

            }

        });


        /*
         * Mobile:
         * scroll current month into view.
         */

        if (
            window.innerWidth <= 1100 &&
            monthsTrack
        ) {

            const currentMonthElement =
                monthsTrack.querySelector(
                    ".current-month"
                );


            if (currentMonthElement) {

                setTimeout(() => {

                    currentMonthElement
                        .scrollIntoView({
                            behavior: "smooth",
                            inline: "center",
                            block: "nearest"
                        });

                }, 500);

            }

        }

    }


    setCurrentBirthstone();



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       WISHLIST BUTTONS
    ===================================================== */

    const wishlistButtons =
        document.querySelectorAll(
            ".wishlist-button"
        );


    wishlistButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                const active =
                    button.classList
                        .toggle("active");


                button.textContent =
                    active ? "♥" : "♡";


                button.setAttribute(
                    "aria-label",
                    active
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                );

            }
        );

    });



    /* =====================================================
       NEWSLETTER DEMO
    ===================================================== */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const button =
                    newsletterForm
                        .querySelector(
                            "button"
                        );


                const input =
                    newsletterForm
                        .querySelector(
                            "input"
                        );


                const originalText =
                    button.textContent;


                button.textContent =
                    "Thank You";


                input.value = "";


                setTimeout(() => {

                    button.textContent =
                        originalText;

                }, 2500);

            }
        );

    }



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const footerYear =
        document.getElementById(
            "footerYear"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "#0a3827";

            }
        );

    });

});