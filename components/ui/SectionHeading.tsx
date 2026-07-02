'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
};

/** Consistent, animated section header: eyebrow + title + subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <motion.span variants={fadeInUp} className="eyebrow inline-flex items-center gap-2">
          <span className="h-px w-6 bg-brand-600" aria-hidden />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={cn(
          'text-4xl font-normal leading-[1.05] sm:text-5xl lg:text-6xl',
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'max-w-2xl text-base leading-relaxed text-charcoal-500 md:text-lg',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
