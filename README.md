# 🍔 Olé Burgers — Premium Restaurant Website

A premium, single-page, fully responsive restaurant website for a burger-focused
restaurant. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**,
and **Framer Motion** — designed to feel like a custom, award-worthy landing page
while staying fast, accessible, SEO-optimized, and easy for the owner to maintain.

> **Documentation-first project.** The single source of truth for every design and
> architecture decision lives in [`project-context.md`](./project-context.md).
> Read it before making changes and keep it updated.

---

## ✨ Features

- **Sticky, blur-on-scroll navigation** with active-section highlighting and an
  animated mobile menu.
- **Cinematic hero** with parallax, floating accents, dual CTAs, and a scroll cue.
- **Featured Burgers** cards with image zoom + lift on hover.
- **Full interactive menu** — sticky category tabs, live search, and animated
  filtering across 8 categories.
- **About** with story, stats, and layered imagery.
- **Why Choose Us** feature grid on a premium dark canvas.
- **Gallery** — masonry layout, hover zoom, keyboard-navigable lightbox, lazy loading.
- **Testimonials** carousel with autoplay, ratings, and dot navigation.
- **Contact** — map embed, live "today" opening hours, WhatsApp/phone/email, socials.
- **UX polish** — scroll progress bar, back-to-top, floating order button, ripple
  buttons, section reveals, smooth scrolling.
- **SEO** — metadata, OpenGraph/Twitter cards, Restaurant JSON-LD, `robots`,
  `sitemap`, web manifest, generated favicon + OG image.
- **Accessibility** — semantic HTML, ARIA labels, focus states, keyboard support,
  and `prefers-reduced-motion` handling.

---

## 🛠 Technologies

| Purpose        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | Next.js 14 (App Router)         |
| Language       | TypeScript (strict)             |
| Styling        | Tailwind CSS v3 (custom tokens) |
| Animation      | Framer Motion                   |
| Icons          | react-icons                     |
| Images         | `next/image` (AVIF/WebP)        |
| Fonts          | `next/font` — IM Fell English, Cinzel, Inter |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.17+** (Node 20+ recommended)
- npm (bundled with Node)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open <http://localhost:3000>.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📁 Folder Structure

```
ole_burgers/
├── project-context.md      # Source of truth (read first!)
├── README.md
├── app/                    # App Router: layout, page, SEO routes, favicon/OG
│   ├── layout.tsx          # Fonts + global metadata
│   ├── page.tsx            # Section composition
│   ├── robots.ts · sitemap.ts · manifest.ts
│   ├── icon.tsx · opengraph-image.tsx
├── components/             # Reusable UI + chrome
│   ├── ui/                 # Container, Button, Reveal, SectionHeading
│   ├── Navbar · Footer · ScrollProgress · BackToTop · FloatingOrderButton · JsonLd
├── sections/               # Page sections (Hero, Menu, Gallery, …)
├── hooks/                  # useActiveSection, useMediaQuery, useLockBodyScroll
├── lib/                    # Data + helpers (site, menu, content, animations, utils)
├── types/                  # Shared TypeScript types
├── styles/                 # globals.css (Tailwind layers + tokens)
└── public/assets/images/   # Real photos live here
```

---

## 🎨 Customization Guide

Almost everything is **data-driven** — edit one file, not JSX.

### Business details, contact, hours, nav, socials

Edit [`lib/site.ts`](./lib/site.ts). Fields marked `REPLACE` are placeholders:

- `phone`, `phoneHref`, `whatsapp` (digits only, international), `email`
- `address` + `geo` + `mapEmbedSrc` + `mapLink`
- `hours` (per day; set `closed: true` to mark a day closed)
- `nav` and `socials`

### Colors, fonts, shadows, radii

Design tokens live in [`tailwind.config.ts`](./tailwind.config.ts):

- `colors.brand` (red), `colors.charcoal`, `colors.gold`, `cream`, `mist`
- `fontFamily.heading` / `display` / `sans`
- `boxShadow`, `borderRadius`, keyframes/animations

To swap the sub-heading font from **Cinzel** to a licensed **Trajan Pro**, add the
font in `app/layout.tsx` and point `--font-cinzel` at it.

---

## 🖼 Image Replacement Guide

All current images are high-quality **Unsplash placeholders** marked with
`REPLACE WITH REAL IMAGE` comments.

1. Export the restaurant's real photos (e.g. from the **Google Maps** listing →
   Photos, at the highest resolution).
2. Drop them into `public/assets/images/` (see that folder's README for suggested
   filenames).
3. Update the image paths in the data files:
   - Hero: `sections/Hero.tsx`
   - Featured + About + Gallery: `lib/content.ts`
   - Menu item photos: `lib/menu.ts`
4. Use a local path like `/assets/images/hero-burger.jpg`.

> Local images need **no** `next.config` changes. If you keep any remote URLs,
> add their hostname to `images.remotePatterns` in
> [`next.config.mjs`](./next.config.mjs).

---

## 🍔 Menu Editing Guide

Edit [`lib/menu.ts`](./lib/menu.ts):

- **Categories** → `menuCategories` (`id`, `label`, `emoji`, optional `blurb`).
- **Items** → `menuItems`. Each item:
  ```ts
  {
    id: 'unique-id',
    name: 'Burger Name',
    description: 'Short, appetizing description.',
    price: 12.5,
    category: 'signature',   // must match a category id
    image: '/assets/images/…', // optional; omit to show a big emoji
    emoji: '🍔',               // fallback when no image
    popular: true,             // adds a "Popular" badge
    spicy: true,               // adds a 🔥 marker
    veg: true,                 // adds a 🌿 marker
    tags: ['Best Value'],      // optional chips
  }
  ```

Currency/format is centralized in `formatPrice()` in
[`lib/utils.ts`](./lib/utils.ts).

---

## 🔎 SEO Guide

- **Global metadata** (title, description, OG, Twitter, robots) →
  `app/layout.tsx`. Update `site.url` in `lib/site.ts` to your production domain
  so canonical/OG URLs resolve.
- **Structured data** (Restaurant JSON-LD, incl. hours + menu) →
  `components/JsonLd.tsx`, generated from your data automatically.
- **Crawling** → `app/robots.ts` and `app/sitemap.ts`.
- **Icons / social preview** → `app/icon.tsx` and `app/opengraph-image.tsx` are
  generated at build time (edit to customize).
- **PWA** → `app/manifest.ts`.

---

## 🌐 Deployment

Optimized for **Vercel**:

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel — the framework is auto-detected.
3. Set your production domain and update `site.url` in `lib/site.ts`.
4. Deploy.

Also works on any Node host: `npm run build` then `npm start`. For a fully static
export, the site avoids server-only features, but the generated icon/OG routes
require the Node runtime — keep the default (server) target on Vercel/Node.

---

## ♿ Accessibility

- Semantic landmarks, a "skip to menu" link, and labeled interactive elements.
- Full keyboard support (nav, carousel, lightbox with arrow keys + Esc).
- Visible focus rings and WCAG-minded color contrast.
- Motion is disabled for users with `prefers-reduced-motion`.

---

## 📄 License & Credits

- Placeholder imagery: [Unsplash](https://unsplash.com) (replace before launch).
- Built for demonstration as a custom premium restaurant site.
- **Powered by Axenity.**
