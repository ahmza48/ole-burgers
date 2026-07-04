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
  phone: '+61 2 9661 8055',
  phoneHref: 'tel:+61296618055',
  whatsapp: '+61296618055', // digits only, international format
  email: 'contact@oleburgers.example.com',

  address: {
    street: '442 Bunnerong Rd',
    city: 'Sydney',
    region: 'Matraville',
    postalCode: 'NSW 2036',
    country: 'Austalia',
    full: '442 Bunnerong Rd, Matraville NSW 2036, Australia',
  },
  geo: { lat: 30.267153, lng: -97.743057 },
  // // REPLACE with the restaurant's real Google Maps embed src.
  // mapEmbedSrc:
  //   'https://www.google.com/maps?q=Austin%2C%20TX&output=embed',
  // mapLink: 'https://www.google.com/maps/search/?api=1&query=Austin,TX',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Ole+Burgers+Matraville&output=embed',

  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Ole+Burgers+Matraville',
  
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
