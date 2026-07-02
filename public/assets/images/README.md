# Image Assets

Place the restaurant's **real photos** here, then reference them from the data files
in `lib/` (e.g. `lib/menu.ts`, `lib/content.ts`, `lib/site.ts`).

## How to use a local image

1. Drop the file here, e.g. `public/assets/images/hero-burger.jpg`.
2. In the relevant data file, set the image path to `/assets/images/hero-burger.jpg`.
   (Anything inside `public/` is served from the site root `/`.)

## Recommended files (replace the Unsplash placeholders)

- `hero-burger.jpg` — main hero shot (portrait/square, high-res)
- `featured-1.jpg`, `featured-2.jpg`, `featured-3.jpg` — best sellers
- `about-kitchen.jpg`, `about-craft.jpg` — story/kitchen
- `gallery-1.jpg` … `gallery-8.jpg` — gallery (varied aspect ratios OK)
- `menu/*.jpg` — optional per-item photos

## Where the real photos come from

Pull them from the restaurant's **Google Maps listing** (Photos tab) and export the
highest resolution available, or use originals from the owner.

> Until real photos are added, the site renders high-quality Unsplash placeholders.
> Every placeholder is marked with a `REPLACE WITH REAL IMAGE` comment in the code/data.
