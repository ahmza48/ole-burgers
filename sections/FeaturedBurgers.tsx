'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { featuredBurgers } from '@/lib/content';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { formatPrice, whatsappLink } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import type { FeaturedBurger } from '@/types';

function FeaturedCard({ burger, index }: { burger: FeaturedBurger; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative flex flex-col overflow-hidden rounded-4xl border border-charcoal-100 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {burger.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-charcoal-900/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {burger.badge}
          </span>
        )}
        {/* REPLACE WITH REAL IMAGE */}
        <Image
          src={burger.image}
          alt={burger.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index === 0 ? undefined : 'lazy'}
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl text-charcoal-900">
            {burger.name}
          </h3>
          <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
            {formatPrice(burger.price)}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
          {burger.description}
        </p>
        <a
          href={whatsappLink(site.whatsapp, `Hi! I'd like to order the ${burger.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-between rounded-2xl border border-charcoal-200 px-5 py-3 text-sm font-medium text-charcoal-900 transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
        >
          Order this
          <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export function FeaturedBurgers() {
  return (
    <section id="featured" className="section relative bg-white pb-0.125">
      <Container>
        <SectionHeading
          eyebrow="Best Sellers"
          title={
            <>
              The burgers people{' '}
              <span className="text-gradient-brand">drive across town</span> for
            </>
          }
          subtitle="Three signatures that put us on the map. Each one flame-grilled to order and built to be unforgettable."
        />

        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredBurgers.map((b, i) => (
            <FeaturedCard key={b.id} burger={b} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 font-medium text-charcoal-900 link-underline"
          >
            Explore the full menu
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
