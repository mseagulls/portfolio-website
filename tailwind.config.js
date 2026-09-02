/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from palette
        'brand-black': '#02010A',
        'brand-prussian': '#04052E',
        'brand-twilight': '#140152',
        'brand-navy': '#22007C',
        'brand-blue': '#0D00A4',

        // Color variants for easier usage
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#0D00A4', // brand-blue
          600: '#22007C', // brand-navy
          700: '#140152', // brand-twilight
          800: '#04052E', // brand-prussian
          900: '#02010A', // brand-black
        },
        dark: {
          'bg-primary': '#02010A',
          'bg-secondary': '#04052E',
          'bg-tertiary': '#140152',
          'accent-primary': '#22007C',
          'accent-secondary': '#0D00A4',
        },
      },
      backgroundColor: {
        'brand-dark': '#02010A',
        'brand-dark-2': '#04052E',
        'brand-dark-3': '#140152',
        'brand-accent': '#22007C',
        'brand-accent-2': '#0D00A4',
      },
      borderColor: {
        'brand-navy': '#22007C',
        'brand-blue': '#0D00A4',
        'brand-twilight': '#140152',
      },
      textColor: {
        'brand-navy': '#22007C',
        'brand-blue': '#0D00A4',
        'brand-twilight': '#140152',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
