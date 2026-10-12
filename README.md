# Roo Gemstones & Jewellery — Home Page Front-End Demo

A responsive, mobile-first cinematic home-page concept using plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure
- `styles.css` — responsive luxury UI + cinematic transitions
- `script.js` — intro, hero slider, mobile menu, scroll reveal, birthstone interaction
- `assets/` — Roo logo and lightweight sample SVG artwork

## Run
Open `index.html` directly, or use a local server for the smoothest result:

```bash
python -m http.server 8000
```
Then open `http://localhost:8000/`.

## Notes
- The intro is shown once per browser tab/session using `sessionStorage`.
- `prefers-reduced-motion` is supported.
- Mobile layout is intentionally different from desktop, not just a scaled-down desktop view.
- All product names/prices are sample UI content only.
- Product, authentication, cart and payment features are front-end placeholders and are ready to be connected to a backend/API later.
- Replace SVG demo artwork with real optimised `.avif`, `.webp` or video assets when production media is ready.
