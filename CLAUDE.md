# CLAUDE.md

This file provides guidance to Claude Code when working on this project.

## Project Overview

**Tradish** - "Where tradition meets the dish." An elegant single-page restaurant website for an intimate 10-person apartment restaurant in Budapest's District VII (Rumbach Sebestyén utca). The site will be hosted on GitHub Pages.

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern layout (Flexbox/Grid), CSS animations, variables
- **Vanilla JavaScript**: No frameworks
- **Fonts**: Google Fonts (Playfair Display + Lora)
- **Hosting**: GitHub Pages

## Design Direction

**Aesthetic**: Refined minimalism with European elegance

**Typography**:
- Display: "Playfair Display" (elegant serif for headings)
- Body: "Lora" (sophisticated serif for content)

**Color Palette**:
- Deep charcoal: `#1a1a1a` (text)
- Cream/off-white: `#faf9f6` (background)
- Warm gold/brass: `#c9a961` (accents)
- Soft gray: `#e8e7e4` (subtle divisions)

## File Structure

```
lakasetterem/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Interactivity + translations
├── images/
│   ├── galery/         # Original high-res gallery images (1-2MB each)
│   ├── optimized/      # Compressed images for web (45-190KB each)
│   └── backup/         # Backup of original hero images
├── .gitignore
├── CLAUDE.md           # This file
└── Restaurant Website Development Plan.md
```

## Key Requirements

- Mobile-first responsive design
- Smooth scroll animations
- Accessibility conscious
- GitHub Pages compatible
- Budapest location-specific touches (thermal culture, European elegance)

## Restaurant Details

- **Location**: Rumbach Sebestyén u., Budapest (District VII)
- **Capacity**: 10 guests
- **Type**: Apartment-based intimate dining experience

## Image Optimization

Images are optimized for performance (LCP). When adding new images:

1. **Add originals** to `images/galery/` (keep high-res for lightbox/print)
2. **Generate optimized versions** using ImageMagick:
   ```bash
   # For gallery images (800px wide)
   magick "images/galery/new-image.jpg" -resize 800x -quality 70 -strip "images/optimized/new-image-800.jpg"

   # For hero images (multiple sizes)
   magick "images/hero.jpg" -resize 768x -quality 70 -strip "images/optimized/hero-768.jpg"
   magick "images/hero.jpg" -resize 1280x -quality 70 -strip "images/optimized/hero-1280.jpg"
   magick "images/hero.jpg" -resize 1920x -quality 75 -strip "images/optimized/hero-1920.jpg"
   ```
3. **Update references** in `index.html` to use `images/optimized/` paths
4. **Hero responsive loading** is handled in `css/style.css` with media queries

## Translation System (i18n)

The site supports Hungarian (default) and English. Translations are managed in `js/script.js`.

### How it works:
- HTML elements use `data-i18n` attributes: `<span data-i18n="nav.menu">Menü</span>`
- Hungarian text is the default in HTML
- Translations are stored in `translations` object in `script.js`
- Language preference saved to `localStorage`
- Language toggle button in navigation

### When adding new translatable content:
1. Add Hungarian text directly in HTML with `data-i18n` attribute
2. Add both HU and EN translations to `js/script.js`:
   ```javascript
   hu: {
       section: {
           newKey: 'Magyar szöveg'
       }
   },
   en: {
       section: {
           newKey: 'English text'
       }
   }
   ```
3. Keep translation keys consistent between HU and EN objects
