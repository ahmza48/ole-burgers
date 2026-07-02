export type NavLink = {
  label: string;
  href: string; // in-page anchor, e.g. "#menu"
  id: string; // section id used for active-state tracking
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'twitter' | 'tiktok' | 'youtube';
};

export type OpeningHour = {
  day: string;
  hours: string;
  closed?: boolean;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  phone: string;
  phoneHref: string;
  whatsapp: string; // international format, digits only
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    full: string;
  };
  geo: { lat: number; lng: number };
  mapEmbedSrc: string;
  mapLink: string;
  priceRange: string;
  cuisine: string[];
  hours: OpeningHour[];
  nav: NavLink[];
  socials: SocialLink[];
};

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  blurb?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string; // MenuCategory.id
  image?: string;
  emoji?: string;
  tags?: string[];
  spicy?: boolean;
  popular?: boolean;
  veg?: boolean;
};

export type FeaturedBurger = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  accent?: string; // tailwind gradient stops or color hint
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon:
    | 'meat'
    | 'leaf'
    | 'bolt'
    | 'shield'
    | 'sparkles'
    | 'broom'
    | 'heart'
    | 'award';
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  avatar?: string;
  initials: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};
