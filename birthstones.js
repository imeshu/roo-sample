document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const siteHeader =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const birthstoneGrid =
        document.getElementById("birthstoneGrid");

    const modal =
        document.getElementById("birthstoneModal");

    const modalClose =
        document.getElementById("modalClose");



    /* =====================================================
       BIRTHSTONE DATA
    ===================================================== */

    const birthstones = [

        {
            month: "January",
            shortMonth: "JAN",
            name: "Garnet",

            displayTitle:
                "Deep Red Garnet",

            type:
                "Natural Garnet",

            image:
                "assets/birthstones/january-garnet.png",

            keywords: [
                "Passion",
                "Protection",
                "Strength"
            ],

            colour:
                "Deep Red",

            origin:
                "Sri Lanka & Global",

            symbolism:
                "Passion & Protection",

            meaning:
                "Strength & Devotion",

            trait:
                "Rich, enduring red colour",

            intro:
                "Garnet has been treasured for centuries for its deep red colour and enduring character. Traditionally associated with protection, passion and strength, it carries a sense of warmth and timeless beauty.",

            heritageEyebrow:
                "A Stone Through Time",

            heritageTitle:
                "A Symbol of Strength and Devotion",

            heritageCopy:
                "Across cultures, garnet has been admired as a gemstone of protection, commitment and enduring connection."
        },


        {
            month: "February",
            shortMonth: "FEB",
            name: "Amethyst",

            displayTitle:
                "Violet Amethyst",

            type:
                "Natural Amethyst",

            image:
                "assets/birthstones/february-amethyst.png",

            keywords: [
                "Calm",
                "Balance",
                "Clarity"
            ],

            colour:
                "Violet Purple",

            origin:
                "Global",

            symbolism:
                "Calm & Balance",

            meaning:
                "Clarity & Peace",

            trait:
                "Distinctive violet colour",

            intro:
                "Amethyst is celebrated for its elegant violet colour and unmistakable depth. Traditionally connected with calm, balance and clarity, it has remained one of the world's most recognisable coloured gemstones.",

            heritageEyebrow:
                "February's Violet Story",

            heritageTitle:
                "A Gemstone of Calm and Clarity",

            heritageCopy:
                "From ancient adornment to contemporary jewellery, amethyst continues to be treasured for its rich violet presence."
        },


        {
            month: "March",
            shortMonth: "MAR",
            name: "Aquamarine",

            displayTitle:
                "Ocean Blue Aquamarine",

            type:
                "Natural Aquamarine",

            image:
                "assets/birthstones/march-aquamarine.png",

            keywords: [
                "Courage",
                "Clarity",
                "Serenity"
            ],

            colour:
                "Ocean Blue",

            origin:
                "Global",

            symbolism:
                "Courage & Serenity",

            meaning:
                "Clarity & Calm",

            trait:
                "Luminous blue transparency",

            intro:
                "Aquamarine captures the serene colour of clear tropical water. Its luminous blue appearance has long been associated with courage, clarity and a quiet sense of calm.",

            heritageEyebrow:
                "The Colour of Water",

            heritageTitle:
                "Serenity Captured in Stone",

            heritageCopy:
                "Aquamarine is admired for the fresh, luminous blue that gives the gemstone its unmistakably peaceful character."
        },


        {
            month: "April",
            shortMonth: "APR",
            name: "Diamond",

            displayTitle:
                "Brilliant Diamond",

            type:
                "Natural Diamond",

            image:
                "assets/birthstones/april-diamond.png",

            keywords: [
                "Purity",
                "Strength",
                "Forever"
            ],

            colour:
                "Colourless",

            origin:
                "Global",

            symbolism:
                "Purity & Strength",

            meaning:
                "Endurance & Commitment",

            trait:
                "Exceptional brilliance",

            intro:
                "Diamond is admired for extraordinary brilliance, strength and enduring elegance. Its remarkable interaction with light has made it a timeless symbol of commitment and permanence.",

            heritageEyebrow:
                "April's Timeless Stone",

            heritageTitle:
                "Brilliance Made to Endure",

            heritageCopy:
                "Few gemstones have carried such a lasting connection with strength, purity and enduring commitment."
        },


        {
            month: "May",
            shortMonth: "MAY",
            name: "Emerald",

            displayTitle:
                "Vivid Green Emerald",

            type:
                "Natural Emerald",

            image:
                "assets/birthstones/may-emerald.png",

            keywords: [
                "Love",
                "Renewal",
                "Growth"
            ],

            colour:
                "Vivid Green",

            origin:
                "Global",

            symbolism:
                "Love & Renewal",

            meaning:
                "Growth & Harmony",

            trait:
                "Intense natural green",

            intro:
                "Emerald is treasured for its vivid green colour and remarkable depth. Traditionally associated with renewal, love and growth, its colour has fascinated gemstone collectors for centuries.",

            heritageEyebrow:
                "May in Green",

            heritageTitle:
                "The Colour of Renewal",

            heritageCopy:
                "Emerald's unmistakable green has long represented vitality, renewal and the beauty of the natural world."
        },


        {
            month: "June",
            shortMonth: "JUN",
            name: "Alexandrite",

            displayTitle:
                "Colour-Changing Alexandrite",

            type:
                "Natural Alexandrite",

            image:
                "assets/birthstones/june-pearl.png",

            keywords: [
                "Change",
                "Harmony",
                "Discovery"
            ],

            colour:
                "Green to Purple-Red",

            origin:
                "Rare Global Sources",

            symbolism:
                "Change & Harmony",

            meaning:
                "Discovery & Balance",

            trait:
                "Remarkable colour change",

            intro:
                "Alexandrite is celebrated for one of the gemstone world's most fascinating optical characteristics: its ability to appear different under changing light. Its rarity gives it an extraordinary sense of mystery.",

            heritageEyebrow:
                "A Rare Transformation",

            heritageTitle:
                "One Stone. Two Personalities.",

            heritageCopy:
                "Alexandrite's dramatic colour change makes every viewing feel different, creating a gemstone defined by transformation."
        },


        {
            month: "July",
            shortMonth: "JUL",
            name: "Ruby",

            displayTitle:
                "Fiery Red Ruby",

            type:
                "Natural Ruby",

            image:
                "assets/birthstones/july-ruby.png",

            keywords: [
                "Passion",
                "Vitality",
                "Courage"
            ],

            colour:
                "Vivid Red",

            origin:
                "Sri Lanka & Global",

            symbolism:
                "Passion & Vitality",

            meaning:
                "Courage & Love",

            trait:
                "Powerful red saturation",

            intro:
                "Ruby is celebrated for its passionate red colour, rarity and extraordinary visual intensity. For generations it has represented vitality, courage and enduring love.",

            heritageEyebrow:
                "July's Fiery Gem",

            heritageTitle:
                "The Colour of Passion",

            heritageCopy:
                "Ruby's vivid red presence has made it one of the most admired and emotionally expressive gemstones in fine jewellery."
        },


        {
            month: "August",
            shortMonth: "AUG",
            name: "Peridot",

            displayTitle:
                "Luminous Green Peridot",

            type:
                "Natural Peridot",

            image:
                "assets/birthstones/august-peridot.png",

            keywords: [
                "Growth",
                "Positivity",
                "Light"
            ],

            colour:
                "Fresh Green",

            origin:
                "Global",

            symbolism:
                "Growth & Positivity",

            meaning:
                "Light & Renewal",

            trait:
                "Naturally luminous green",

            intro:
                "Peridot is recognised by its fresh green colour and naturally luminous character. Its vibrant appearance has traditionally been connected with positivity, renewal and light.",

            heritageEyebrow:
                "August in Green",

            heritageTitle:
                "A Gemstone Filled with Light",

            heritageCopy:
                "Peridot's distinctive green gives it a fresh visual identity unlike almost any other coloured gemstone."
        },


        {
            month: "September",
            shortMonth: "SEP",
            name: "Sapphire",

            displayTitle:
                "Royal Ceylon Blue Sapphire",

            type:
                "Blue Sapphire",

            image:
                "assets/birthstones/september-sapphire.png",

            keywords: [
                "Wisdom",
                "Loyalty",
                "Serenity"
            ],

            colour:
                "Royal Blue",

            origin:
                "Sri Lanka (Ceylon)",

            symbolism:
                "Wisdom & Loyalty",

            meaning:
                "Serenity & Truth",

            trait:
                "Exceptional blue colour",

            intro:
                "For centuries, sapphire has been treasured as a stone of wisdom, loyalty and inner peace. Ceylon sapphires are renowned for exceptional colour, natural brilliance and remarkable character.",

            heritageEyebrow:
                "A Sri Lankan Treasure",

            heritageTitle:
                "A Gemstone with a Remarkable Heritage",

            heritageCopy:
                "Sri Lanka has been one of the world's most celebrated sources of sapphires for centuries, producing stones of exceptional beauty and character."
        },


        {
            month: "October",
            shortMonth: "OCT",
            name: "Opal",

            displayTitle:
                "Play-of-Colour Opal",

            type:
                "Natural Opal",

            image:
                "assets/birthstones/october-tourmaline.png",

            keywords: [
                "Hope",
                "Creativity",
                "Individuality"
            ],

            colour:
                "Play of Colour",

            origin:
                "Global",

            symbolism:
                "Hope & Creativity",

            meaning:
                "Expression & Individuality",

            trait:
                "Spectral play of colour",

            intro:
                "Opal is celebrated for its extraordinary play of colour. As light moves across the gemstone, flashes of different hues create a constantly changing visual character unlike almost any other stone.",

            heritageEyebrow:
                "October's Living Colour",

            heritageTitle:
                "A Different Story in Every Light",

            heritageCopy:
                "No two opals reveal colour in exactly the same way, giving each gemstone a naturally individual visual identity."
        },


        {
            month: "November",
            shortMonth: "NOV",
            name: "Topaz",

            displayTitle:
                "Golden Topaz",

            type:
                "Natural Topaz",

            image:
                "assets/birthstones/november-topaz.png",

            keywords: [
                "Joy",
                "Abundance",
                "Warmth"
            ],

            colour:
                "Golden Honey",

            origin:
                "Global",

            symbolism:
                "Joy & Abundance",

            meaning:
                "Warmth & Confidence",

            trait:
                "Exceptional clarity",

            intro:
                "Topaz is admired for brilliant clarity and a beautiful spectrum of colour. Golden varieties carry a warm, radiant character traditionally connected with joy and abundance.",

            heritageEyebrow:
                "November's Golden Light",

            heritageTitle:
                "Warmth Captured in a Gemstone",

            heritageCopy:
                "Golden topaz combines remarkable clarity with rich warm colour, creating a naturally radiant presence."
        },


        {
            month: "December",
            shortMonth: "DEC",
            name: "Tanzanite",

            displayTitle:
                "Blue-Violet Tanzanite",

            type:
                "Natural Tanzanite",

            image:
                "assets/birthstones/december-zircon.png",

            keywords: [
                "Transformation",
                "Insight",
                "New Beginnings"
            ],

            colour:
                "Blue Violet",

            origin:
                "Tanzania",

            symbolism:
                "Transformation & Insight",

            meaning:
                "Growth & New Beginnings",

            trait:
                "Rare blue-violet colour",

            intro:
                "Tanzanite is a rare gemstone known for its extraordinary blue-violet colour. Found in only a small region of Tanzania, its rarity and visual depth give it a distinctive modern character.",

            heritageEyebrow:
                "December's Rare Colour",

            heritageTitle:
                "A Remarkable Modern Gemstone",

            heritageCopy:
                "Tanzanite's limited geographic source and captivating blue-violet appearance have made it one of the modern gemstone world's most distinctive treasures."
        }

    ];



    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 50) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
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

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");

    }


    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.remove("active");

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");

    }


    if (menuToggle) {

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



    /* =====================================================
       EFFECTIVE MONTH
       Changes on day 1 at exactly 00:01 local time.
    ===================================================== */

    function getEffectiveMonthIndex(date = new Date()) {

        let month =
            date.getMonth();


        /*
         * Between 00:00:00 and 00:00:59
         * on the first day of a new month,
         * continue displaying the previous month.
         */

        if (
            date.getDate() === 1 &&
            date.getHours() === 0 &&
            date.getMinutes() < 1
        ) {

            month =
                (month + 11) % 12;

        }


        return month;

    }



    /* =====================================================
       CURRENT MONTH STORY
    ===================================================== */

    function renderCurrentMonth() {

        const monthIndex =
            getEffectiveMonthIndex();

        const stone =
            birthstones[monthIndex];


        const monthLabel =
            document.getElementById(
                "currentMonthLabel"
            );

        const name =
            document.getElementById(
                "currentStoneName"
            );

        const keywords =
            document.getElementById(
                "currentStoneKeywords"
            );

        const description =
            document.getElementById(
                "currentStoneDescription"
            );

        const image =
            document.getElementById(
                "currentStoneImage"
            );

        const traits =
            document.getElementById(
                "currentTraitList"
            );

        const button =
            document.getElementById(
                "currentStoryButton"
            );


        if (monthLabel) {
            monthLabel.textContent =
                stone.month;
        }

        if (name) {
            name.textContent =
                stone.name;
        }

        if (keywords) {
            keywords.textContent =
                stone.keywords.join(" · ");
        }

        if (description) {
            description.textContent =
                stone.intro;
        }

        if (image) {

            image.src =
                stone.image;

            image.alt =
                `${stone.month} birthstone ${stone.name}`;

        }


        if (traits) {

            const traitItems = [
                stone.keywords[0],
                stone.keywords[1],
                stone.keywords[2],
                stone.meaning
            ];


            traits.innerHTML =
                traitItems
                    .map(
                        (trait, index) => `
                            <div class="current-trait">

                                <span class="current-trait__icon">
                                    ${["✦", "◇", "◌", "✧"][index]}
                                </span>

                                <span>
                                    ${trait}
                                </span>

                            </div>
                        `
                    )
                    .join("");

        }


        if (button) {

            button.onclick =
                () => openBirthstoneModal(
                    monthIndex
                );

        }


        highlightCurrentCard();

    }



    /* =====================================================
       EXACT MONTHLY REFRESH SCHEDULER

       Browser setTimeout has a maximum practical delay,
       so long waits are checked in safe chunks.
    ===================================================== */

    function scheduleNextMonthRefresh() {

        const now =
            new Date();

        const target =
            new Date(
                now.getFullYear(),
                now.getMonth() + 1,
                1,
                0,
                1,
                0,
                0
            );


        const remaining =
            target.getTime() -
            now.getTime();


        const MAX_SAFE_TIMEOUT =
            2147480000;


        const delay =
            Math.min(
                remaining,
                MAX_SAFE_TIMEOUT
            );


        window.setTimeout(
            () => {

                const currentTime =
                    new Date();


                if (
                    currentTime >= target
                ) {

                    renderCurrentMonth();

                }


                scheduleNextMonthRefresh();

            },
            Math.max(delay, 1000)
        );

    }



    /* =====================================================
       CREATE 12 BIRTHSTONE CARDS
    ===================================================== */

    function renderBirthstoneCards() {

        if (!birthstoneGrid) {
            return;
        }


        birthstoneGrid.innerHTML =
            birthstones
                .map(
                    (stone, index) => `

                        <article
                            class="birthstone-card reveal"
                            data-birthstone-index="${index}"
                            tabindex="0"
                            role="button"
                            aria-label="Discover ${stone.month} birthstone ${stone.name}"
                        >

                            <span class="birthstone-card__month">
                                ${stone.month}
                            </span>


                            <div class="birthstone-card__image">

                                <img
                                    src="${stone.image}"
                                    alt="${stone.name}"
                                    loading="lazy"
                                >

                            </div>


                            <h3>
                                ${stone.name}
                            </h3>


                            <p class="birthstone-card__meaning">
                                ${stone.keywords[0]}
                                ·
                                ${stone.keywords[1]}
                            </p>


                            <span class="birthstone-card__arrow">
                                →
                            </span>

                        </article>

                    `
                )
                .join("");


        const cards =
            birthstoneGrid.querySelectorAll(
                ".birthstone-card"
            );


        cards.forEach(card => {

            const index =
                Number(
                    card.dataset.birthstoneIndex
                );


            card.addEventListener(
                "click",
                () => {

                    openBirthstoneModal(
                        index
                    );

                }
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openBirthstoneModal(
                            index
                        );

                    }

                }
            );

        });


        highlightCurrentCard();

    }



    function highlightCurrentCard() {

        const currentIndex =
            getEffectiveMonthIndex();


        document
            .querySelectorAll(
                ".birthstone-card"
            )
            .forEach(
                (card, index) => {

                    card.classList.toggle(
                        "current-month",
                        index === currentIndex
                    );

                }
            );

    }



    /* =====================================================
       POPUP GALLERY
    ===================================================== */

    function getGalleryImages(stone) {

        return [

            {
                src: stone.image,
                alt: stone.name
            },

            {
                src:
                    "assets/collections/natural_gemstones.png",

                alt:
                    "Natural gemstones"
            },

            {
                src:
                    "assets/collections/birthstones.png",

                alt:
                    "Birthstone jewellery"
            },

            {
                src:
                    "assets/stories/ceylon-gemstone-story.png",

                alt:
                    "Sri Lankan gemstone heritage"
            },

            {
                src:
                    "assets/stories/gem-cutting.webp",

                alt:
                    "Gemstone craftsmanship"
            }

        ];

    }



    /* =====================================================
       OPEN POPUP
    ===================================================== */

    function openBirthstoneModal(index) {

        const stone =
            birthstones[index];


        if (!stone || !modal) {
            return;
        }


        const setText =
            (id, value) => {

                const element =
                    document.getElementById(id);

                if (element) {
                    element.textContent =
                        value;
                }

            };


        setText(
            "modalMonthBadge",
            `${stone.month} Birthstone`
        );

        setText(
            "modalStoneType",
            stone.type
        );

        setText(
            "modalStoneTitle",
            stone.displayTitle
        );

        setText(
            "modalSymbolLine",
            `${stone.month} Birthstone · ${stone.keywords.join(" · ")}`
        );

        setText(
            "modalIntro",
            stone.intro
        );

        setText(
            "modalSymbolism",
            stone.symbolism
        );

        setText(
            "modalColour",
            stone.colour
        );

        setText(
            "modalOrigin",
            stone.origin
        );

        setText(
            "modalMeaning",
            stone.meaning
        );


        setText(
            "detailMonth",
            stone.month
        );

        setText(
            "detailSymbolism",
            stone.symbolism
        );

        setText(
            "detailMeaning",
            stone.meaning
        );

        setText(
            "detailColour",
            stone.colour
        );

        setText(
            "detailOrigin",
            stone.origin
        );

        setText(
            "detailTrait",
            stone.trait
        );


        setText(
            "heritageEyebrow",
            stone.heritageEyebrow
        );

        setText(
            "heritageTitle",
            stone.heritageTitle
        );

        setText(
            "heritageCopy",
            stone.heritageCopy
        );



        /* Main Image */

        const mainImage =
            document.getElementById(
                "modalMainImage"
            );


        if (mainImage) {

            mainImage.src =
                stone.image;

            mainImage.alt =
                stone.displayTitle;

        }



        /* Gallery */

        const thumbnails =
            document.getElementById(
                "modalThumbnails"
            );


        const gallery =
            getGalleryImages(stone);


        if (thumbnails) {

            thumbnails.innerHTML =
                gallery
                    .map(
                        (image, imageIndex) => `

                            <button
                                type="button"
                                class="modal-thumbnail ${imageIndex === 0 ? "active" : ""}"
                                data-image-index="${imageIndex}"
                                aria-label="View image ${imageIndex + 1}"
                            >

                                <img
                                    src="${image.src}"
                                    alt="${image.alt}"
                                >

                            </button>

                        `
                    )
                    .join("");


            thumbnails
                .querySelectorAll(
                    ".modal-thumbnail"
                )
                .forEach(
                    thumbnail => {

                        thumbnail.addEventListener(
                            "click",
                            () => {

                                const imageIndex =
                                    Number(
                                        thumbnail.dataset.imageIndex
                                    );


                                const selectedImage =
                                    gallery[imageIndex];


                                mainImage.src =
                                    selectedImage.src;

                                mainImage.alt =
                                    selectedImage.alt;


                                thumbnails
                                    .querySelectorAll(
                                        ".modal-thumbnail"
                                    )
                                    .forEach(
                                        item =>
                                            item.classList.remove(
                                                "active"
                                            )
                                    );


                                thumbnail.classList.add(
                                    "active"
                                );

                            }
                        );

                    }
                );

        }



        /* Explore Link */

        const exploreLink =
            document.getElementById(
                "modalExploreLink"
            );


        if (exploreLink) {

            exploreLink.href =
                `products.html?birthstone=${encodeURIComponent(
                    stone.name.toLowerCase()
                )}`;


            exploreLink.innerHTML =
                `
                    Explore ${stone.name} Jewellery
                    <span>→</span>
                `;

        }



        /* WhatsApp Enquiry */

        const enquireLink =
            document.getElementById(
                "modalEnquireLink"
            );


        if (enquireLink) {

            const message =
                `Hello Roo, I would like to learn more about ${stone.name}, the ${stone.month} birthstone.`;


            enquireLink.href =
                `https://wa.me/94703663908?text=${encodeURIComponent(
                    message
                )}`;


            enquireLink.target =
                "_blank";

        }



        modal.classList.add(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        body.classList.add(
            "modal-open"
        );


        window.setTimeout(
            () => {

                modalClose?.focus();

            },
            250
        );

    }



    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closeBirthstoneModal() {

        if (!modal) {
            return;
        }


        modal.classList.remove(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        body.classList.remove(
            "modal-open"
        );

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeBirthstoneModal
        );

    }


    document
        .querySelectorAll(
            "[data-close-modal]"
        )
        .forEach(
            element => {

                element.addEventListener(
                    "click",
                    closeBirthstoneModal
                );

            }
        );



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            if (
                modal &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closeBirthstoneModal();

                return;

            }


            if (
                mobileMenu &&
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =====================================================
       FULLSCREEN IMAGE
    ===================================================== */

    const modalExpand =
        document.getElementById(
            "modalExpand"
        );


    if (modalExpand) {

        modalExpand.addEventListener(
            "click",
            () => {

                const image =
                    document.getElementById(
                        "modalMainImage"
                    );


                if (!image) {
                    return;
                }


                if (
                    image.requestFullscreen
                ) {

                    image.requestFullscreen();

                }

            }
        );

    }



    /* =====================================================
       REVEAL
    ===================================================== */

    function initialiseReveal() {

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            !("IntersectionObserver" in window)
        ) {

            revealElements.forEach(
                element =>
                    element.classList.add(
                        "visible"
                    )
            );

            return;

        }


        const observer =
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


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .12
                }
            );


        revealElements.forEach(
            element =>
                observer.observe(
                    element
                )
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

    document.addEventListener(
        "error",
        event => {

            const image =
                event.target;


            if (
                image.tagName !== "IMG"
            ) {
                return;
            }


            /*
             * Prevent infinite fallback loop.
             */

            if (
                image.dataset.fallbackApplied
            ) {
                return;
            }


            image.dataset.fallbackApplied =
                "true";


            image.src =
                "assets/collections/natural_gemstones.png";

        },
        true
    );



    /* =====================================================
       INITIALISE
    ===================================================== */

    renderBirthstoneCards();

    renderCurrentMonth();

    initialiseReveal();

    scheduleNextMonthRefresh();

});