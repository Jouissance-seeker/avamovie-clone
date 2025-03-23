import type { Config } from 'tailwindcss';

export default {
  content: [
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      fontSize: {
        smp: '15px',
        xsp: '13px',
      },
      colors: {
        pink: {
          DEFAULT: '#dd3268',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
