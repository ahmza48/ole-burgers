import type { SiteConfig } from '@/types';

/**
 * SITE CONFIG — single place to edit business details.
 * Values marked `REPLACE` are placeholders; swap in the real
 * restaurant information before launch.
 */
export const site: SiteConfig = {
  name: 'Olé Burgers',
  legalName: 'Olé Burgers',
  tagline: 'Crafted. Charred. Unforgettable.',
  description:
    'Olé Burgers serves premium, flame-grilled burgers made from fresh, hand-pressed patties and locally sourced produce. Bold flavor, spotless kitchen, unforgettable experience.',
  // REPLACE with the production domain.
  url: 'https://oleburgers.example.com',
  locale: 'en_US',

  // REPLACE with real contact details.
  phone: '+1 (555) 018-2280',
  phoneHref: 'tel:+15550182280',
  whatsapp: '15550182280', // digits only, international format
  email: 'hello@oleburgers.example.com',

  address: {
    street: '128 Grill Avenue',
    city: 'Austin',
    region: 'TX',
    postalCode: '78701',
    country: 'USA',
    full: '128 Grill Avenue, Austin, TX 78701',
  },
  geo: { lat: 30.267153, lng: -97.743057 },
  // REPLACE with the restaurant's real Google Maps embed src.
  mapEmbedSrc:
    'https://www.google.com/maps?q=Austin%2C%20TX&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Austin,TX',

  priceRange: '$$',
  cuisine: ['Burgers', 'American', 'Fast Food'],

  hours: [
    { day: 'Monday', hours: '11:00 – 22:00' },
    { day: 'Tuesday', hours: '11:00 – 22:00' },
    { day: 'Wednesday', hours: '11:00 – 22:00' },
    { day: 'Thursday', hours: '11:00 – 23:00' },
    { day: 'Friday', hours: '11:00 – 00:00' },
    { day: 'Saturday', hours: '12:00 – 00:00' },
    { day: 'Sunday', hours: '12:00 – 21:00' },
  ],

  nav: [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ],

  socials: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
  ],
};

/** Prefilled WhatsApp order message. */
export const ORDER_MESSAGE =
  "Hi Olé Burgers! I'd like to place an order.";
