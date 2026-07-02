import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Accent / text — dark charcoal
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#2b2b2b',
          900: '#161616',
          950: '#0b0b0b',
          DEFAULT: '#161616',
        },
        // Secondary — brand red
        brand: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#f76565',
          500: '#e63c3c',
          600: '#d62828',
          700: '#b41d1d',
          800: '#941c1c',
          900: '#7b1d1d',
          950: '#430a0a',
          DEFAULT: '#d62828',
        },
        // Small golden highlights
        gold: {
          50: '#fbf8f0',
          100: '#f3e9cf',
          200: '#e7d3a0',
          300: '#dabd71',
          400: '#d0aa50',
          500: '#c6a15b',
          600: '#a8823f',
          700: '#866434',
          800: '#6f532f',
          900: '#5f472b',
          DEFAULT: '#c6a15b',
        },
        cream: '#f8f7f4',
        mist: '#f5f5f3',
      },
      fontFamily: {
        heading: ['var(--font-imfell)', 'Georgia', 'serif'],
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['clamp(2.5rem, 6vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display': ['clamp(3rem, 8vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3.5rem, 10vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(22, 22, 22, 0.15)',
        lift: '0 24px 60px -20px rgba(22, 22, 22, 0.28)',
        glow: '0 18px 45px -12px rgba(214, 40, 40, 0.55)',
        'glow-gold': '0 18px 45px -14px rgba(198, 161, 91, 0.55)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-charcoal':
          'linear-gradient(rgba(22,22,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(214,40,40,0.10) 0%, rgba(214,40,40,0) 70%)',
        'gold-sheen':
          'linear-gradient(110deg, transparent 20%, rgba(198,161,91,0.35) 50%, transparent 80%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(3deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        'bg-pan': 'bg-pan 8s linear infinite alternate',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
