import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#0f172a',
          900: '#020817',
        },
        gold: {
          400: '#f6c76f',
          500: '#d4a436',
          600: '#b8860b',
        },
      },
      boxShadow: {
        premium: '0 20px 45px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
