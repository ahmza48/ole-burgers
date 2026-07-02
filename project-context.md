# Olé Burgers — Project Context

> **Single source of truth for the entire project.**
> Read this file before modifying any code. Update it after every change.
> Last updated: 2026-07-02

---

## Project Overview

- **Project name:** Olé Burgers — Premium Burger Restaurant Website
- **Goal:** A premium, one-page, responsive marketing website that drives orders and reservations, communicates craft/quality, and is trivial for the owner to maintain (edit menu + swap images).
- **Business type:** Quick-service premium burger restaurant ("luxury fast food").
- **Client requirements:**
  - Single-page site with sticky navigation and smooth scrolling.
  - Sections: Nav, Hero, Featured Burgers, Full Menu (most important), About, Gallery, Why Choose Us, Testimonials, Contact, Footer.
  - Premium/Apple-level polish, award-winning micro-interactions, not a template.
  - Fast, accessible (WCAG-friendly), SEO-optimized.
  - Easy image + menu editing for a non-technical owner.
  - "Powered by Axenity" in the footer.
- **Theme:** Modern minimalism + luxury fast-food branding. Clean, bright, appetite-driven, confident.
- **Color palette:** White (primary), Red (secondary/brand), Dark Charcoal (accent/text), very light warm gray backgrounds, subtle gold highlights.
- **Typography:** IM Fell English (headings), Cinzel (sub-headings — Trajan Pro substitute), Inter (body).
- **Target audience:** Urban food lovers 18–45, families, students, professionals seeking a premium yet fast burger experience; mobile-first browsers who order via phone/WhatsApp.
- **User journey:**
  1. Land on Hero → instant appetite appeal + slogan → primary CTA "Order Now" / secondary "View Menu".
  2. Scroll to Featured Burgers → best sellers hook interest.
  3. Explore Full Menu → filter by category → decide.
  4. Build trust via About + Why Choose Us + Testimonials + Gallery.
  5. Convert at Contact (call / WhatsApp / directions) or via the always-present sticky Order button.
- **Website structure:** See "Website Structure" below.

---

## Design Language

- **Primary colors:** White `#FFFFFF`, warm off-white/cream `#F8F7F4`.
- **Secondary colors:** Brand red scale (DEFAULT `#D62828`, deep `#B41D1D`).
- **Accent colors:** Dark charcoal `#161616` (text + dark sections), subtle gold `#C6A15B` (highlights, dividers, star ratings).
- **Backgrounds:** White + very light gray `#F5F5F3`/`#F8F7F4`; occasional charcoal sections for contrast (Hero accents, Footer).
- **Typography:**
  - Display headings → **IM Fell English** (`--font-imfell`), used large with tight leading.
  - Sub-headings / eyebrows → **Cinzel** (`--font-cinzel`), uppercase, wide letter-spacing (Trajan Pro alternative).
  - Body → **Inter** (`--font-inter`), generous line-height (1.6–1.7).
- **Button styles:**
  - Primary: solid brand red, white text, pill radius, soft red glow on hover, subtle scale + ripple.
  - Secondary: outline/ghost with charcoal border, fills on hover.
  - Tertiary/link: underline-on-hover with gold accent.
- **Border radius:** Pills for buttons (`rounded-full`), cards `rounded-3xl` (24px) to `rounded-2xl`, images `rounded-2xl`.
- **Shadows:** Soft layered shadows (`shadow-soft`), elevated hover (`shadow-lift`), colored glow for CTAs (`shadow-glow`).
- **Hover effects:** Card lift + image zoom, button glow + scale, link underline reveal, gallery zoom + lightbox.
- **Animation philosophy:** Purposeful, restrained, premium. Entrance reveals on scroll (fade/slide/scale), gentle floating accents, parallax where tasteful. Everything respects `prefers-reduced-motion`.
- **Spacing system:** Tailwind 4px scale; section vertical rhythm `py-20 md:py-28 lg:py-32`; consistent container gutters.
- **Grid system:** Centered container max-w ~1200–1280px; responsive CSS grid (1 → 2 → 3/4 columns) for cards/menu/gallery.
- **Responsive strategy:** Mobile-first. Breakpoints sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536. Fluid type via clamp for hero. No layout breaks from 320px to ultra-wide.

---

## Components

Reusable building blocks (in `components/`):

