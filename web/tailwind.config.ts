import type { Config } from 'tailwindcss';

/**
 * Tokens de marca Green Science (ver docs/02-design-system.md).
 * Mobile-first: contenedor 1200px, tipografías display (Sora) + body (Inter).
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        lime: { DEFAULT: '#7AC943', 400: '#8FD45C', 500: '#7AC943', 600: '#5FB231', 700: '#4E9628' },
        forest: { DEFAULT: '#2E7D32', deep: '#1B5E20', 600: '#2E7D32', 700: '#256528' },
        navy: { DEFAULT: '#15356A', 700: '#15356A', 800: '#0F2851' },
        ink: { DEFAULT: '#1C2421' },
        mute: { DEFAULT: '#5B6B61' },
        cream: { DEFAULT: '#F7FAF6' },
        night: { DEFAULT: '#0B0F0C', 800: '#111713' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Sora', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl: '1rem', '2xl': '1.5rem', '3xl': '2rem' },
      maxWidth: { content: '1200px' },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(16,40,24,0.08), 0 8px 30px -10px rgba(16,40,24,0.12)',
        card: '0 1px 2px rgba(16,40,24,0.04), 0 14px 36px -16px rgba(16,40,24,0.20)',
        glow: '0 0 0 1px rgba(122,201,67,0.25), 0 12px 40px -12px rgba(46,125,50,0.45)',
      },
      backgroundImage: {
        brand: 'linear-gradient(135deg, #7AC943 0%, #2E7D32 55%, #1B5E20 100%)',
        'brand-soft': 'linear-gradient(135deg, rgba(122,201,67,0.12), rgba(46,125,50,0.06))',
        hero: 'radial-gradient(120% 120% at 12% 8%, #1B5E20 0%, #0B0F0C 62%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 7s ease-in-out infinite',
      },
      transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.22,1,0.36,1)' },
    },
  },
  plugins: [],
};

export default config;
