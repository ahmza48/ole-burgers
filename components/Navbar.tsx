'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { cn, whatsappLink } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow transition-transform duration-500 ease-premium group-hover:rotate-6">
        <span className="text-lg" aria-hidden>
          🍔
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl tracking-tight text-charcoal-900">
          Olé{' '}
          <span className="text-brand-600">Burgers</span>
        </span>
        <span className="font-display text-[0.6rem] uppercase tracking-[0.32em] text-charcoal-700">
          Portuguese Style Chicken, Burger & Wrap
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(site.nav.map((n) => n.id));

  useLockBodyScroll(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
        scrolled
          ? 'py-2.5 supports-[backdrop-filter]:bg-white/70 bg-white/95 backdrop-blur-xl backdrop-saturate-150 shadow-soft border-b border-charcoal-100'
          : 'py-4 bg-transparent',
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {site.nav.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  'font-heading relative rounded-full px-4 py-2 text-lg transition-colors duration-300',
                  isActive
                    ? 'text-brand-600'
                    : 'text-charcoal-600 hover:text-charcoal-900',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button size="sm" className="text-lg font-heading">
              Order Now
            </Button>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-200 bg-white/70 text-charcoal-900 backdrop-blur-md transition-colors hover:bg-charcoal-900 hover:text-white lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 -z-10 bg-charcoal-900/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-3 overflow-hidden rounded-4xl border border-charcoal-100 bg-white p-3 shadow-lift lg:hidden"
            >
              <ul className="flex flex-col">
                {site.nav.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors',
                        active === link.id
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-charcoal-700 hover:bg-mist',
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block"
              >
                <Button fullWidth size="md">
                  Order Now
                </Button>
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
