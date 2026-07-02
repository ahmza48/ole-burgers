'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

/**
 * Always-available sticky order CTA (bottom-right). Emphasized on mobile
 * where the header CTA is hidden. Links straight to WhatsApp ordering.
 */
export function FloatingOrderButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.a
          href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Order now on WhatsApp"
          className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-4 text-white shadow-glow"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-brand-600" />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-brand-600"
          />
          <FaWhatsapp className="h-5 w-5 shrink-0" />
          <span className="hidden text-sm font-semibold sm:inline">
            Order Now
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
