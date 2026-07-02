'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galleryImages } from '@/lib/content';
import { cn } from '@/lib/utils';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const spanClass: Record<NonNullable<(typeof galleryImages)[number]['span']>, string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
};

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;
  useLockBodyScroll(isOpen);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, prev, next]);

  const current = index !== null ? galleryImages[index] : null;

  return (
    <section id="gallery" className="section relative scroll-mt-24 bg-mist">
      <Container>
        <SectionHeading
          eyebrow="The Gallery"
          title={
            <>
              A feast for{' '}
              <span className="text-gradient-brand">the eyes</span>, too
            </>
          }
          subtitle="Real moments from our kitchen and counter. Tap any photo to view it up close."
        />

        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4"
        >
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              variants={fadeInUp}
              onClick={() => setIndex(i)}
              aria-label={`View image: ${img.alt}`}
              className={cn(
                'group relative overflow-hidden rounded-3xl bg-charcoal-100 shadow-soft focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2',
                spanClass[img.span ?? 'normal'],
              )}
            >
              {/* REPLACE WITH REAL IMAGE — from Google Maps listing */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur-md"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[85vh] w-full max-w-4xl flex-col"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-charcoal-300">
                {current.alt} · {index! + 1} / {galleryImages.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
