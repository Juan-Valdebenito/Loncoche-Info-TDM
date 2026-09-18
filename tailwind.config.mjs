import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cancha: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#b3caff',
          300: '#80a6ff',
          400: '#4d7bff',
          500: '#2455f0',
          600: '#173dc4',
          700: '#122f99',
          800: '#0f2575',
          900: '#0c1d5c',
        },
        pelota: {
          400: '#ff9d4d',
          500: '#ff7a1a',
          600: '#f05f00',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
