'use client';

import { forwardRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold';
type Size = 'sm' | 'md' | 'lg';

type Ripple = { id: number; x: number; y: number; size: number };

const base =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-wide transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 select-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-glow focus-visible:ring-brand-600',
  secondary:
    'bg-charcoal-900 text-white shadow-soft hover:bg-charcoal-800 hover:shadow-lift focus-visible:ring-charcoal-900',
  ghost:
    'border border-charcoal-300 bg-transparent text-charcoal-900 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white focus-visible:ring-charcoal-900',
  gold: 'bg-gold-500 text-charcoal-900 shadow-soft hover:bg-gold-400 hover:shadow-glow-gold focus-visible:ring-gold-500',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children?: React.ReactNode;
} & Omit<HTMLMotionProps<'button'>, 'children'>;

/**
 * Premium button with hover scale, colored glow, and a ripple micro-interaction.
 * Motion is CSS/transition based and reduced-motion safe.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth,
      className,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick: ButtonProps['onClick'] = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        {
          id,
          x: e.clientX - rect.left - size / 2,
          y: e.clientY - rect.top - size / 2,
          size,
        },
      ]);
      window.setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== id)),
        600,
      );
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className,
        )}
        onClick={handleClick}
        {...rest}
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden
            className="pointer-events-none absolute animate-[pulse-ring_0.6s_ease-out] rounded-full bg-white/30"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
            }}
          />
        ))}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
