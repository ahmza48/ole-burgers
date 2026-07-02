'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  GiMeat,
  GiKnifeFork,
  GiBroom,
  GiChickenOven,
} from 'react-icons/gi';
import { FiZap, FiShield, FiHeart } from 'react-icons/fi';
import { FaLeaf, FaAward } from 'react-icons/fa';
import { features } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import type { Feature } from '@/types';

const iconMap: Record<Feature['icon'], IconType> = {
  meat: GiMeat,
  leaf: FaLeaf,
  bolt: FiZap,
  shield: FiShield,
  sparkles: FaAward,
  broom: GiBroom,
  heart: FiHeart,
  award: FaAward,
};

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon] ?? GiKnifeFork;
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/40 hover:bg-white/[0.07]"
    >
      {/* Hover sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-12 bg-gold-sheen opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-600/15 text-brand-500 ring-1 ring-brand-500/20 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="relative mt-5 font-heading text-xl text-white">
        {feature.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-charcoal-300">
        {feature.description}
      </p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-charcoal-950 text-white">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-charcoal bg-[size:44px_44px] opacity-[0.03]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <span className="text-white">
              Premium isn&apos;t a claim.{' '}
              <span className="text-gradient-brand">It&apos;s our standard.</span>
            </span>
          }
          subtitle={
            <span className="text-charcoal-300">
              From sourcing to service, every detail is designed to earn your
              next visit.
            </span>
          }
          titleClassName="text-white"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
