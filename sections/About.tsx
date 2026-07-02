'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { about, stats } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function About() {
  return (
    <section id="about" className="section relative scroll-mt-24 bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <Reveal direction="left" className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl shadow-lift">
              {/* REPLACE WITH REAL IMAGE */}
              <Image
                src={about.imagePrimary}
                alt="A freshly grilled Olé burger being assembled"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            {/* Secondary floating image */}
            <motion.div
              className="absolute -bottom-8 -right-4 aspect-square w-40 overflow-hidden rounded-3xl border-4 border-white shadow-lift sm:w-52"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* REPLACE WITH REAL IMAGE */}
              <Image
                src={about.imageSecondary}
                alt="Close-up of premium beef patties on the grill"
                fill
                sizes="208px"
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
            {/* Experience badge */}
            <div className="absolute -left-4 top-8 rounded-2xl bg-brand-600 px-5 py-4 text-white shadow-glow">
              <p className="font-heading text-3xl leading-none">10+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-100">
                Years of craft
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal direction="up">
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-px w-6 bg-brand-600" aria-hidden />
                {about.eyebrow}
              </span>
              <h2 className="mt-4 font-heading text-4xl leading-[1.08] text-charcoal-900 sm:text-5xl">
                {about.title}
              </h2>
            </Reveal>

            <motion.div
              variants={staggerContainer(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-6 space-y-4"
            >
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-base leading-relaxed text-charcoal-500 md:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div key={s.id} variants={fadeInUp}>
                  <dt className="font-heading text-3xl text-brand-600 sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-charcoal-400">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
