import { site } from '@/lib/site';
import { menuItems, menuCategories } from '@/lib/menu';

/**
 * Schema.org Restaurant JSON-LD for rich results.
 * Rendered as a <script type="application/ld+json"> in the page.
 */
export function JsonLd() {
  const dayMap: Record<string, string> = {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
  };

  const openingHoursSpecification = site.hours
    .filter((h) => !h.closed)
    .map((h) => {
      const [opens, closes] = h.hours.split('–').map((s) => s.trim());
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[h.day],
        opens,
        closes,
      };
    });

  const hasMenu = {
    '@type': 'Menu',
    name: `${site.name} Menu`,
    hasMenuSection: menuCategories.map((cat) => ({
      '@type': 'MenuSection',
      name: cat.label,
      hasMenuItem: menuItems
        .filter((item) => item.category === cat.id)
        .map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          description: item.description,
          offers: {
            '@type': 'Offer',
            price: item.price.toFixed(2),
            priceCurrency: 'USD',
          },
        })),
    })),
  };

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    servesCuisine: site.cuisine,
    priceRange: site.priceRange,
    image: [`${site.url}/opengraph-image`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification,
    hasMenu,
    acceptsReservations: 'False',
    sameAs: site.socials.map((s) => s.href),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2000',
    },
  };

  return (
    <script
      type="application/ld+json"
      // Schema data is fully controlled (no user input) — safe to inject.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
