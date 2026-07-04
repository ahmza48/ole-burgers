'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import { FiSearch, FiX, FiArrowUpRight } from 'react-icons/fi';
import { FaFire, FaLeaf } from 'react-icons/fa';
import { menuCategories, menuItems } from '@/lib/menu';
import { site } from '@/lib/site';
import { cn, formatPrice, whatsappLink } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInUp } from '@/lib/animations';
import type { MenuItem } from '@/types';

function ItemMedia({ item }: { item: MenuItem }) {
  if (item.image) {
    return (
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
        {/* REPLACE WITH REAL IMAGE */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="96px"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  }
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-mist text-4xl transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24">
      <span aria-hidden>{item.emoji ?? '🍔'}</span>
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      className="group flex items-center gap-4 rounded-3xl border border-charcoal-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift sm:p-5"
    >
      <ItemMedia item={item} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 font-heading text-lg text-charcoal-900">
            <span className="truncate">{item.name}</span>
            {item.spicy && (
              <FaFire className="h-3.5 w-3.5 shrink-0 text-brand-600" title="Spicy" />
            )}
            {item.veg && (
              <FaLeaf className="h-3.5 w-3.5 shrink-0 text-green-600" title="Vegetarian" />
            )}
          </h3>
          <span className="shrink-0 font-heading text-lg text-brand-600">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-charcoal-500">
          {item.description}
        </p>
        <div className="mt-2.5 flex items-center gap-2">
          {item.popular && (
            <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-gold-700">
              Popular
            </span>
          )}
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-brand-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Menu() {
  const [activeCat, setActiveCat] = useState<string>(menuCategories[0].id);
  const [query, setQuery] = useState('');
  const tabsRef = useRef<HTMLDivElement>(null);

  const searching = query.trim().length > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesCat = searching || item.category === activeCat;
      return matchesQuery && matchesCat;
    });
  }, [activeCat, query, searching]);

  const activeCategory = menuCategories.find((c) => c.id === activeCat);

  return (
    <section id="menu" className="section relative scroll-mt-24 bg-mist pt-5 pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Full Menu"
          title={
            <>
              Everything we grill,{' '}
              <span className="text-gradient-brand">all in one place</span>
            </>
          }
          subtitle="Browse by category or search for your favorite. Prices include our promise of fresh, never-frozen quality."
        />

        {/* Search */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-md"
        >
          <div className="relative">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              aria-label="Search the menu"
              className="w-full rounded-full border border-charcoal-200 bg-white py-3.5 pl-12 pr-12 text-sm text-charcoal-900 shadow-soft outline-none transition-all duration-300 placeholder:text-charcoal-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-charcoal-400 transition-colors hover:bg-mist hover:text-charcoal-900"
              >
                <FiX className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Sticky category tabs */}
        <div
          ref={tabsRef}
          className={cn(
            'sticky top-[4rem] z-30 -mx-5 mt-8 px-5 py-3 transition-all duration-300',
            'supports-[backdrop-filter]:bg-mist/80 backdrop-blur-lg',
          )}
        >
          <div className="no-scrollbar mask-fade-x flex gap-2 overflow-x-auto pb-1">
            {menuCategories.map((cat) => {
              const isActive = !searching && activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setActiveCat(cat.id);
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    'relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300',
                    isActive
                      ? 'text-white'
                      : 'bg-white text-charcoal-600 hover:text-charcoal-900',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-600 shadow-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="mr-1.5" aria-hidden>
                    {cat.emoji}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category blurb */}
        {!searching && activeCategory?.blurb && (
          <p className="mt-6 text-center font-display text-sm uppercase tracking-[0.2em] text-charcoal-400">
            {activeCategory.blurb}
          </p>
        )}

        {/* Items grid */}
        <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 rounded-3xl border border-dashed border-charcoal-200 bg-white/60 py-16 text-center"
          >
            <p className="text-4xl" aria-hidden>
              🔍
            </p>
            <p className="mt-3 font-heading text-xl text-charcoal-900">
              No matches for “{query}”
            </p>
            <p className="mt-1 text-sm text-charcoal-500">
              Try another search, or{' '}
              <button
                type="button"
                onClick={() => setQuery('')}
                className="font-medium text-brand-600 underline underline-offset-2"
              >
                browse all categories
              </button>
              .
            </p>
          </motion.div>
        )}

        {/* Order prompt */}
        <div className="mt-12 rounded-4xl border border-charcoal-100 bg-white p-8 text-center shadow-soft">
          <p className="font-heading text-2xl text-charcoal-900">
            Ready to eat?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-500">
            Send your order over WhatsApp and we&apos;ll have it hot and ready.
          </p>
          <a
            href={whatsappLink(site.whatsapp, 'Hi! I would like to place an order from the menu.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow"
          >
            Order on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
