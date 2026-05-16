const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './resources/scripts/**/*.{js,jsx,ts,tsx}',
    './resources/views/**/*.blade.php',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        // Remap neutral — Pterodactyl's primary scale for backgrounds, text, borders
        neutral: {
          50:  '#ededed',
          100: '#d4d4d4',
          200: '#a1a1a1',
          300: '#888888',
          400: '#666666',
          500: '#404040',
          600: '#262626',
          700: '#1a1a1a',
          800: '#111111',
          900: '#0a0a0a',
          950: '#050505',
        },
        // Remap gray — used in some panel areas
        gray: {
          50:  '#ededed',
          100: '#d4d4d4',
          200: '#a1a1a1',
          300: '#888888',
          400: '#666666',
          500: '#404040',
          600: '#262626',
          700: '#1a1a1a',
          800: '#111111',
          900: '#0a0a0a',
          950: '#050505',
        },
        // Keep semantic colors intact
        blue:   colors.blue,
        red:    colors.red,
        yellow: colors.yellow,
        green:  colors.green,
        cyan:   colors.cyan,
        purple: colors.purple,
        // Elipso accent overrides
        primary: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
      },
      borderRadius: {
        DEFAULT: '6px',
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        '2xl':'16px',
        full: '9999px',
      },
      boxShadow: {
        DEFAULT: '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 8px -8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        sm:  'inset 0 0 0 1px rgba(255,255,255,0.06)',
        md:  '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 2px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.06)',
        lg:  '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        xl:  '0px 1px 1px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), 0px 24px 32px -8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)',
        none: 'none',
      },
    },
  },
  plugins: [],
};