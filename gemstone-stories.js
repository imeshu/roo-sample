/* =========================================================
   ROO GEMSTONES & JEWELLERY
   STORY OF GEMSTONES PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body =
        document.body;

    const siteHeader =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");



    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }

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

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.add("active");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add("menu-open");

    }


    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove("menu-open");

    }


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                if (
                    mobileMenu.classList.contains(
                        "active"
                    )
                ) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMobileMenu();

            }

        }
    );


    document
        .querySelectorAll(
            ".mobile-menu a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".gs-reveal"
        );


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    } else {

        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );


                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       GEMSTONE DATABASE
    ===================================================== */

    const gemstoneData = {

        "blue-sapphire": {

            name:
                "Blue Sapphire",

            kicker:
                "The Stone of the Sky",

            image:
                "assets/birthstones/september-sapphire.png",

            origin:
                "Sri Lanka",

            born:
                "Corundum",

            color:
                "Royal blue to vivid cornflower blue",

            story:
                "For centuries, Ceylon sapphires have been celebrated for their remarkable colour, transparency and character. Their blue hues can range from delicate sky tones to deep royal blue.",

            symbolism:
                "Wisdom · Loyalty · Clarity",

            rarity:
                "Precious / Highly Prized",

            link:
                "products.html?gemstone=blue-sapphire"

        },


        "ruby": {

            name:
                "Ruby",

            kicker:
                "The Stone of Passion",

            image:
                "assets/birthstones/july-ruby.png",

            origin:
                "Asia & Africa",

            born:
                "Corundum",

            color:
                "Vivid red to deep crimson",

            story:
                "Ruby is the red variety of corundum and has been treasured across cultures for centuries. Its intense colour has long made it one of the world's most recognised precious gemstones.",

            symbolism:
                "Passion · Courage · Vitality",

            rarity:
                "Precious",

            link:
                "products.html?gemstone=ruby"

        },


        "padparadscha": {

            name:
                "Padparadscha Sapphire",

            kicker:
                "The Sunset Stone",

            image:
                "assets/gemstones/padparadscha-sapphire.png",

            origin:
                "Sri Lanka",

            born:
                "Corundum",

            color:
                "A rare balance of pink and orange",

            story:
                "Padparadscha sapphires are among the rarest and most coveted gemstones in the world. Their unique colour — a blend of pink and orange — resembles a tropical sunset, captured in stone.",

            symbolism:
                "Creativity · Love · Transformation",

            rarity:
                "Rare / Exceptional",

            link:
                "products.html?gemstone=padparadscha"

        },


        "yellow-sapphire": {

            name:
                "Yellow Sapphire",

            kicker:
                "The Golden Stone",

            image:
                "assets/products/yellow-sapphire.png",

            origin:
                "Sri Lanka",

            born:
                "Corundum",

            color:
                "Soft lemon to rich golden yellow",

            story:
                "Yellow sapphire belongs to the corundum family and is admired for its warm luminous colour. Sri Lanka is known for producing especially beautiful yellow sapphires with exceptional brilliance.",

            symbolism:
                "Joy · Prosperity · Optimism",

            rarity:
                "Precious",

            link:
                "products.html?gemstone=yellow-sapphire"

        },


        "emerald": {

            name:
                "Emerald",

            kicker:
                "The Stone of Renewal",

            image:
                "assets/birthstones/may-emerald.png",

            origin:
                "Colombia · Zambia · Brazil",

            born:
                "Beryl",

            color:
                "Rich green to bluish green",

            story:
                "Emerald's unmistakable green colour has made it one of history's most celebrated gemstones. Natural inclusions often form part of the unique character of each emerald.",

            symbolism:
                "Renewal · Growth · Harmony",

            rarity:
                "Precious",

            link:
                "products.html?gemstone=emerald"

        },


        "spinel": {

            name:
                "Spinel",

            kicker:
                "The Hidden Treasure",

            image:
                "assets/gemstones/spinel.png",

            origin:
                "Sri Lanka · Myanmar",

            born:
                "Magnesium Aluminium Oxide",

            color:
                "Red, pink, blue and violet",

            story:
                "For centuries spinel was sometimes mistaken for ruby or sapphire. Today it is appreciated as a remarkable gemstone in its own right, admired for vivid colour and natural brilliance.",

            symbolism:
                "Energy · Renewal · Inspiration",

            rarity:
                "Fine Gemstone",

            link:
                "products.html?gemstone=spinel"

        },


        "alexandrite": {

            name:
                "Alexandrite",

            kicker:
                "Two Colours, One Story",

            image:
                "assets/gemstones/alexandrite.png",

            origin:
                "Sri Lanka · Brazil · Russia",

            born:
                "Chrysoberyl",

            color:
                "Green to reddish purple colour-change",

            story:
                "Alexandrite is famous for its remarkable colour-change effect. Under different lighting conditions, a single gemstone can reveal dramatically different personalities.",

            symbolism:
                "Change · Balance · Possibility",

            rarity:
                "Very Rare",

            link:
                "products.html?gemstone=alexandrite"

        },


        "moonstone": {

            name:
                "Moonstone",

            kicker:
                "The Stone of Light",

            image:
                "assets/gemstones/moonstone.png",

            origin:
                "Sri Lanka · India",

            born:
                "Feldspar",

            color:
                "White with blue or rainbow glow",

            story:
                "Moonstone is admired for adularescence — an ethereal light that appears to float beneath the gemstone's surface as it moves.",

            symbolism:
                "Intuition · Calm · New Beginnings",

            rarity:
                "Fine Gemstone",

            link:
                "products.html?gemstone=moonstone"

        },


        "garnet": {

            name:
                "Garnet",

            kicker:
                "The Stone of Strength",

            image:
                "assets/birthstones/january-garnet.png",

            origin:
                "Sri Lanka & Worldwide",

            born:
                "Silicate Mineral Group",

            color:
                "Deep red and many natural colours",

            story:
                "Garnet is a diverse family of gemstones known for rich colour and brilliance. While deep red is iconic, garnets naturally occur in a remarkable spectrum of hues.",

            symbolism:
                "Strength · Vitality · Commitment",

            rarity:
                "Natural Gemstone",

            link:
                "products.html?gemstone=garnet"

        },


        "aquamarine": {

            name:
                "Aquamarine",

            kicker:
                "The Stone of Calm",

            image:
                "assets/birthstones/march-aquamarine.png",

            origin:
                "Brazil · Africa · Asia",

            born:
                "Beryl",

            color:
                "Pale blue to ocean blue",

            story:
                "Aquamarine takes its name from the colour of seawater. Its clean blue tones and natural transparency give the gemstone a serene, luminous character.",

            symbolism:
                "Calm · Clarity · Courage",

            rarity:
                "Fine Gemstone",

            link:
                "products.html?gemstone=aquamarine"

        },


        "tourmaline": {

            name:
                "Tourmaline",

            kicker:
                "The Stone of Colour",

            image:
                "assets/birthstones/october-tourmaline.png",

            origin:
                "Sri Lanka · Brazil · Africa",

            born:
                "Complex Borosilicate",

            color:
                "An extraordinary spectrum of colours",

            story:
                "Few gemstones offer the natural colour diversity of tourmaline. From vivid pink and green to extraordinary bi-colour stones, every specimen can tell a different visual story.",

            symbolism:
                "Balance · Creativity · Individuality",

            rarity:
                "Varied / Collectible",

            link:
                "products.html?gemstone=tourmaline"

        },


        "topaz": {

            name:
                "Topaz",

            kicker:
                "The Stone of Brilliance",

            image:
                "assets/birthstones/november-topaz.png",

            origin:
                "Brazil · Sri Lanka · Worldwide",

            born:
                "Fluorosilicate Mineral",

            color:
                "Golden, blue, pink and colourless",

            story:
                "Topaz is known for exceptional clarity and brilliance. Its broad natural colour range has made it a versatile and enduring gemstone across jewellery traditions.",

            symbolism:
                "Warmth · Confidence · Abundance",

            rarity:
                "Fine Gemstone",

            link:
                "products.html?gemstone=topaz"

        }

    };



    /* =====================================================
       FEATURED STORY ELEMENTS
    ===================================================== */

    const gemCards =
        document.querySelectorAll(
            ".gs-gem-card"
        );


    const featuredImage =
        document.getElementById(
            "featuredGemImage"
        );

    const featuredKicker =
        document.getElementById(
            "featuredGemKicker"
        );

    const featuredName =
        document.getElementById(
            "featuredGemName"
        );

    const featuredOrigin =
        document.getElementById(
            "featuredGemOrigin"
        );

    const featuredBorn =
        document.getElementById(
            "featuredGemBorn"
        );

    const featuredColor =
        document.getElementById(
            "featuredGemColor"
        );

    const featuredStory =
        document.getElementById(
            "featuredGemStory"
        );

    const featuredSymbolism =
        document.getElementById(
            "featuredGemSymbolism"
        );

    const featuredRarity =
        document.getElementById(
            "featuredGemRarity"
        );

    const featuredLink =
        document.getElementById(
            "featuredGemLink"
        );

    const featuredSection =
        document.querySelector(
            ".gs-featured-story"
        );



    /* =====================================================
       CHANGE FEATURED GEMSTONE
    ===================================================== */

    function showGemstoneStory(key) {

        const gem =
            gemstoneData[key];


        if (!gem) {
            return;
        }


        gemCards.forEach(card => {

            card.classList.remove(
                "active"
            );

        });


        const activeCard =
            document.querySelector(
                `[data-gem="${key}"]`
            );


        if (activeCard) {

            activeCard.classList.add(
                "active"
            );

        }


        if (featuredImage) {

            featuredImage.style.opacity =
                "0";


            setTimeout(() => {

                featuredImage.src =
                    gem.image;

                featuredImage.alt =
                    gem.name;

                featuredImage.style.opacity =
                    "1";

            }, 180);

        }


        if (featuredKicker) {
            featuredKicker.textContent =
                gem.kicker;
        }


        if (featuredName) {
            featuredName.textContent =
                gem.name;
        }


        if (featuredOrigin) {
            featuredOrigin.textContent =
                gem.origin;
        }


        if (featuredBorn) {
            featuredBorn.textContent =
                gem.born;
        }


        if (featuredColor) {
            featuredColor.textContent =
                gem.color;
        }


        if (featuredStory) {
            featuredStory.textContent =
                gem.story;
        }


        if (featuredSymbolism) {
            featuredSymbolism.textContent =
                gem.symbolism;
        }


        if (featuredRarity) {
            featuredRarity.textContent =
                gem.rarity;
        }


        if (featuredLink) {
            featuredLink.href =
                gem.link;
        }

    }



    /* =====================================================
       GEMSTONE CARD CLICK
    ===================================================== */

    gemCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const gemKey =
                    card.dataset.gem;


                showGemstoneStory(
                    gemKey
                );


                if (featuredSection) {

                    featuredSection
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                }

            }
        );

    });



    /* Default Featured Gem */

    showGemstoneStory(
        "padparadscha"
    );



    /* =====================================================
       STORY PANEL CLOSE
    ===================================================== */

    const storyClose =
        document.querySelector(
            ".gs-story-panel__close"
        );


    if (storyClose) {

        storyClose.addEventListener(
            "click",
            () => {

                const archive =
                    document.getElementById(
                        "gemstoneArchive"
                    );


                if (archive) {

                    archive.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }



    /* =====================================================
       SUBTLE HERO PARALLAX
    ===================================================== */

    const hero =
        document.querySelector(
            ".gs-hero"
        );

    const heroImage =
        document.querySelector(
            ".gs-hero__media img"
        );


    if (
        hero &&
        heroImage &&
        !prefersReducedMotion
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const heroHeight =
                    hero.offsetHeight;


                if (
                    window.scrollY >
                    heroHeight
                ) {
                    return;
                }


                const movement =
                    window.scrollY * .08;


                heroImage.style.transform =
                    `translateY(${movement}px) scale(1.02)`;

            },
            { passive: true }
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

                image.style.opacity =
                    ".22";

                image.style.background =
                    "#0a3827";

            }
        );

    });

});