'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeInUp, fadeInRight } from '@/lib/animations';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax on the hero image + copy as the user scrolls away.
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28 pb-16 lg:pt-24"
    >
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 bg-grid-charcoal bg-[size:44px_44px] opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
        {/* Floating blobs */}
        <motion.div
          className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-gold-200/50 blur-3xl"
          animate={{ y: [0, 26, 0], x: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <motion.div
            style={{ y: copyY, opacity: fade }}
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-charcoal-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-charcoal-700 backdrop-blur-md lg:mx-0"
            >
              <span className="flex items-center gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-3 w-3" />
                ))}
              </span>
              <span className="text-charcoal-400">|</span>
              Rated 4.9 by 2,000+ burger lovers
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl leading-[1.02] text-charcoal-900 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Not just a burger.
              <span className="mt-2 block text-gradient-brand">
                An obsession.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-charcoal-500 lg:mx-0 font-heading"
            >
              Fresh, hand-pressed patties, flame-grilled to order and stacked
              with locally sourced produce. This is {site.name} —{' '}
              <span className="text-charcoal-800">
                {site.tagline.toLowerCase()}
              </span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" fullWidth className="sm:w-auto">
                  Start Order
                  <FiArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <a href="#menu" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="ghost"
                  fullWidth
                  className="sm:w-auto"
                >
                  View Menu
                </Button>
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-charcoal-500 lg:justify-start"
            >
              {[
                '100% Fresh Beef',
                'Ready in 10 min',
                'Spotless Kitchen',
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y: imageY }}
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute inset-6 rounded-full bg-gradient-to-tr from-brand-600/20 via-gold-300/20 to-transparent blur-2xl"
              />
              <motion.div
                className="relative h-full w-full"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* REPLACE WITH REAL IMAGE — main hero burger */}
                <Image
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=85"
                  alt="Signature Olé double cheeseburger with fresh toppings"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="rounded-[2rem] object-cover shadow-lift"
                />
              </motion.div>

              {/* Floating price chip */}
              <motion.div
                className="absolute -left-3 top-10 rounded-2xl border border-charcoal-100 bg-white/90 px-4 py-3 shadow-lift backdrop-blur-md sm:-left-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="text-xs text-charcoal-400">Best Seller</p>
                <p className="font-heading text-lg text-charcoal-900">
                  The Olé Classic
                </p>
                <p className="text-sm font-semibold text-brand-600">$12.50</p>
              </motion.div>

              {/* Floating rating chip */}
              <motion.div
                className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl border border-charcoal-100 bg-white/90 px-4 py-3 shadow-lift backdrop-blur-md sm:-right-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-100 text-gold-600">
                  <FaStar className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="font-heading text-base text-charcoal-900">
                    4.9 / 5
                  </p>
                  <p className="text-xs text-charcoal-400">2,000+ reviews</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
