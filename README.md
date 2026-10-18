# denver.log — Creative Portfolio

A responsive portfolio/blog for graphic design, custom jersey design, Canva layouts, and coding/web projects.

## Repository structure

- `index.html` — page content and image references
- `styles.css` — dark editorial layout, responsive styling, hover effects
- `script.js` — small contact-link helper
- `assets/` — project image placeholders and image guide

## Replace the SVG placeholders with PNG images

The showcase currently uses these SVG placeholder files:

- `assets/graphic-design.svg`
- `assets/jersey-design.svg`
- `assets/canva-design.svg`
- `assets/coding-project.svg`

To use your own PNG, upload it into `assets/` (for example, `graphic-design.png`) and change the matching image's `src` in `index.html` from `.svg` to `.png`:

```html
<img src="assets/graphic-design.png" alt="Graphic design project" loading="lazy">
```

Repeat for the other sections. **Changing an extension does not convert an image**—the PNG must actually be uploaded, and the path must match its exact filename. PNG and SVG images can be mixed.

## Publish with GitHub Pages

1. Download and extract the ZIP.
2. Upload the *contents* of this folder to the root of your GitHub repository (so `index.html` is at the root, not inside an extra nested folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. After GitHub Pages publishes, use that URL to view the site or embed it in Google Sites.

## Configure the contact link

In `index.html`, find `id="contact-link"` and replace `href="#"` with your real destination, such as `mailto:you@example.com` or a social profile URL.
