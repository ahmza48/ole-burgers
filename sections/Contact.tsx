'use client';

import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiMail,
  FiArrowUpRight,
} from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { site, ORDER_MESSAGE } from '@/lib/site';
import { cn, whatsappLink } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const socialIcon: Record<string, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
};

// Today's index (0 = Sunday) mapped to our Monday-first hours array.
function todayIndex() {
  const js = new Date().getDay(); // 0 Sun … 6 Sat
  return (js + 6) % 7; // 0 Mon … 6 Sun
}

export function Contact() {
  const today = todayIndex();

  return (
    <section id="contact" className="section relative scroll-mt-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Come Say Hello"
          title={
            <>
              Find us, call us,{' '}
              <span className="text-gradient-brand">or just show up hungry</span>
            </>
          }
          subtitle="We're easy to reach and even easier to visit. Here's everything you need."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {/* Contact cards */}
            <motion.a
              variants={fadeInUp}
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-3xl border border-charcoal-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <FiMapPin className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-heading text-lg text-charcoal-900">
                  Visit Us
                </span>
                <span className="mt-0.5 block text-sm text-charcoal-500">
                  {site.address.full}
                </span>
              </span>
              <FiArrowUpRight className="h-5 w-5 text-charcoal-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={site.phoneHref}
              className="group flex items-start gap-4 rounded-3xl border border-charcoal-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <FiPhone className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-heading text-lg text-charcoal-900">
                  Call Us
                </span>
                <span className="mt-0.5 block text-sm text-charcoal-500">
                  {site.phone}
                </span>
              </span>
              <FiArrowUpRight className="h-5 w-5 text-charcoal-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={`mailto:${site.email}`}
              className="group flex items-start gap-4 rounded-3xl border border-charcoal-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <FiMail className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-heading text-lg text-charcoal-900">
                  Email Us
                </span>
                <span className="mt-0.5 block text-sm text-charcoal-500">
                  {site.email}
                </span>
              </span>
              <FiArrowUpRight className="h-5 w-5 text-charcoal-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
            </motion.a>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(site.whatsapp, ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal-300 px-6 py-3.5 text-sm font-semibold text-charcoal-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white"
              >
                <FiPhone className="h-4 w-4" />
                Call
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-1">
              <span className="text-sm text-charcoal-400">Follow us:</span>
              {site.socials.map((s) => {
                const Icon = socialIcon[s.icon] ?? FaInstagram;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-charcoal-200 text-charcoal-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Map + hours column */}
          <Reveal direction="right" className="lg:col-span-3">
            <div className="overflow-hidden rounded-4xl border border-charcoal-100 bg-white shadow-soft">
              {/* Map */}
              <div className="relative aspect-[16/10] w-full bg-mist">
                {/* REPLACE map src in lib/site.ts with the restaurant's real embed */}
                <iframe
                  title={`Map showing ${site.name}`}
                  src={site.mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>

              {/* Hours */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <FiClock className="h-5 w-5 text-brand-600" />
                  <h3 className="font-heading text-xl text-charcoal-900">
                    Opening Hours
                  </h3>
                </div>
                <ul className="mt-5 divide-y divide-charcoal-100">
                  {site.hours.map((h, i) => (
                    <li
                      key={h.day}
                      className={cn(
                        'flex items-center justify-between py-2.5 text-sm',
                        i === today && 'font-semibold text-charcoal-900',
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {h.day}
                        {i === today && (
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-green-700">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={cn(
                          i === today ? 'text-brand-600' : 'text-charcoal-500',
                        )}
                      >
                        {h.closed ? 'Closed' : h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
