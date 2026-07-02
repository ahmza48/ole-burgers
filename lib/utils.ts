/**
 * cn — tiny className combiner (clsx-style) with no external deps.
 * Accepts strings, arrays, and conditional objects.
 */
type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value) return;
    if (typeof value === 'string' || typeof value === 'number') {
      out.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (typeof value === 'object') {
      for (const key in value) {
        if (value[key]) out.push(key);
      }
    }
  };

  inputs.forEach(walk);
  return out.join(' ');
}

/** Format a number as currency. Defaults to USD; change in one place. */
export function formatPrice(
  amount: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/** Build a WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(numberDigits: string, message?: string): string {
  const base = `https://wa.me/${numberDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Slugify a string for ids/anchors. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
