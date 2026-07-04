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
  { id: 'wraps', label: 'Wraps', emoji: '🌯', blurb: 'Rolled to order' },
  { id: 'fries', label: 'Loaded Fries', emoji: '🍟', blurb: 'Piled high' },
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
    tags: ['Best Seller','Olé Special'],
    popular: true,
  },
  {
    id: 'sig-truffle-royale', //need to fix this
    name: 'Big Olé',
    description:
      'Wagyu blend patty, Swiss, truffle aioli, wild mushrooms, rocket, toasted potato bun.',
    price: 16.9,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80',
    tags: ['Premium'],
    // popular: true,
  },
  {
    id: 'sig-inferno',
    name: 'Crispy Chicken',
    description:
      'Crispy golden-fried chicken layered with fresh lettuce, creamy mayo, and melted cheese in a toasted brioche bun.',
    price: 13.9,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image:
      // 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1637710847214-f91d99669e18?q=80&w=421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    spicy: true,
    tags: ['Chef Special'],
  },
  {
    id: 'focaccia',
    name: 'Focaccia',
    description:
      'Two grilled chicken tenders, fresh lettuce, tomato, onion, grilled capsicum with mayo on a Turkish roll.',
    price: 13.9,
    category: 'signature',
    // REPLACE WITH REAL IMAGE
    image: 'https://images.unsplash.com/photo-1655895176036-bf1a11326e5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlY2lhbCUyMGNoaWNrZW4lMjB0ZW5kZXIlMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D',
    spicy: true,
    tags: ['Chef Special'],
  },

  // ── Beef ──────────────────────────────────────────────────
  {
    id: 'classic-beef',
    name: 'Classic Beef',
    description:
      'Marinated beef patty, melted American cheese, mayo, tomato, grilled onion, lettuce with bbq/tomato sauce on a brioche bun.',
    price: 9.5,
    category: 'beef',
    emoji: '🍔',
    // image:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    image:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    popular: true,
  },
  {
    id: 'australiana',
    name: 'Australiana',
    description:
      'Marinated beef patty, egg, beetroot, melted cheese, lettuce, grilled onion, creamy mayo with bbq/tomato sauce on a brioche bun.',
    price: 15.5,
    category: 'beef',
    emoji: '🥓',
    image:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHBhdHR5fGVufDB8fDB8fHww',
    tags: ['Best Seller'],
    popular:true
  },
  {
    id: 'mega-beef',
    name: 'Mega Beef',
    description:
      'Double beef patty, double melted American cheese, jalapeño, pickle, lettuce, onion, mayo with bbq/tomato sauce on brioche bun.',
    price: 19.5,
    category: 'beef',
    emoji: '🍄',
    image: 'https://images.unsplash.com/photo-1713330801172-03f8d1c0dde7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    spicy: true,
    tags: ['Chef Special'],
  },
  {
    id: 'beef-cado',
    name: 'Beefcado',
    description:
      'Marinated beef patty, fresh avocado, melted American cheese, pickle, lettuce, onion, tomato with housemade aioli on brioche bun.',
    price: 15.0,
    category: 'beef',
    emoji: '🧀',
    image: 'https://images.unsplash.com/photo-1678110707493-8d05425137ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZWYlMjBwYXR0eSUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Premium'],
  },

  // ── Chicken ───────────────────────────────────────────────
  {
    id: 'bbq-whole-chicken',
    name: 'BBQ Whole Chicken',
    description:
      'Slow-grilled whole chicken, glazed with our signature BBQ sauce for a smoky, juicy finish served with our signature salad.',
    price: 16.5,
    category: 'chicken',
    // REPLACE WITH REAL IMAGE
    image:
      'https://images.unsplash.com/photo-1641873933980-fcff60026f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJicSUyMHdob2xlJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D',
    popular: true,
    tags:['Premium']
  },
  {
    id: 'bbq-half-chicken',
    name: 'BBQ Half Chicken',
    description:
      'Half a perfectly marinated chicken, flame-grilled and glazed with our signature smoky BBQ sauce served with our signature salad.',
    price: 10.5,
    category: 'chicken',
    emoji: '🌶️',
    // spicy: true,
    tags: ['Best Seller'],
    image:'https://images.unsplash.com/photo-1777891258069-454e66f8bedc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJicSUyMGhhbGYlMjBjaGlja2VufGVufDB8fDB8fHww'
  },
  {
    id: 'chk-nashville',
    name: 'Chicken Nashvile',
    description:
      'A fiery blend of crispy chicken, bold heat served with our unforgettable Nashville flavor.',
    price: 12.0,
    category: 'chicken',
    // emoji: '🥑',
    veg: false,
    spicy: true,
    image:'https://images.unsplash.com/photo-1630564510761-a560db92a09b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJicSUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D',
    tags: ['Olé Special'],
  },

  {
    id: 'family-feast',
    name: 'Family Feast',
    description:
      'Half chicken, 2 totilla breads, 4 wings, large fries, 600ml drink and 2 sides of sauce & salad.',
    price: 35.5,
    category: 'chicken',
    emoji: '🥑',
    veg: false,
    spicy: true,
    image:'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWNrZW4lMjBwbGF0dGVyfGVufDB8fDB8fHww',
    tags: ['Best Value'],
  },

  // ── Loaded Fries ──────────────────────────────────────────
  {
    id: 'fries-classic',
    name: 'Sea-Salt Fries',
    description: 'Hand-cut, twice-fried, flaky sea salt. The perfect side.',
    price: 4.5,
    category: 'fries',
    emoji: '🍟',
    image:'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsdGVkJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D',
    tags:['Best Seller']
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
    tags:['Olé Special']
  },
  {
    id: 'fries-truffle',
    name: 'Truffle Parmesan Fries',
    description: 'Truffle oil, shaved parmesan, parsley, garlic aioli dip.',
    price: 7.0,
    category: 'fries',
    emoji: '🧄',
    image:'https://images.unsplash.com/photo-1639744091981-2f826321fae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFybWVzYW4lMjBmcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Chef Special']
  },

  // ── Wraps ─────────────────────────────────────────────────
  {
    id: 'ole-wrap',
    name: 'Olé Wrap',
    description:
      'Two grilled chicken breast fillets, cheese, lettuce, tomato with house made wrap sauce.',
    price: 12.0,
    category: 'wraps',
    emoji: '🌯',
    tags: ['Best Seller'],
    image:'https://images.unsplash.com/photo-1621334954920-9fc5f5490401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpZyUyMHdyYXB8ZW58MHx8MHx8fDA%3D',
    popular: true
  },
  {
    id: 'big-ole-wrap',
    name: 'Big Olé Wrap',
    description:
      'Three grilled chicken breast fillets, cheese, lettuce, tomato with house made wrap sauce.',
    price: 14.5,
    category: 'wraps',
    emoji: '🥗',
    // veg: true,
    image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JhcHxlbnwwfHwwfHx8MA%3D%3D',
    tags:['Olé Special'],
    popular: true
  },
  {
    id: 'avocado-ole',
    name: 'Avocado Olé Wrap',
    description:
      'Two grilled chicken breast fillets, fresh avocado, cheese, lettuce, tomato with deliciou chilli mayo.',
    price: 14.5,
    category: 'wraps',
    emoji: '🥗',
    // veg: true,
    tags:['Premium'],
    image:'https://images.unsplash.com/photo-1722239313013-9fa813f949fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJpZyUyMHdyYXB8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'grill-wrap',
    name: 'Grill Tender Wrap',
    description:
      'Grilled chicken tender, cheese, lettuce, tomato, onion capsicum with mayo.',
    price: 14.5,
    category: 'wraps',
    emoji: '🥗',
    spicy: true,
    image:'https://images.unsplash.com/photo-1621334953222-c60c19143b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpZyUyMHdyYXB8ZW58MHx8MHx8fDA%3D',
    tags: ['Chef Special']
  },

  // ── Drinks ────────────────────────────────────────────────
  {
    id: 'drink-lemonade',
    name: 'House Lemonade',
    description: 'Fresh-pressed lemons, mint, a touch of cane sugar.',
    price: 3.5,
    category: 'drinks',
    emoji: '🍋',
    veg: true,
    image:'https://images.unsplash.com/photo-1575596510825-f748919a2bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D',
    popular: true,
  },
  {
    id: 'drink-shake',
    name: 'Hand-Spun Shake',
    description: 'Vanilla, chocolate, or salted caramel. Thick and dreamy.',
    price: 5.5,
    category: 'drinks',
    emoji: '🥤',
    image:'https://plus.unsplash.com/premium_photo-1695035007016-f7976bbb64d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmQlMjBzcHVuJTIwc2hha2V8ZW58MHx8MHx8fDA%3D',
   },
  {
    id: 'drink-soda',
    name: 'Craft Soda',
    description: 'Rotating small-batch flavors. Ask for today’s pour.',
    price: 3.0,
    category: 'drinks',
    emoji: '🧃',
    image:'https://images.unsplash.com/photo-1581927692308-be9e43b4d860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZGF8ZW58MHx8MHx8fDA%3D'
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
