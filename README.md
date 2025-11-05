# Vladyslav Abramchuk — Minimal Resume & Portfolio (Landing)

A minimal, creative landing-style resume site built with vanilla HTML, Bootstrap 5, and small partials loaded via JavaScript. Dark theme with mint accent, typographic hero, two‑column About/Skills, clean project grid, and a contact form.

## Quick Start (Local Preview)

Partials are loaded with `fetch()`, so you must run a local server (not `file://`). In PowerShell:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500/`.

## Tech Stack

- HTML + Bootstrap 5 (CDN) and Bootstrap Icons
- Vanilla JS partials loader and tooltip initialization (`src/scripts/main.js`)
- Custom CSS theme (`src/styles/theme.css`)

## Project Structure

- `index.html`: Root page that includes partials
- `src/partials/`
  - `navbar.html`, `hero.html`, `about-skills.html`, `portfolio.html`, `contact.html`, `footer.html`
- `src/styles/`
  - `theme.css`: Dark theme, layout, hero overlays, pills, cards, forms
- `src/scripts/`
  - `main.js`: Loads partials and initializes Bootstrap tooltips after load
- `src/assets/`: Put your images, icons, and fonts here (optional subfolders exist)

## Customization

### Hero
- Avatar image: edit `src/partials/hero.html` `<img src="...">`
- Background image: set CSS variable inline `--hero-bg` on the `<header class="hero">`
- Headline/subtitle/CTAs: edit in `src/partials/hero.html`

### About & Skills (Two Columns)
- Content lives in `src/partials/about-skills.html`
- Skill pills: each pill has `data-bs-toggle="tooltip"` and a `title` (English descriptions)
- Hover effect styles are in `.pill` rules in `src/styles/theme.css`

### Portfolio
- Update cards (image, title, description) in `src/partials/portfolio.html`

### Contact Form
- Markup in `src/partials/contact.html`
- Replace `action="https://formspree.io/f/your-id"` with your Formspree ID, Netlify Forms, EmailJS, or your backend endpoint

## Deployment

Host as static files (GitHub Pages, Netlify, Vercel, S3). Ensure files are served over HTTP(S) so `fetch()` can load partials.

### GitHub Pages (quick)
1. Push this repository
2. In repo Settings → Pages, select branch “main” (or default) / root
3. Wait for publish; open the provided URL

## Credits

- Design & content: Vladyslav Abramchuk
- Bootstrap 5 and Bootstrap Icons (via CDN)