- [x] `ui/Container` — centered max-width wrapper.
- [x] `ui/Button` — primary/secondary/ghost variants, ripple + motion.
- [x] `ui/SectionHeading` — eyebrow + title + subtitle, animated reveal.
- [x] `ui/Reveal` — scroll-triggered entrance wrapper (Framer Motion).
- [x] `Navbar` — sticky, blur-on-scroll, active-section highlight, mobile menu.
- [x] `ScrollProgress` — top progress bar.
- [x] `BackToTop` — appears after scroll.
- [x] `FloatingOrderButton` — always-visible sticky CTA (mobile emphasis).
- [x] `Footer` — brand, quick links, socials, "Powered by Axenity".

Section components (in `sections/`):

- [x] `Hero`, `FeaturedBurgers`, `Menu`, `About`, `Gallery`, `WhyChooseUs`, `Testimonials`, `Contact`.

Data-driven cards: `BurgerCard`, `MenuItemCard`, `TestimonialCard`, `GalleryItem` (co-located within sections or `components/`).

---

## Assets

Checklist (place real files in `public/assets/images/`, then update this list):

- [ ] Logo (SVG preferred) — currently a CSS/text logo mark.
- [ ] Hero burger image — placeholder Unsplash.
- [ ] Featured burger images (x3) — placeholder Unsplash.
- [ ] Menu item images — placeholder Unsplash / emoji fallback.
- [ ] About / kitchen images — placeholder Unsplash.
- [ ] Gallery images (x8+) — placeholder Unsplash (pull real from Google Maps listing later).
- [ ] Testimonial avatars — placeholder / initials.
- [x] Icons — via `react-icons`.
- [x] Background textures — CSS gradients/noise (no binary asset needed).
- [ ] Favicon / OG image — generated `icon`/`opengraph-image` (to add).

> Real images: pull from the restaurant's Google Maps listing later and drop into `public/assets/images/`, then replace the Unsplash URLs in `lib/*` data. All placeholders are marked with `REPLACE WITH REAL IMAGE` comments.

---

## TODO

