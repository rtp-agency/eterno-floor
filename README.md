# ETERNO design — website

Premium SPC flooring website for **ETERNO design** (Spanish market, B2B).
Built with **Next.js 15** (App Router, TypeScript), no runtime dependencies beyond React.

## Languages
Español (default), Português, Русский, English. Locale lives in the URL: `/es`, `/pt`, `/ru`, `/en`.
`/` redirects to the visitor's browser language (falls back to `es`). Middleware: `src/middleware.ts`.

## Structure
```
src/
  app/
    layout.tsx            pass-through root layout
    globals.css           full theme (dark-wood B2B)
    [lang]/
      layout.tsx          <html>/<body>, header + footer, SEO metadata
      page.tsx            home (hero, performance, 10 features, collections, partner, contact)
      catalog/page.tsx    filterable catalogue
  components/             Header, Footer, Logo, LanguageSwitcher, FeatureIcon, CatalogBrowser (filters + lightbox)
  lib/
    i18n.ts               locales config
    dictionaries.ts       all UI copy in 4 languages
    products.ts           5 collections, 47 decors, contact details
public/products/          optimised webp (per decor: <slug>.webp + <slug>-thumb.webp)
materials/                original photos (git-ignored; source for the webp above)
```

## Catalogue data
47 decors across 5 collections (Galerie, Gravity, Hand Scraped, Visage, Rivera), extracted from the
sample-label photos. Filter by collection and by colour tone. Each decor opens a lightbox with full
specs (thickness, wear layer, size, bevel, pack, ref.) and a WhatsApp "request a sample" button.

Decor names: collections with Cyrillic-origin labels (Galerie, Hand Scraped) show a localised wood word
+ proper name (e.g. `Roble Amato` / `Carvalho Amato` / `Дуб Amato` / `Oak Amato`); the rest use their
Latin decor names directly. See `productName()` in `src/lib/products.ts`.

## Regenerating optimised images
Source photos live in `materials/`. The webp files in `public/products/` were produced with `sharp`
(top ~70 % of each plank cropped to drop the label). The one-off script is kept in the scratchpad;
re-run it against `materials/` if the source photos change.

## Contact (from the flyer)
- Web: eternodesigns.com
- WhatsApp / phone: +34 624 412 798
- Email: clearfloor2014@gmail.com

## Develop / build
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Deploy
Static-friendly (all pages prerendered). Deploy to Vercel (`vercel`) or any Node host. Images are
served pre-optimised, so `next/image` optimisation is disabled in `next.config.mjs`.
```
