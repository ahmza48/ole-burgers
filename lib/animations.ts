import type { Variants } from 'framer-motion';

/**
 * Central animation library.
 * All motion is subtle and premium; respect prefers-reduced-motion
 * is handled globally via CSS + the <Reveal> component honoring the
 * `once` viewport so nothing re-triggers noisily.
 */

export const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 16 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: easePremium },
  },
};

/** Stagger container — children reveal in sequence. */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0.05,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Generic reveal chooser used by the <Reveal> component. */
export const revealVariants: Record<string, Variants> = {
  fade: fadeIn,
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
  blur: blurIn,
};

export type RevealDirection = keyof typeof revealVariants;

/** Hover lift for interactive cards. */
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -8, transition: { duration: 0.4, ease: easePremium } },
};
