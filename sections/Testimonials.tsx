'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { testimonials } from '@/lib/content';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Testimonial } from '@/types';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={cn('h-4 w-4', i < rating ? 'text-gold-500' : 'text-charcoal-200')}
        />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="relative mx-auto max-w-2xl rounded-4xl border border-charcoal-100 bg-white p-8 text-center shadow-soft sm:p-12">
      <FaQuoteRight
        aria-hidden
        className="absolute right-8 top-8 h-10 w-10 text-brand-50"
      />
      <div className="flex justify-center">
        <Stars rating={t.rating} />
      </div>
      <blockquote className="relative mt-6 font-heading text-xl leading-relaxed text-charcoal-800 sm:text-2xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center justify-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 font-heading text-lg text-white">
          {t.initials}
        </span>
        <span className="text-left">
          <span className="block font-semibold text-charcoal-900">{t.name}</span>
          <span className="block text-sm text-charcoal-400">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const prev = useCallback(() => go(index - 1, -1), [go, index]);
  const next = useCallback(() => go(index + 1, 1), [go, index]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(index + 1, 1), 6000);
    return () => window.clearInterval(id);
  }, [index, paused, go]);

  return (
    <section
      className="section relative overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-radial-fade"
      />
      <Container>
        <SectionHeading
          eyebrow="Loved by Locals"
          title={
            <>
              Don&apos;t just take{' '}
              <span className="text-gradient-brand">our word</span> for it
            </>
          }
          subtitle="Thousands of happy guests and a whole lot of empty plates."
        />

        <div className="relative mt-12">
          <div className="relative min-h-[22rem] sm:min-h-[20rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={testimonials[index].id}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card t={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-charcoal-200 text-charcoal-700 transition-all duration-300 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === index ? 'w-8 bg-brand-600' : 'w-2 bg-charcoal-200 hover:bg-charcoal-300',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-charcoal-200 text-charcoal-700 transition-all duration-300 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
