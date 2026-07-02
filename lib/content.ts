import type {
  FeaturedBurger,
  Feature,
  Testimonial,
  GalleryImage,
  Stat,
} from '@/types';

/**
 * CONTENT DATA — featured burgers, "why us", testimonials, gallery, stats.
 * Images are Unsplash placeholders marked REPLACE WITH REAL IMAGE.
 * Swap in real photos from public/assets/images/ before launch.
 */

export const featuredBurgers: FeaturedBurger[] = [
  {
    id: 'feat-ole-classic',
    name: 'The Olé Classic',
    description:
      'Double smash beef, aged cheddar, and our secret Olé sauce on a butter-toasted brioche.',
    price: 12.5,
    badge: 'Best Seller',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'feat-truffle-royale',
    name: 'Truffle Royale',
    description:
      'Wagyu-blend patty, Swiss, truffle aioli and wild mushrooms. Pure indulgence.',
    price: 16.9,
    badge: 'Premium',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'feat-inferno',
    name: 'Inferno Smash',
    description:
      'Double beef, pepper jack, jalapeño and spicy honey glaze for the heat seekers.',
    price: 13.9,
    badge: 'Spicy',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80',
  },
];

export const features: Feature[] = [
  {
    id: 'wf-meat',
    title: 'Fresh, Premium Meat',
    description:
      'Never frozen. Hand-pressed patties from responsibly sourced beef, ground daily.',
    icon: 'meat',
  },
  {
    id: 'wf-veg',
    title: 'Crisp Fresh Produce',
    description:
      'Locally sourced vegetables delivered every morning for peak crunch and color.',
    icon: 'leaf',
  },
  {
    id: 'wf-fast',
    title: 'Fast, Friendly Service',
    description:
      'Premium quality without the wait. Most orders are ready in under ten minutes.',
    icon: 'bolt',
  },
  {
    id: 'wf-quality',
    title: 'Quality Assurance',
    description:
      'Every burger is checked against our recipe standard before it reaches you.',
    icon: 'shield',
  },
  {
    id: 'wf-clean',
    title: 'Spotless Kitchen',
    description:
      'A visibly clean, sanitized kitchen with strict hygiene protocols, always.',
    icon: 'broom',
  },
  {
    id: 'wf-care',
    title: 'Genuine Hospitality',
    description:
      'We treat every guest like family. Great food deserves great service.',
    icon: 'heart',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Maya Robertson',
    role: 'Food Blogger',
    quote:
      'Hands down the best smash burger in the city. The Olé Classic is worth every single calorie — juicy, balanced, unforgettable.',
    rating: 5,
    initials: 'MR',
  },
  {
    id: 't-2',
    name: 'David Chen',
    role: 'Regular Guest',
    quote:
      'Spotless place, lightning-fast service, and the Truffle Royale is next level. This is my Friday ritual now.',
    rating: 5,
    initials: 'DC',
  },
  {
    id: 't-3',
    name: 'Aisha Karim',
    role: 'Local Foodie',
    quote:
      'You can taste the freshness. The produce is crisp, the meat is premium, and the team genuinely cares. Five stars.',
    rating: 5,
    initials: 'AK',
  },
  {
    id: 't-4',
    name: 'Tom Bradley',
    role: 'First-time Visitor',
    quote:
      'Walked in for lunch, became a regular. The Inferno Smash has the perfect kick and the shakes are incredible.',
    rating: 5,
    initials: 'TB',
  },
];

export const galleryImages: GalleryImage[] = [
  // REPLACE WITH REAL IMAGE — pull from the restaurant's Google Maps photos.
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80',
    alt: 'Juicy double cheeseburger with melted cheddar',
    span: 'tall',
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    alt: 'Gourmet burger with fresh toppings on a wooden board',
    span: 'wide',
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    alt: 'Crispy golden fries in a basket',
    span: 'normal',
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=900&q=80',
    alt: 'Stacked bacon cheeseburger close-up',
    span: 'normal',
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1610614819513-58e34989e371?auto=format&fit=crop&w=900&q=80',
    alt: 'Chef assembling a fresh burger in the kitchen',
    span: 'wide',
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&w=900&q=80',
    alt: 'Burger and fries meal with a soft drink',
    span: 'tall',
  },
  {
    id: 'g-7',
    src: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80',
    alt: 'Warm, modern restaurant interior',
    span: 'normal',
  },
  {
    id: 'g-8',
    src: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80',
    alt: 'Thick milkshake topped with cream',
    span: 'normal',
  },
];

export const stats: Stat[] = [
  { id: 's-1', value: '2014', label: 'Grilling since' },
  { id: 's-2', value: '150k+', label: 'Burgers served' },
  { id: 's-3', value: '4.9★', label: 'Average rating' },
  { id: 's-4', value: '100%', label: 'Fresh, never frozen' },
];

/** About section narrative copy. */
export const about = {
  eyebrow: 'Our Story',
  title: 'Born from a love of the perfect burger',
  paragraphs: [
    'Olé Burgers began in 2014 with a simple obsession: build a burger worth crossing town for. No shortcuts, no frozen patties, no compromise — just fresh beef, ground daily, and produce delivered every morning.',
    'Today that obsession lives in every order. Our patties are hand-pressed and flame-kissed to order, our sauces are made in-house, and our kitchen is kept spotless because great food starts with respect for the craft — and for you.',
  ],
  // REPLACE WITH REAL IMAGE
  imagePrimary:
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1100&q=80',
  // REPLACE WITH REAL IMAGE
  imageSecondary:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
};
