import type { MenuCategory, MenuItem } from '@/types';

/**
 * MENU DATA — the owner edits this file to update the menu.
 * - Add/remove categories in `menuCategories`.
 * - Add/remove items in `menuItems` (set `category` to a category id).
 * - `image` is optional; when omitted a large `emoji` is shown instead.
 *   To use a real photo, drop it in `public/assets/images/` and set
 *   image: '/assets/images/your-photo.jpg'.
 */

export const menuCategories: MenuCategory[] = [
  { id: 'signature', label: 'Signature', emoji: '⭐', blurb: 'Chef-crafted icons' },
  { id: 'beef', label: 'Beef Burgers', emoji: '🍔', blurb: 'Fresh-pressed patties' },
  { id: 'chicken', label: 'Chicken Burgers', emoji: '🐔', blurb: 'Crisp & juicy' },
  { id: 'fries', label: 'Loaded Fries', emoji: '🍟', blurb: 'Piled high' },
  { id: 'wraps', label: 'Wraps', emoji: '🌯', blurb: 'Rolled to order' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤', blurb: 'Shakes & sips' },
  { id: 'deals', label: 'Deals', emoji: '🔥', blurb: 'Better together' },
  { id: 'extras', label: 'Extras', emoji: '➕', blurb: 'Finish it right' },
];

export const menuItems: MenuItem[] = [
  // ── Signature ─────────────────────────────────────────────
  {
    id: 'sig-ole-classic',
    name: 'The Olé Classic',
    description:
      'Double smash beef, aged cheddar, house Olé sauce, pickles, caramelized onion, brioche bun.',
    price: 12.5,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    tags: ['Best Seller'],
    popular: true,
  },
  {
    id: 'sig-truffle-royale',
    name: 'Truffle Royale',
    description:
      'Wagyu blend patty, Swiss, truffle aioli, wild mushrooms, rocket, toasted potato bun.',
    price: 16.9,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80',
    tags: ['Premium'],
    popular: true,
  },
  {
    id: 'sig-inferno',
    name: 'Inferno Smash',
    description:
      'Double beef, pepper jack, jalapeño, chipotle mayo, crispy onions, spicy honey glaze.',
    price: 13.9,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    spicy: true,
  },

  // ── Beef ──────────────────────────────────────────────────
  {
    id: 'beef-cheeseburger',
    name: 'Prime Cheeseburger',
    description:
      'Single smash patty, American cheese, ketchup, mustard, onion, pickles.',
    price: 9.5,
    category: 'beef',
    emoji: '🍔',
    popular: true,
  },
  {
    id: 'beef-bacon-stack',
    name: 'Bacon Stack',
    description:
      'Double beef, smoked bacon, cheddar, BBQ sauce, crispy onions.',
    price: 13.5,
    category: 'beef',
    emoji: '🥓',
  },
  {
    id: 'beef-mushroom-swiss',
    name: 'Mushroom Swiss',
    description:
      'Beef patty, sautéed mushrooms, melted Swiss, garlic aioli.',
    price: 12.0,
    category: 'beef',
    emoji: '🍄',
  },
  {
    id: 'beef-blue',
    name: 'Blue Ember',
    description:
      'Flame-grilled beef, blue cheese crumble, caramelized onion jam, rocket.',
    price: 13.0,
    category: 'beef',
    emoji: '🧀',
  },

  // ── Chicken ───────────────────────────────────────────────
  {
    id: 'chk-crispy',
    name: 'Crispy Buttermilk',
    description:
      'Buttermilk-fried chicken thigh, slaw, pickles, ranch, toasted bun.',
    price: 11.5,
    category: 'chicken',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80',
    popular: true,
  },
  {
    id: 'chk-nashville',
    name: 'Nashville Hot',
    description:
      'Cayenne-glazed crispy chicken, comeback sauce, pickles, dill slaw.',
    price: 12.5,
    category: 'chicken',
    emoji: '🌶️',
    spicy: true,
  },
  {
    id: 'chk-grilled',
    name: 'Grilled Herb Chicken',
    description:
      'Marinated grilled breast, avocado, Swiss, honey mustard, greens.',
    price: 12.0,
    category: 'chicken',
    emoji: '🥑',
    veg: false,
  },

  // ── Loaded Fries ──────────────────────────────────────────
  {
    id: 'fries-classic',
    name: 'Sea-Salt Fries',
    description: 'Hand-cut, twice-fried, flaky sea salt. The perfect side.',
    price: 4.5,
    category: 'fries',
    emoji: '🍟',
  },
  {
    id: 'fries-loaded',
    name: 'Olé Loaded Fries',
    description:
      'Fries smothered in cheese sauce, beef chili, jalapeño, scallions.',
    price: 8.5,
    category: 'fries',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
    popular: true,
  },
  {
    id: 'fries-truffle',
    name: 'Truffle Parmesan Fries',
    description: 'Truffle oil, shaved parmesan, parsley, garlic aioli dip.',
    price: 7.0,
    category: 'fries',
    emoji: '🧄',
  },

  // ── Wraps ─────────────────────────────────────────────────
  {
    id: 'wrap-chicken',
    name: 'Crispy Chicken Wrap',
    description:
      'Crispy chicken, lettuce, tomato, cheddar, ranch in a warm tortilla.',
    price: 9.0,
    category: 'wraps',
    emoji: '🌯',
  },
  {
    id: 'wrap-falafel',
    name: 'Garden Falafel Wrap',
    description:
      'Crisp falafel, hummus, pickled veg, tahini, herbs. Fully plant-based.',
    price: 8.5,
    category: 'wraps',
    emoji: '🥗',
    veg: true,
  },

  // ── Drinks ────────────────────────────────────────────────
  {
    id: 'drink-shake',
    name: 'Hand-Spun Shake',
    description: 'Vanilla, chocolate, or salted caramel. Thick and dreamy.',
    price: 5.5,
    category: 'drinks',
    emoji: '🥤',
    popular: true,
  },
  {
    id: 'drink-lemonade',
    name: 'House Lemonade',
    description: 'Fresh-pressed lemons, mint, a touch of cane sugar.',
    price: 3.5,
    category: 'drinks',
    emoji: '🍋',
    veg: true,
  },
  {
    id: 'drink-soda',
    name: 'Craft Soda',
    description: 'Rotating small-batch flavors. Ask for today’s pour.',
    price: 3.0,
    category: 'drinks',
    emoji: '🧃',
  },

  // ── Deals ─────────────────────────────────────────────────
  {
    id: 'deal-solo',
    name: 'Solo Combo',
    description: 'Any classic burger + fries + a drink. Weekday lunch favorite.',
    price: 15.0,
    category: 'deals',
    emoji: '🔥',
    tags: ['Save 15%'],
    popular: true,
  },
  {
    id: 'deal-duo',
    name: 'Duo Feast',
    description:
      'Two signature burgers, loaded fries, two shakes. Made to share.',
    price: 32.0,
    category: 'deals',
    emoji: '👫',
    tags: ['Save 20%'],
  },
  {
    id: 'deal-family',
    name: 'Family Bundle',
    description:
      'Four burgers, two large fries, four drinks. Feeds the whole crew.',
    price: 52.0,
    category: 'deals',
    emoji: '👨‍👩‍👧‍👦',
    tags: ['Best Value'],
  },

  // ── Extras ────────────────────────────────────────────────
  {
    id: 'extra-cheese',
    name: 'Extra Cheese Slice',
    description: 'Add a melty layer to any burger.',
    price: 1.0,
    category: 'extras',
    emoji: '🧀',
  },
  {
    id: 'extra-bacon',
    name: 'Smoked Bacon',
    description: 'Two rashers of thick-cut smoked bacon.',
    price: 2.0,
    category: 'extras',
    emoji: '🥓',
  },
  {
    id: 'extra-patty',
    name: 'Extra Patty',
    description: 'Make it a double (or triple). No judgment.',
    price: 3.5,
    category: 'extras',
    emoji: '🍖',
  },
  {
    id: 'extra-dip',
    name: 'House Dips',
    description: 'Olé sauce, garlic aioli, chipotle, or honey mustard.',
    price: 0.9,
    category: 'extras',
    emoji: '🥫',
  },
];