Live task list (kept in sync with the assistant's tracker):

- [x] project-context.md
- [x] Scaffold Next.js config & tooling
- [x] Install dependencies
- [x] Global styles, fonts, root layout
- [x] Data, types, lib utils, animation variants
- [x] Core UI components & hooks
- [x] Navbar & scroll utilities
- [x] Hero
- [x] Featured Burgers
- [x] Full Menu
- [x] About & Why Choose Us
- [x] Gallery & Testimonials
- [x] Contact & Footer
- [x] Page assembly & SEO (robots, sitemap, JSON-LD, favicon, OG)
- [x] README & build verification

---

## Decisions Log

- **2026-07-02** — Chose **Cinzel** as the sub-heading font because **Trajan Pro** is a commercial Adobe font unavailable via `next/font/google`; Cinzel is the closest free classical-Roman alternative and pairs well with IM Fell English.
- **2026-07-02** — Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS v3 + Framer Motion + react-icons**. Tailwind v3 chosen over v4 for a well-understood custom design-token config (`tailwind.config.ts`).
- **2026-07-02** — Global CSS lives in `styles/globals.css` (imported in `app/layout.tsx`) to honor the requested `styles/` folder while keeping Next conventions.
- **2026-07-02** — Placeholder images use remote Unsplash URLs (configured in `next.config.mjs` `remotePatterns`) so the site renders before real photos exist. Real photos will live in `public/assets/images/`.
- **2026-07-02** — Menu, site config, testimonials, and gallery are **data-driven** (`lib/*.ts`) so the owner edits one file, not JSX.
- **2026-07-02** — Contact form is intentionally lightweight (mailto/WhatsApp deep links) — no backend, keeping the site static and fast; primary conversion is phone/WhatsApp/directions.
- **2026-07-02** — Pinned **Next.js to 14.2.35** (from 14.2.5) to patch the disclosed security vulnerability. `npm audit` still reports advisories whose only offered remediation is a major jump to `next@16` (breaking) plus a dev-only `glob`/ESLint transitive issue; these are not applied to avoid a risky major upgrade. Most are build-time/self-hosted concerns already mitigated on Vercel's managed runtime. Tracked in Known Issues.
- **2026-07-02** — Set `adjustFontFallback: false` on IM Fell English (`next/font`) because it lacks fallback override metrics, which otherwise emits a build warning. Cosmetic; no layout shift in practice.
- **2026-07-02** — Typed the shared easing curve as an explicit cubic-bezier tuple `[number, number, number, number]` (Framer Motion's `Transition['ease']` index type isn't exported in v11).
- **2026-07-02** — Verified: `next build` passes clean (type-check + lint + prerender of all 9 routes); homepage First Load JS ≈ 157 kB. Visually verified Hero + Menu in-browser (placeholder images can't load in the offline sandbox, but layout/typography/interactions confirmed).

---

## File Structure

```
ole_burgers/
├── project-context.md
├── README.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── icon.tsx            # generated favicon
│   └── opengraph-image.tsx # generated OG image
├── components/
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Reveal.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   └── FloatingOrderButton.tsx
├── sections/
│   ├── Hero.tsx
│   ├── FeaturedBurgers.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── hooks/
│   ├── useActiveSection.ts
│   ├── useMediaQuery.ts
│   └── useLockBodyScroll.ts
├── lib/
│   ├── site.ts          # name, contact, hours, socials, nav
│   ├── menu.ts          # categories + items
│   ├── content.ts       # featured, why-us, testimonials, gallery, about
│   ├── animations.ts    # Framer Motion variants
│   └── utils.ts         # cn() + helpers
├── types/
│   └── index.ts
├── styles/
│   └── globals.css
└── public/
    └── assets/
        └── images/      # real photos go here (README placeholder)
```

---

## Completed Features

- [x] Documentation-first `project-context.md`.
- [x] Next.js App Router + TS + Tailwind + Framer Motion scaffold.
- [x] Design tokens (colors, fonts, shadows, radii, keyframes).
- [x] Sticky blur navbar with active-section highlight + mobile menu.
- [x] Animated Hero with floating accents + dual CTA.
- [x] Featured Burgers cards with hover lift/zoom.
- [x] Full Menu with sticky category tabs, filtering, search, animated transitions.
- [x] About with story + stats.
- [x] Gallery with masonry + lightbox + lazy loading.
- [x] Why Choose Us feature grid.
- [x] Testimonials carousel with ratings.
- [x] Contact with map embed, hours, WhatsApp/phone, socials.
- [x] Footer with quick links + "Powered by Axenity".
- [x] Scroll progress bar, back-to-top, floating order CTA.
- [x] SEO: metadata, OpenGraph/Twitter, JSON-LD Restaurant, robots, sitemap, manifest, generated favicon + OG image.
- [x] Accessibility: semantic HTML, ARIA, focus states, reduced-motion.

---

## Known Issues

- Placeholder images are remote (Unsplash); replace with real Google Maps photos for production. (They will not load in a network-restricted environment.)
- Contact details (address, phone, hours, socials, map) are placeholders — marked `REPLACE`; update in `lib/site.ts`.
- Trajan Pro not used (licensing) — Cinzel substitute in place.
- `npm audit` reports residual advisories (dev-only `glob` via `eslint-config-next`, plus Next.js self-hosted/build-time items). The only automated "fix" is `next@16` (a breaking major) — intentionally deferred. Revisit when upgrading to Next 15/16 in a dedicated pass.
- `site.url` is a placeholder domain; set the real production URL so canonical/OG/sitemap links resolve.

---

## Future Improvements

- Online ordering / cart integration (e.g., link to delivery partner or custom checkout).
- CMS for menu (Sanity/Contentlayer) so owner edits without code.
- Reservation/booking widget.
- Multi-language (EN + local).
- Real review integration (Google Places API).
- Blog / offers section for SEO.

---

## CHANGELOG

### 2026-07-02
- Initialized project and created `project-context.md` (source of truth).
- Scaffolded Next.js 14 (App Router) + TypeScript + Tailwind v3 + Framer Motion + react-icons.
- Established design system (colors, typography, shadows, radii, animation variants).
- Built all sections: Navbar, Hero, Featured Burgers, Full Menu, About, Gallery, Why Choose Us, Testimonials, Contact, Footer.
- Added UX utilities: scroll progress, back-to-top, floating order button, smooth scrolling, section reveals.
- Implemented SEO (metadata, OG/Twitter, Restaurant JSON-LD, robots, sitemap, manifest, favicon, OG image) and accessibility passes.
- Authored professional README (install, dev, build, deploy, customization, image/menu/SEO guides).
- Patched Next.js to 14.2.35 (security); fixed Button `children` typing, easing tuple typing, IM Fell English font-fallback warning, and OG-image Satori flex requirement.
- Verified production build (all 9 routes prerender; ~157 kB First Load JS) and browser-rendered Hero + Menu.
