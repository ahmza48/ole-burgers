'use client';

import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

const socialIcon = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  twitter: FaInstagram,
  youtube: FaInstagram,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-charcoal-950 text-charcoal-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white">
                <span aria-hidden>🍔</span>
              </span>
              <span className="font-heading text-2xl text-white">
                Olé <span className="text-brand-500">Burgers</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-300">
              {site.tagline} — premium, flame-grilled burgers made fresh, every
              single day.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcon[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-charcoal-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-charcoal-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-charcoal-300 transition-colors hover:text-white link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-charcoal-400">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-charcoal-300">{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={site.phoneHref}
                  className="text-charcoal-300 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-charcoal-300">
                  Open daily — see hours above
                </span>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-charcoal-400">
              Hungry?
            </h3>
            <p className="mt-5 text-sm text-charcoal-300">
              Order ahead and skip the wait.
            </p>
            <a
              href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow"
            >
              <FaWhatsapp className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-charcoal-400 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Powered by{' '}
            <a
              href="#"
              className="font-display uppercase tracking-[0.2em] text-gold-400 transition-colors hover:text-gold-300"
            >
              Axenity
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
