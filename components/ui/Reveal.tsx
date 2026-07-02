'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { revealVariants, type RevealDirection } from '@/lib/animations';
import { cn } from '@/lib/utils';

type RevealProps = {
  direction?: RevealDirection;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView'>;

/**
 * Scroll-triggered entrance wrapper. Wrap any block to reveal it as it
 * enters the viewport. Reduced-motion is respected globally via CSS.
 */
export function Reveal({
  direction = 'up',
  delay = 0,
  once = true,
  amount = 0.25,
  as = 'div',
  className,
  children,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const variant = revealVariants[direction];

  return (
    <MotionTag
      className={cn(className)}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
