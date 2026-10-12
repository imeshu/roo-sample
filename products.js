/* =========================================================
   ROO GEMSTONES & JEWELLERY
   PRODUCTS PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       GLOBAL ELEMENTS
    ===================================================== */

    const body =
        document.body;

    const siteHeader =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const footerYear =
        document.getElementById("footerYear");



    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function updateHeader() {

        if (!siteHeader) return;

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


        mobileMenu.classList.add(
            "active"
        );


        menuToggle.classList.add(
            "active"
        );


        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );


        body.classList.add(
            "menu-open"
        );

    }


    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }


        mobileMenu.classList.remove(
            "active"
        );


        menuToggle.classList.remove(
            "active"
        );


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        body.classList.remove(
            "menu-open"
        );

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                if (
                    mobileMenu.classList
                        .contains("active")
                ) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );

    }



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       SAMPLE PRODUCT DATA - 15 PRODUCTS
    ===================================================== */

    const products = [

        /* =========================
           01
        ========================= */

        {
            id: "ROO-BS-001",

            kind: "gemstone",

            gemstone: "Blue Sapphire",

            productName:
                "Royal Ceylon Blue Sapphire",

            productType:
                "Loose Gemstone",

            month:
                "September",

            image:
                "assets/products/blue-sapphire.png",

            gallery: [
                "assets/products/blue-sapphire.png",
                "assets/birthstones/september-sapphire.png",
                "assets/products/blue-sapphire.png",
                "assets/birthstones/september-sapphire.png"
            ],

            badge:
                "Natural",

            usd:
                1620,

            lkr:
                485000,

            carat:
                "5.12 ct",

            cut:
                "Cushion",

            color:
                "Royal Blue",

            origin:
                "Sri Lanka",

            treatment:
                "Untreated",

            certification:
                "GIA",

            dimensions:
                "11.2 × 8.6 × 5.8 mm",

            clarity:
                "VVS",

            metal:
                "—",

            variety:
                "Natural Blue Sapphire",

            species:
                "Corundum",

            collection:
                "Signature",

            stock:
                1,

            featured:
                1,

            newest:
                15,

            description:
                "A rare and exquisite Ceylon blue sapphire selected for its vivid royal blue colour, refined brilliance and timeless natural character."
        },



        /* =========================
           02
        ========================= */

        {
            id: "ROO-PSR-002",

            kind: "jewelry",

            gemstone:
                "Pink Sapphire",

            productName:
                "Pink Sapphire Solitaire",

            productType:
                "Ring",

            month:
                "September",

            image:
                "assets/products/pink-sapphire-ring.png",

            gallery: [
                "assets/products/pink-sapphire-ring.png",
                "assets/birthstones/september-sapphire.png",
                "assets/products/pink-sapphire-ring.png",
                "assets/collections/gemstone_rings.png"
            ],

            badge:
                "New",

            usd:
                2480,

            lkr:
                740000,

            carat:
                "2.18 ct",

            cut:
                "Cushion",

            color:
                "Vivid Pink",

            origin:
                "Sri Lanka",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "Ring Size 6.5",

            clarity:
                "Eye Clean",

            metal:
                "18K Rose Gold",

            variety:
                "Pink Sapphire",

            species:
                "Corundum",

            collection:
                "Fine Jewellery",

            stock:
                1,

            featured:
                2,

            newest:
                14,

            description:
                "An elegant pink sapphire solitaire designed around a vibrant natural sapphire and refined with warm 18K rose gold."
        },



        /* =========================
           03
        ========================= */

        {
            id: "ROO-EMP-003",

            kind: "jewelry",

            gemstone:
                "Emerald",

            productName:
                "Emerald Signature Pendant",

            productType:
                "Pendant",

            month:
                "May",

            image:
                "assets/products/emerald-pendant.png",

            gallery: [
                "assets/products/emerald-pendant.png",
                "assets/birthstones/may-emerald.png",
                "assets/products/emerald-pendant.png",
                "assets/collections/gemstone_necklances.png"
            ],

            badge:
                "Bestseller",

            usd:
                1320,

            lkr:
                395000,

            carat:
                "1.64 ct",

            cut:
                "Emerald Cut",

            color:
                "Vivid Green",

            origin:
                "Colombia",

            treatment:
                "Minor Oil",

            certification:
                "Certified",

            dimensions:
                "Pendant 18 mm",

            clarity:
                "Transparent",

            metal:
                "18K Yellow Gold",

            variety:
                "Natural Emerald",

            species:
                "Beryl",

            collection:
                "Signature",

            stock:
                2,

            featured:
                3,

            newest:
                10,

            description:
                "A refined emerald pendant balancing vivid green colour, elegant geometry and the warmth of polished 18K yellow gold."
        },



        /* =========================
           04
        ========================= */

        {
            id: "ROO-YSP-004",

            kind:
                "gemstone",

            gemstone:
                "Topaz",

            productName:
                "Golden Imperial Topaz",

            productType:
                "Loose Gemstone",

            month:
                "November",

            image:
                "assets/products/yellow-sapphire.png",

            gallery: [
                "assets/products/yellow-sapphire.png",
                "assets/birthstones/november-topaz.png",
                "assets/products/yellow-sapphire.png",
                "assets/birthstones/november-topaz.png"
            ],

            badge:
                "Limited",

            usd:
                920,

            lkr:
                275000,

            carat:
                "4.21 ct",

            cut:
                "Cushion",

            color:
                "Golden Honey",

            origin:
                "Brazil",

            treatment:
                "Untreated",

            certification:
                "Certified",

            dimensions:
                "10.4 × 9.2 × 6.1 mm",

            clarity:
                "VVS",

            metal:
                "—",

            variety:
                "Imperial Topaz",

            species:
                "Topaz",

            collection:
                "Birthstone",

            stock:
                1,

            featured:
                4,

            newest:
                12,

            description:
                "A warm golden gemstone with exceptional transparency, crisp facets and an elegant honey-toned presence."
        },



        /* =========================
           05
        ========================= */

        {
            id:
                "ROO-TZE-005",

            kind:
                "jewelry",

            gemstone:
                "Tanzanite",

            productName:
                "Tanzanite Elegance Earrings",

            productType:
                "Earrings",

            month:
                "December",

            image:
                "assets/birthstones/december-zircon.png",

            gallery: [
                "assets/birthstones/december-zircon.png",
                "assets/collections/birthstones.png",
                "assets/birthstones/december-zircon.png",
                "assets/collections/gemstone_necklances.png"
            ],

            badge:
                "Exclusive",

            usd:
                1090,

            lkr:
                325000,

            carat:
                "3.24 ct Total",

            cut:
                "Pear",

            color:
                "Blue Violet",

            origin:
                "Tanzania",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "24 mm Drop",

            clarity:
                "Eye Clean",

            metal:
                "18K White Gold",

            variety:
                "Tanzanite",

            species:
                "Zoisite",

            collection:
                "Fine Jewellery",

            stock:
                2,

            featured:
                5,

            newest:
                11,

            description:
                "Elegant blue-violet tanzanite earrings created for soft movement, brilliance and a sophisticated evening presence."
        },



        /* =========================
           06
        ========================= */

        {
            id:
                "ROO-MSR-006",

            kind:
                "jewelry",

            gemstone:
                "Blue Sapphire",

            productName:
                "Midnight Sapphire Solitaire",

            productType:
                "Ring",

            month:
                "September",

            image:
                "assets/collections/gemstone_rings.png",

            gallery: [
                "assets/collections/gemstone_rings.png",
                "assets/products/blue-sapphire.png",
                "assets/collections/gemstone_rings.png",
                "assets/birthstones/september-sapphire.png"
            ],

            badge:
                "Signature",

            usd:
                2090,

            lkr:
                625000,

            carat:
                "2.36 ct",

            cut:
                "Oval",

            color:
                "Midnight Blue",

            origin:
                "Sri Lanka",

            treatment:
                "Heated",

            certification:
                "GIA",

            dimensions:
                "Ring Size 7",

            clarity:
                "VS",

            metal:
                "18K White Gold",

            variety:
                "Ceylon Blue Sapphire",

            species:
                "Corundum",

            collection:
                "Signature",

            stock:
                1,

            featured:
                6,

            newest:
                9,

            description:
                "A classic sapphire solitaire centred around a deep Ceylon blue stone and finished in understated white gold."
        },



        /* =========================
           07
        ========================= */

        {
            id:
                "ROO-RCN-007",

            kind:
                "jewelry",

            gemstone:
                "Ruby",

            productName:
                "Ruby Celestial Necklace",

            productType:
                "Necklace",

            month:
                "July",

            image:
                "assets/birthstones/july-ruby.png",

            gallery: [
                "assets/birthstones/july-ruby.png",
                "assets/collections/gemstone_necklances.png",
                "assets/birthstones/july-ruby.png",
                "assets/collections/birthstones.png"
            ],

            badge:
                "Limited",

            usd:
                2310,

            lkr:
                690000,

            carat:
                "2.02 ct",

            cut:
                "Pear",

            color:
                "Pigeon Blood Red",

            origin:
                "Mozambique",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "45 cm Chain",

            clarity:
                "Transparent",

            metal:
                "18K Yellow Gold",

            variety:
                "Natural Ruby",

            species:
                "Corundum",

            collection:
                "Fine Jewellery",

            stock:
                1,

            featured:
                7,

            newest:
                8,

            description:
                "A vivid ruby necklace designed as a singular colour statement, balancing dramatic red with delicate gold detailing."
        },



        /* =========================
           08
        ========================= */

        {
            id:
                "ROO-SDE-008",

            kind:
                "jewelry",

            gemstone:
                "Blue Sapphire",

            productName:
                "Ceylon Sapphire Drop Earrings",

            productType:
                "Earrings",

            month:
                "September",

            image:
                "assets/collections/birthstones.png",

            gallery: [
                "assets/collections/birthstones.png",
                "assets/products/blue-sapphire.png",
                "assets/collections/gemstone_necklances.png",
                "assets/birthstones/september-sapphire.png"
            ],

            badge:
                "Roo Selection",

            usd:
                1860,

            lkr:
                560000,

            carat:
                "3.08 ct Total",

            cut:
                "Oval",

            color:
                "Royal Blue",

            origin:
                "Sri Lanka",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "22 mm Drop",

            clarity:
                "VS",

            metal:
                "18K White Gold",

            variety:
                "Ceylon Blue Sapphire",

            species:
                "Corundum",

            collection:
                "Signature",

            stock:
                1,

            featured:
                8,

            newest:
                7,

            description:
                "Graceful Ceylon sapphire drop earrings created to capture light through movement and rich royal-blue colour."
        },



        /* =========================
           09
        ========================= */

        {
            id:
                "ROO-EHR-009",

            kind:
                "jewelry",

            gemstone:
                "Emerald",

            productName:
                "Emerald Heritage Ring",

            productType:
                "Ring",

            month:
                "May",

            image:
                "assets/birthstones/may-emerald.png",

            gallery: [
                "assets/birthstones/may-emerald.png",
                "assets/products/emerald-pendant.png",
                "assets/collections/gemstone_rings.png",
                "assets/birthstones/may-emerald.png"
            ],

            badge:
                "Roo Selection",

            usd:
                2750,

            lkr:
                820000,

            carat:
                "2.48 ct",

            cut:
                "Emerald Cut",

            color:
                "Deep Green",

            origin:
                "Colombia",

            treatment:
                "Minor Oil",

            certification:
                "Gübelin",

            dimensions:
                "Ring Size 6",

            clarity:
                "Transparent",

            metal:
                "Platinum",

            variety:
                "Natural Emerald",

            species:
                "Beryl",

            collection:
                "Heritage",

            stock:
                1,

            featured:
                9,

            newest:
                13,

            description:
                "A sophisticated emerald ring inspired by heritage jewellery, pairing a vivid centre stone with refined platinum detailing."
        },



        /* =========================
           10
        ========================= */

        {
            id:
                "ROO-TZG-010",

            kind:
                "gemstone",

            gemstone:
                "Tanzanite",

            productName:
                "Twilight Tanzanite",

            productType:
                "Loose Gemstone",

            month:
                "December",

            image:
                "assets/birthstones/december-zircon.png",

            gallery: [
                "assets/birthstones/december-zircon.png",
                "assets/birthstones/december-zircon.png",
                "assets/collections/natural_gemstones.png",
                "assets/birthstones/december-zircon.png"
            ],

            badge:
                "Natural",

            usd:
                1490,

            lkr:
                445000,

            carat:
                "3.72 ct",

            cut:
                "Oval",

            color:
                "Blue Violet",

            origin:
                "Tanzania",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "10.1 × 8.2 × 5.7 mm",

            clarity:
                "VVS",

            metal:
                "—",

            variety:
                "Tanzanite",

            species:
                "Zoisite",

            collection:
                "Birthstone",

            stock:
                1,

            featured:
                10,

            newest:
                6,

            description:
                "A luminous tanzanite selected for its blue-violet colour shift and elegant balance of depth, clarity and brilliance."
        },



        /* =========================
           11
        ========================= */

        {
            id:
                "ROO-HTR-011",

            kind:
                "jewelry",

            gemstone:
                "Topaz",

            productName:
                "Honey Gold Topaz Ring",

            productType:
                "Ring",

            month:
                "November",

            image:
                "assets/birthstones/november-topaz.png",

            gallery: [
                "assets/birthstones/november-topaz.png",
                "assets/products/yellow-sapphire.png",
                "assets/collections/gemstone_rings.png",
                "assets/birthstones/november-topaz.png"
            ],

            badge:
                "Birthstone",

            usd:
                950,

            lkr:
                285000,

            carat:
                "2.85 ct",

            cut:
                "Cushion",

            color:
                "Honey Gold",

            origin:
                "Brazil",

            treatment:
                "Untreated",

            certification:
                "Certified",

            dimensions:
                "Ring Size 7",

            clarity:
                "VVS",

            metal:
                "18K Yellow Gold",

            variety:
                "Golden Topaz",

            species:
                "Topaz",

            collection:
                "Birthstone",

            stock:
                2,

            featured:
                11,

            newest:
                5,

            description:
                "A warm November birthstone ring pairing honey-gold topaz with the richness of polished 18K yellow gold."
        },



        /* =========================
           12
        ========================= */

        {
            id:
                "ROO-SSP-012",

            kind:
                "jewelry",

            gemstone:
                "Blue Sapphire",

            productName:
                "Signature Sapphire Pendant",

            productType:
                "Pendant",

            month:
                "September",

            image:
                "assets/products/blue-sapphire.png",

            gallery: [
                "assets/products/blue-sapphire.png",
                "assets/collections/gemstone_necklances.png",
                "assets/birthstones/september-sapphire.png",
                "assets/products/blue-sapphire.png"
            ],

            badge:
                "Signature",

            usd:
                1700,

            lkr:
                510000,

            carat:
                "1.92 ct",

            cut:
                "Pear",

            color:
                "Ceylon Blue",

            origin:
                "Sri Lanka",

            treatment:
                "Heated",

            certification:
                "GIA",

            dimensions:
                "Pendant 19 mm",

            clarity:
                "VS",

            metal:
                "18K Yellow Gold",

            variety:
                "Natural Blue Sapphire",

            species:
                "Corundum",

            collection:
                "Signature",

            stock:
                1,

            featured:
                12,

            newest:
                4,

            description:
                "A timeless sapphire pendant combining a Ceylon blue centre stone with warm gold and a clean contemporary silhouette."
        },



        /* =========================
           13
        ========================= */

        {
            id:
                "ROO-TMG-013",

            kind:
                "gemstone",

            gemstone:
                "Tourmaline",

            productName:
                "Ceylon Rose Tourmaline",

            productType:
                "Loose Gemstone",

            month:
                "October",

            image:
                "assets/birthstones/october-tourmaline.png",

            gallery: [
                "assets/birthstones/october-tourmaline.png",
                "assets/collections/natural_gemstones.png",
                "assets/birthstones/october-tourmaline.png",
                "assets/collections/birthstones.png"
            ],

            badge:
                "One of One",

            usd:
                1180,

            lkr:
                354000,

            carat:
                "3.46 ct",

            cut:
                "Oval",

            color:
                "Rose Pink",

            origin:
                "Sri Lanka",

            treatment:
                "Untreated",

            certification:
                "Certified",

            dimensions:
                "9.8 × 7.6 × 5.4 mm",

            clarity:
                "VVS",

            metal:
                "—",

            variety:
                "Pink Tourmaline",

            species:
                "Elbaite",

            collection:
                "Birthstone",

            stock:
                1,

            featured:
                13,

            newest:
                3,

            description:
                "A naturally expressive rose-pink tourmaline with lively colour, elegant transparency and a softly romantic personality."
        },



        /* =========================
           14
        ========================= */

        {
            id:
                "ROO-AQP-014",

            kind:
                "jewelry",

            gemstone:
                "Aquamarine",

            productName:
                "Ocean Whisper Aquamarine Pendant",

            productType:
                "Pendant",

            month:
                "March",

            image:
                "assets/birthstones/march-aquamarine.png",

            gallery: [
                "assets/birthstones/march-aquamarine.png",
                "assets/collections/gemstone_necklances.png",
                "assets/birthstones/march-aquamarine.png",
                "assets/collections/birthstones.png"
            ],

            badge:
                "New",

            usd:
                1280,

            lkr:
                383000,

            carat:
                "2.93 ct",

            cut:
                "Oval",

            color:
                "Ocean Blue",

            origin:
                "Brazil",

            treatment:
                "Heated",

            certification:
                "Certified",

            dimensions:
                "Pendant 22 mm",

            clarity:
                "VVS",

            metal:
                "18K White Gold",

            variety:
                "Aquamarine",

            species:
                "Beryl",

            collection:
                "Birthstone",

            stock:
                2,

            featured:
                14,

            newest:
                2,

            description:
                "A calm ocean-blue aquamarine pendant designed with a light, elegant setting that lets the gemstone remain the focus."
        },



        /* =========================
           15
        ========================= */

        {
            id:
                "ROO-GHR-015",

            kind:
                "jewelry",

            gemstone:
                "Garnet",

            productName:
                "Garnet Heritage Ring",

            productType:
                "Ring",

            month:
                "January",

            image:
                "assets/birthstones/january-garnet.png",

            gallery: [
                "assets/birthstones/january-garnet.png",
                "assets/collections/gemstone_rings.png",
                "assets/birthstones/january-garnet.png",
                "assets/collections/birthstones.png"
            ],

            badge:
                "Heritage",

            usd:
                1250,

            lkr:
                374000,

            carat:
                "2.74 ct",

            cut:
                "Round",

            color:
                "Deep Red",

            origin:
                "Sri Lanka",

            treatment:
                "Untreated",

            certification:
                "Certified",

            dimensions:
                "Ring Size 6.5",

            clarity:
                "Eye Clean",

            metal:
                "18K Yellow Gold",

            variety:
                "Natural Garnet",

            species:
                "Garnet",

            collection:
                "Heritage",

            stock:
                1,

            featured:
                15,

            newest:
                1,

            description:
                "A deep-red garnet ring with a timeless heritage character, created in warm yellow gold for an elegant January birthstone piece."
        }

    ];



    /* =====================================================
       PRODUCTS ELEMENTS
    ===================================================== */

    const productGrid =
        document.getElementById(
            "catalogProductGrid"
        );


    const resultText =
        document.getElementById(
            "catalogResultText"
        );


    const emptyState =
        document.getElementById(
            "catalogEmpty"
        );


    const pagination =
        document.getElementById(
            "catalogPagination"
        );


    const searchInput =
        document.getElementById(
            "productSearch"
        );


    const clearSearchButton =
        document.getElementById(
            "clearSearchButton"
        );


    const sortSelect =
        document.getElementById(
            "catalogSort"
        );


    const priceRange =
        document.getElementById(
            "priceRange"
        );


    const priceRangeValue =
        document.getElementById(
            "priceRangeValue"
        );


    const clearFiltersButton =
        document.getElementById(
            "clearFiltersButton"
        );


    const emptyResetButton =
        document.getElementById(
            "catalogResetEmpty"
        );


    const mainFilterButtons =
        document.querySelectorAll(
            "[data-main-filter]"
        );


    const filterGroups =
        document.querySelectorAll(
            "[data-filter-show]"
        );


    const filterInputs =
        document.querySelectorAll(
            "[data-filter-key]"
        );


    const gridViewButton =
        document.getElementById(
            "gridViewButton"
        );


    const listViewButton =
        document.getElementById(
            "listViewButton"
        );


    const mobileProductCount =
        document.getElementById(
            "mobileProductCount"
        );



    /* =====================================================
       FILTER STATE
    ===================================================== */

    let activeMainFilter =
        "all";


    let currentPage =
        1;


    const productsPerPage =
        12;



    /* =====================================================
       FORMAT MONEY
    ===================================================== */

    function formatUSD(value) {

        return (
            "USD " +
            Number(value)
                .toLocaleString("en-US")
        );

    }


    function formatLKR(value) {

        return (
            "LKR " +
            Number(value)
                .toLocaleString("en-US")
        );

    }



    /* =====================================================
       MAIN FILTER COUNTS
    ===================================================== */

    const allFilterCount =
        document.getElementById(
            "allFilterCount"
        );


    const gemstoneFilterCount =
        document.getElementById(
            "gemstoneFilterCount"
        );


    const jewelryFilterCount =
        document.getElementById(
            "jewelryFilterCount"
        );


    if (allFilterCount) {

        allFilterCount.textContent =
            products.length;

    }


    if (gemstoneFilterCount) {

        gemstoneFilterCount.textContent =
            products.filter(
                product =>
                    product.kind ===
                    "gemstone"
            ).length;

    }


    if (jewelryFilterCount) {

        jewelryFilterCount.textContent =
            products.filter(
                product =>
                    product.kind ===
                    "jewelry"
            ).length;

    }



    /* =====================================================
       ACTIVE SECONDARY FILTERS
    ===================================================== */

    function getSelectedFilters() {

        const selected = {};


        filterInputs.forEach(
            input => {

                if (!input.checked) {
                    return;
                }


                const key =
                    input.dataset.filterKey;


                if (!selected[key]) {

                    selected[key] = [];

                }


                selected[key].push(
                    input.value
                );

            }
        );


        return selected;

    }



    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    function getFilteredProducts() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        const selectedFilters =
            getSelectedFilters();


        const maxPrice =
            Number(
                priceRange.value
            );


        let filtered =
            products.filter(
                product => {


                    /* Main Filter */

                    const mainMatch =
                        activeMainFilter === "all" ||
                        product.kind ===
                        activeMainFilter;


                    if (!mainMatch) {
                        return false;
                    }



                    /* Search */

                    const searchableText = [
                        product.gemstone,
                        product.productName,
                        product.productType,
                        product.month,
                        product.cut,
                        product.origin,
                        product.collection
                    ]
                    .join(" ")
                    .toLowerCase();


                    if (
                        query &&
                        !searchableText
                            .includes(query)
                    ) {

                        return false;

                    }



                    /* Price */

                    if (
                        product.usd >
                        maxPrice
                    ) {

                        return false;

                    }



                    /* Secondary Filters */

                    for (
                        const [
                            key,
                            values
                        ]
                        of
                        Object.entries(
                            selectedFilters
                        )
                    ) {

                        if (
                            !values.includes(
                                String(
                                    product[key]
                                )
                            )
                        ) {

                            return false;

                        }

                    }


                    return true;

                }
            );


        return filtered;

    }



    /* =====================================================
       SORT PRODUCTS
    ===================================================== */

    function sortProducts(productsToSort) {

        const list =
            [...productsToSort];


        switch (
            sortSelect.value
        ) {


            case "price-low":

                list.sort(
                    (a, b) =>
                        a.usd -
                        b.usd
                );

                break;



            case "price-high":

                list.sort(
                    (a, b) =>
                        b.usd -
                        a.usd
                );

                break;



            case "name":

                list.sort(
                    (a, b) =>
                        a.productName
                            .localeCompare(
                                b.productName
                            )
                );

                break;



            case "newest":

                list.sort(
                    (a, b) =>
                        b.newest -
                        a.newest
                );

                break;



            default:

                list.sort(
                    (a, b) =>
                        a.featured -
                        b.featured
                );

        }


        return list;

    }



    /* =====================================================
       PRODUCT CARD HTML
    ===================================================== */

    function createProductCard(product) {

        return `

            <article
                class="catalog-product-card"
                data-product-id="${product.id}"
                tabindex="0"
                aria-label="View ${product.productName}"
            >

                <div class="catalog-product-card__image">

                    <img
                        src="${product.image}"
                        alt="${product.productName}"
                        loading="lazy"
                    >


                    <span class="catalog-product-badge">
                        ${product.badge}
                    </span>


                    <button
                        class="catalog-wishlist-button"
                        type="button"
                        data-wishlist="${product.id}"
                        aria-label="Add ${product.productName} to wishlist"
                    >
                        ♡
                    </button>

                </div>


                <div class="catalog-product-card__content">

                    <p class="catalog-product-card__gemstone">
                        ${product.gemstone}
                    </p>


                    <h3>
                        ${product.productName}
                    </h3>


                    <p class="catalog-product-card__meta">
                        ${product.productType}
                        ·
                        ${product.cut}
                    </p>


                    <div class="catalog-product-card__price">

                        <span class="catalog-price-lkr">
                            ${formatLKR(product.lkr)}
                        </span>


                        <span class="catalog-price-separator"></span>


                        <strong class="catalog-price-usd">
                            ${formatUSD(product.usd)}
                        </strong>

                    </div>


                    <div class="catalog-product-card__actions">

                        <button
                            class="catalog-card-cart"
                            type="button"
                            data-add-cart="${product.id}"
                        >
                            Add to Cart
                        </button>


                        <button
                            class="catalog-card-buy"
                            type="button"
                            data-buy-now="${product.id}"
                        >
                            Buy Now
                        </button>

                    </div>

                </div>

            </article>

        `;

    }



    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts() {

        let filtered =
            getFilteredProducts();


        filtered =
            sortProducts(filtered);


        const totalProducts =
            filtered.length;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    totalProducts /
                    productsPerPage
                )
            );


        if (
            currentPage >
            totalPages
        ) {

            currentPage =
                totalPages;

        }


        const startIndex =
            (
                currentPage - 1
            ) *
            productsPerPage;


        const endIndex =
            startIndex +
            productsPerPage;


        const pageProducts =
            filtered.slice(
                startIndex,
                endIndex
            );


        productGrid.innerHTML =
            pageProducts
                .map(createProductCard)
                .join("");


        /* Empty State */

        if (
            totalProducts === 0
        ) {

            productGrid.style.display =
                "none";


            emptyState.classList.add(
                "active"
            );


            pagination.innerHTML =
                "";


            resultText.textContent =
                "No pieces found";


            mobileProductCount.textContent =
                "0 Pieces";


            bindProductInteractions();

            return;

        }


        productGrid.style.display =
            "";


        emptyState.classList.remove(
            "active"
        );


        const visibleStart =
            startIndex + 1;


        const visibleEnd =
            Math.min(
                endIndex,
                totalProducts
            );


        resultText.textContent =
            `Showing ${visibleStart} – ${visibleEnd} of ${totalProducts} pieces`;


        mobileProductCount.textContent =
            `${totalProducts} ${
                totalProducts === 1
                    ? "Piece"
                    : "Pieces"
            }`;


        renderPagination(
            totalPages
        );


        bindProductInteractions();

    }



    /* =====================================================
       PAGINATION
    ===================================================== */

    function renderPagination(
        totalPages
    ) {

        if (
            totalPages <= 1
        ) {

            pagination.innerHTML =
                "";

            return;

        }


        let html = `

            <button
                type="button"
                data-page="prev"
                ${
                    currentPage === 1
                        ? "disabled"
                        : ""
                }
                aria-label="Previous page"
            >
                ‹
            </button>

        `;


        for (
            let page = 1;
            page <= totalPages;
            page++
        ) {

            html += `

                <button
                    type="button"
                    data-page="${page}"
                    class="${
                        page === currentPage
                            ? "active"
                            : ""
                    }"
                >
                    ${page}
                </button>

            `;

        }


        html += `

            <button
                type="button"
                data-page="next"
                ${
                    currentPage ===
                    totalPages
                        ? "disabled"
                        : ""
                }
                aria-label="Next page"
            >
                ›
            </button>

        `;


        pagination.innerHTML =
            html;


        pagination
            .querySelectorAll(
                "[data-page]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const value =
                                button.dataset.page;


                            if (
                                value ===
                                "prev"
                            ) {

                                currentPage--;

                            } else if (
                                value ===
                                "next"
                            ) {

                                currentPage++;

                            } else {

                                currentPage =
                                    Number(value);

                            }


                            renderProducts();


                            document
                                .querySelector(
                                    ".catalog-section"
                                )
                                .scrollIntoView({
                                    behavior:
                                        "smooth"
                                });

                        }
                    );

                }
            );

    }



    /* =====================================================
       MAIN FILTER UI
    ===================================================== */

    function updateFilterGroups() {

        filterGroups.forEach(
            group => {

                const showFor =
                    group.dataset
                        .filterShow
                        .split(" ");


                const shouldShow =
                    showFor.includes(
                        activeMainFilter
                    );


                group.classList.toggle(
                    "is-hidden",
                    !shouldShow
                );

            }
        );

    }



    function clearSecondaryFilters() {

        filterInputs.forEach(
            input => {

                input.checked =
                    false;

            }
        );

    }



    mainFilterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {


                    mainFilterButtons
                        .forEach(
                            btn => {

                                btn.classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    activeMainFilter =
                        button.dataset
                            .mainFilter;


                    clearSecondaryFilters();


                    currentPage = 1;


                    updateFilterGroups();


                    renderProducts();

                }
            );

        }
    );



    /* =====================================================
       FILTER CHECKBOX EVENTS
    ===================================================== */

    filterInputs.forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    currentPage = 1;

                    renderProducts();

                }
            );

        }
    );



    /* =====================================================
       COLLAPSIBLE FILTER GROUPS
    ===================================================== */

    document
        .querySelectorAll(
            ".catalog-filter-heading"
        )
        .forEach(
            heading => {

                heading.addEventListener(
                    "click",
                    () => {

                        const group =
                            heading
                                .closest(
                                    ".catalog-filter-group"
                                );


                        group.classList.toggle(
                            "collapsed"
                        );


                        const indicator =
                            heading
                                .querySelector(
                                    "span:last-child"
                                );


                        indicator.textContent =
                            group.classList
                                .contains(
                                    "collapsed"
                                )
                                ? "+"
                                : "−";

                    }
                );

            }
        );



    /* =====================================================
       SEARCH
    ===================================================== */

    searchInput.addEventListener(
        "input",
        () => {

            currentPage = 1;


            clearSearchButton.style.display =
                searchInput.value
                    ? "block"
                    : "none";


            renderProducts();

        }
    );


    clearSearchButton.addEventListener(
        "click",
        () => {

            searchInput.value =
                "";


            clearSearchButton.style.display =
                "none";


            currentPage = 1;


            renderProducts();


            searchInput.focus();

        }
    );



    /* =====================================================
       SORT
    ===================================================== */

    sortSelect.addEventListener(
        "change",
        () => {

            currentPage = 1;

            renderProducts();

        }
    );



    /* =====================================================
       PRICE RANGE
    ===================================================== */

    function updatePriceLabel() {

        const value =
            Number(
                priceRange.value
            );


        if (
            value >=
            Number(
                priceRange.max
            )
        ) {

            priceRangeValue.textContent =
                `${formatUSD(value)}+`;

        } else {

            priceRangeValue.textContent =
                formatUSD(value);

        }

    }


    priceRange.addEventListener(
        "input",
        () => {

            updatePriceLabel();

            currentPage = 1;

            renderProducts();

        }
    );


    updatePriceLabel();



    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    function resetCatalogFilters() {

        activeMainFilter =
            "all";


        mainFilterButtons.forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .mainFilter ===
                        "all"
                );

            }
        );


        clearSecondaryFilters();


        searchInput.value =
            "";


        clearSearchButton.style.display =
            "none";


        sortSelect.value =
            "featured";


        priceRange.value =
            priceRange.max;


        currentPage =
            1;


        updatePriceLabel();


        updateFilterGroups();


        renderProducts();

    }


    clearFiltersButton.addEventListener(
        "click",
        resetCatalogFilters
    );


    emptyResetButton.addEventListener(
        "click",
        resetCatalogFilters
    );



    /* =====================================================
       GRID / LIST VIEW
    ===================================================== */

    gridViewButton.addEventListener(
        "click",
        () => {

            productGrid.classList.remove(
                "list-view"
            );


            gridViewButton.classList.add(
                "active"
            );


            listViewButton.classList.remove(
                "active"
            );

        }
    );


    listViewButton.addEventListener(
        "click",
        () => {

            productGrid.classList.add(
                "list-view"
            );


            listViewButton.classList.add(
                "active"
            );


            gridViewButton.classList.remove(
                "active"
            );

        }
    );



    /* =====================================================
       MOBILE FILTER DRAWER
    ===================================================== */

    const catalogSidebar =
        document.getElementById(
            "catalogSidebar"
        );


    const openFiltersButton =
        document.getElementById(
            "openFiltersButton"
        );


    const closeFiltersButton =
        document.getElementById(
            "closeFiltersButton"
        );


    const catalogFilterOverlay =
        document.getElementById(
            "catalogFilterOverlay"
        );


    function openFilterDrawer() {

        catalogSidebar.classList.add(
            "active"
        );


        catalogFilterOverlay.classList.add(
            "active"
        );


        body.style.overflow =
            "hidden";

    }


    function closeFilterDrawer() {

        catalogSidebar.classList.remove(
            "active"
        );


        catalogFilterOverlay.classList.remove(
            "active"
        );


        body.style.overflow =
            "";

    }


    openFiltersButton.addEventListener(
        "click",
        openFilterDrawer
    );


    closeFiltersButton.addEventListener(
        "click",
        closeFilterDrawer
    );


    catalogFilterOverlay.addEventListener(
        "click",
        closeFilterDrawer
    );



    /* =====================================================
       CART
    ===================================================== */

    function getCart() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    "rooCart"
                )
            ) || [];

        } catch {

            return [];

        }

    }


    function saveCart(cart) {

        localStorage.setItem(
            "rooCart",
            JSON.stringify(cart)
        );


        updateCartCount();

    }


    function updateCartCount() {

        const cart =
            getCart();


        const total =
            cart.reduce(
                (
                    sum,
                    item
                ) =>
                    sum +
                    Number(
                        item.quantity
                    ),
                0
            );


        document
            .querySelectorAll(
                ".cart-count"
            )
            .forEach(
                element => {

                    element.textContent =
                        total;

                }
            );

    }



    function addToCart(
        productId,
        quantity = 1
    ) {

        const product =
            products.find(
                item =>
                    item.id ===
                    productId
            );


        if (!product) return;


        const cart =
            getCart();


        const existing =
            cart.find(
                item =>
                    item.id ===
                    productId
            );


        if (existing) {

            existing.quantity +=
                quantity;

        } else {

            cart.push({

                id:
                    product.id,

                name:
                    product.productName,

                gemstone:
                    product.gemstone,

                image:
                    product.image,

                usd:
                    product.usd,

                lkr:
                    product.lkr,

                quantity:
                    quantity

            });

        }


        saveCart(cart);


        showCartFeedback();

    }



    function showCartFeedback() {

        document
            .querySelectorAll(
                ".cart-count"
            )
            .forEach(
                element => {

                    element.animate(
                        [
                            {
                                transform:
                                    "scale(1)"
                            },
                            {
                                transform:
                                    "scale(1.45)"
                            },
                            {
                                transform:
                                    "scale(1)"
                            }
                        ],
                        {
                            duration: 400
                        }
                    );

                }
            );

    }



    /* =====================================================
       BUY NOW
    ===================================================== */

    function buyNow(
        productId,
        quantity = 1
    ) {

        const product =
            products.find(
                item =>
                    item.id ===
                    productId
            );


        if (!product) return;


        sessionStorage.setItem(
            "rooBuyNow",
            JSON.stringify({

                id:
                    product.id,

                quantity:
                    quantity

            })
        );


        /*
         * When checkout.html is created,
         * this will open the selected product.
         */

        window.location.href =
            `checkout.html?product=${encodeURIComponent(
                product.id
            )}`;

    }



    /* =====================================================
       WISHLIST
    ===================================================== */

    function toggleWishlistButton(
        button
    ) {

        const active =
            button.classList
                .toggle(
                    "active"
                );


        button.textContent =
            active
                ? "♥"
                : "♡";

    }



    /* =====================================================
       PRODUCT MODAL ELEMENTS
    ===================================================== */

    const productModal =
        document.getElementById(
            "productModal"
        );


    const closeProductModalButton =
        document.getElementById(
            "closeProductModal"
        );


    const modalMainImage =
        document.getElementById(
            "modalMainImage"
        );


    const modalThumbnails =
        document.getElementById(
            "modalThumbnails"
        );


    const modalGemstoneName =
        document.getElementById(
            "modalGemstoneName"
        );


    const modalProductName =
        document.getElementById(
            "modalProductName"
        );


    const modalMeta =
        document.getElementById(
            "modalMeta"
        );


    const modalUsdPrice =
        document.getElementById(
            "modalUsdPrice"
        );


    const modalLkrPrice =
        document.getElementById(
            "modalLkrPrice"
        );


    const modalDescription =
        document.getElementById(
            "modalDescription"
        );


    const modalCarat =
        document.getElementById(
            "modalCarat"
        );


    const modalCut =
        document.getElementById(
            "modalCut"
        );


    const modalColor =
        document.getElementById(
            "modalColor"
        );


    const modalOrigin =
        document.getElementById(
            "modalOrigin"
        );


    const modalCertification =
        document.getElementById(
            "modalCertification"
        );


    const modalTreatment =
        document.getElementById(
            "modalTreatment"
        );


    const modalDimensions =
        document.getElementById(
            "modalDimensions"
        );


    const modalClarity =
        document.getElementById(
            "modalClarity"
        );


    const modalMetal =
        document.getElementById(
            "modalMetal"
        );


    const modalVariety =
        document.getElementById(
            "modalVariety"
        );


    const modalSpecies =
        document.getElementById(
            "modalSpecies"
        );


    const modalItemCode =
        document.getElementById(
            "modalItemCode"
        );


    const modalStockText =
        document.getElementById(
            "modalStockText"
        );


    const modalCertifiedBadge =
        document.getElementById(
            "modalCertifiedBadge"
        );


    const modalTrustCertification =
        document.getElementById(
            "modalTrustCertification"
        );


    const modalQuantityElement =
        document.getElementById(
            "modalQuantity"
        );


    const modalQuantityMinus =
        document.getElementById(
            "modalQuantityMinus"
        );


    const modalQuantityPlus =
        document.getElementById(
            "modalQuantityPlus"
        );


    const modalAddToCart =
        document.getElementById(
            "modalAddToCart"
        );


    const modalBuyNow =
        document.getElementById(
            "modalBuyNow"
        );


    const modalWishlist =
        document.getElementById(
            "modalWishlist"
        );


    let activeModalProduct =
        null;


    let modalQuantity =
        1;



    /* =====================================================
       OPEN PRODUCT MODAL
    ===================================================== */

    function openProductModal(
        productId
    ) {

        const product =
            products.find(
                item =>
                    item.id ===
                    productId
            );


        if (!product) {
            return;
        }


        activeModalProduct =
            product;


        modalQuantity =
            1;


        modalQuantityElement.textContent =
            modalQuantity;



        /* Main Product Info */

        modalGemstoneName.textContent =
            product.gemstone;


        modalProductName.textContent =
            product.productName;


        modalMeta.textContent =
            [
                product.cut,
                product.carat,
                product.variety,
                product.origin
            ].join("  •  ");


        modalUsdPrice.textContent =
            formatUSD(
                product.usd
            );


        modalLkrPrice.textContent =
            formatLKR(
                product.lkr
            );


        modalDescription.textContent =
            product.description;



        /* Specs */

        modalCarat.textContent =
            product.carat;


        modalCut.textContent =
            product.cut;


        modalColor.textContent =
            product.color;


        modalOrigin.textContent =
            product.origin;


        modalCertification.textContent =
            product.certification;


        modalTreatment.textContent =
            product.treatment;


        modalDimensions.textContent =
            product.dimensions;


        modalClarity.textContent =
            product.clarity;


        modalMetal.textContent =
            product.metal;


        modalVariety.textContent =
            product.variety;


        modalSpecies.textContent =
            product.species;


        modalItemCode.textContent =
            product.id;


        modalCertifiedBadge.textContent =
            `${product.certification} Certified`;


        modalTrustCertification.textContent =
            product.certification;


        modalStockText.textContent =
            product.stock === 1
                ? "Only 1 piece available"
                : `${product.stock} pieces available`;



        /* Gallery */

        const gallery =
            product.gallery?.length
                ? product.gallery
                : [product.image];


        modalMainImage.src =
            gallery[0];


        modalMainImage.alt =
            product.productName;


        modalThumbnails.innerHTML =
            gallery
                .slice(0, 5)
                .map(
                    (
                        image,
                        index
                    ) => `

                        <button
                            class="product-modal__thumbnail ${
                                index === 0
                                    ? "active"
                                    : ""
                            }"
                            type="button"
                            data-modal-image="${image}"
                        >

                            <img
                                src="${image}"
                                alt="${product.productName} view ${index + 1}"
                            >

                        </button>

                    `
                )
                .join("");



        modalThumbnails
            .querySelectorAll(
                "[data-modal-image]"
            )
            .forEach(
                thumbnail => {

                    thumbnail.addEventListener(
                        "click",
                        () => {


                            modalThumbnails
                                .querySelectorAll(
                                    ".product-modal__thumbnail"
                                )
                                .forEach(
                                    item => {

                                        item.classList
                                            .remove(
                                                "active"
                                            );

                                    }
                                );


                            thumbnail
                                .classList
                                .add(
                                    "active"
                                );


                            modalMainImage.src =
                                thumbnail.dataset
                                    .modalImage;

                        }
                    );

                }
            );



        /* Open */

        productModal.classList.add(
            "active"
        );


        productModal.setAttribute(
            "aria-hidden",
            "false"
        );


        body.classList.add(
            "product-modal-open"
        );


        setTimeout(
            () => {

                closeProductModalButton
                    .focus();

            },
            100
        );

    }



    /* =====================================================
       CLOSE PRODUCT MODAL
    ===================================================== */

    function closeProductModal() {

        productModal.classList.remove(
            "active"
        );


        productModal.setAttribute(
            "aria-hidden",
            "true"
        );


        body.classList.remove(
            "product-modal-open"
        );


        activeModalProduct =
            null;

    }


    closeProductModalButton.addEventListener(
        "click",
        closeProductModal
    );


    document
        .querySelectorAll(
            "[data-close-modal]"
        )
        .forEach(
            element => {

                element.addEventListener(
                    "click",
                    closeProductModal
                );

            }
        );



    /* =====================================================
       MODAL QUANTITY
    ===================================================== */

    modalQuantityMinus.addEventListener(
        "click",
        () => {

            if (
                modalQuantity > 1
            ) {

                modalQuantity--;

            }


            modalQuantityElement.textContent =
                modalQuantity;

        }
    );


    modalQuantityPlus.addEventListener(
        "click",
        () => {

            if (!activeModalProduct) {
                return;
            }


            if (
                modalQuantity <
                activeModalProduct.stock
            ) {

                modalQuantity++;

            }


            modalQuantityElement.textContent =
                modalQuantity;

        }
    );



    /* =====================================================
       MODAL ACTIONS
    ===================================================== */

    modalAddToCart.addEventListener(
        "click",
        () => {

            if (!activeModalProduct) {
                return;
            }


            addToCart(
                activeModalProduct.id,
                modalQuantity
            );

        }
    );


    modalBuyNow.addEventListener(
        "click",
        () => {

            if (!activeModalProduct) {
                return;
            }


            buyNow(
                activeModalProduct.id,
                modalQuantity
            );

        }
    );


    modalWishlist.addEventListener(
        "click",
        () => {

            toggleWishlistButton(
                modalWishlist
            );

        }
    );



    /* =====================================================
       PRODUCT CARD INTERACTIONS
    ===================================================== */

    function bindProductInteractions() {


        /* Card Click */

        document
            .querySelectorAll(
                ".catalog-product-card"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        event => {


                            if (
                                event.target.closest(
                                    "button"
                                )
                            ) {

                                return;

                            }


                            openProductModal(
                                card.dataset
                                    .productId
                            );

                        }
                    );


                    card.addEventListener(
                        "keydown",
                        event => {


                            if (
                                event.key ===
                                "Enter"
                            ) {

                                openProductModal(
                                    card.dataset
                                        .productId
                                );

                            }

                        }
                    );

                }
            );



        /* Wishlist */

        document
            .querySelectorAll(
                "[data-wishlist]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();


                            toggleWishlistButton(
                                button
                            );

                        }
                    );

                }
            );



        /* Add Cart */

        document
            .querySelectorAll(
                "[data-add-cart]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();


                            addToCart(
                                button.dataset
                                    .addCart,
                                1
                            );

                        }
                    );

                }
            );



        /* Buy Now */

        document
            .querySelectorAll(
                "[data-buy-now]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();


                            buyNow(
                                button.dataset
                                    .buyNow,
                                1
                            );

                        }
                    );

                }
            );

    }



    /* =====================================================
       KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {


            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            if (
                productModal.classList
                    .contains(
                        "active"
                    )
            ) {

                closeProductModal();

                return;

            }


            if (
                catalogSidebar.classList
                    .contains(
                        "active"
                    )
            ) {

                closeFilterDrawer();

                return;

            }


            if (
                mobileMenu &&
                mobileMenu.classList
                    .contains(
                        "active"
                    )
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    document.addEventListener(
        "error",
        event => {

            if (
                event.target.tagName !==
                "IMG"
            ) {

                return;

            }


            event.target.style.background =
                "#062d1d";

        },
        true
    );



    /* =====================================================
       INITIALISE
    ===================================================== */

    updateFilterGroups();

    updateCartCount();

    renderProducts();

});