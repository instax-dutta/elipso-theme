const elipsoDark = {
  50:  '#fafafa',
  100: '#ededed',
  200: '#d4d4d4',
  300: '#a1a1a1',
  400: '#888888',
  500: '#666666',
  600: '#444444',
  700: '#333333',
  800: '#222222',
  900: '#111111',
  950: '#0a0a0a',
};

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
        gray:    elipsoDark,
        neutral: elipsoDark,
        slate:   elipsoDark,
        zinc:    elipsoDark,
        stone:   elipsoDark,
        // Semantic colors — keep these intact
        blue: {
          DEFAULT: '#0070f3',
          400: '#3291ff',
          500: '#0070f3',
          600: '#0761d1',
        },
        red: {
          DEFAULT: '#ff4444',
          400: '#ff6b6b',
          500: '#ff4444',
          600: '#cc0000',
        },
        green: {
          DEFAULT: '#00c950',
          400: '#00e676',
          500: '#00c950',
          600: '#00a040',
        },
        yellow: {
          DEFAULT: '#f5a623',
          400: '#f7b955',
          500: '#f5a623',
          600: '#d4891a',
        },
        cyan: {
          DEFAULT: '#50e3c2',
          400: '#7fecce',
          500: '#50e3c2',
          600: '#29bc9b',
        },
        purple: {
          DEFAULT: '#7928ca',
          400: '#a855f7',
          500: '#7928ca',
          600: '#5c1e9a',
        },
      },
      borderRadius: {
        sm:    '4px',
        DEFAULT:'6px',
        md:    '6px',
        lg:    '8px',
        xl:    '12px',
        '2xl': '12px',
        full:  '9999px',
      },
      boxShadow: {
        sm:      '0 1px 2px rgba(0,0,0,0.12)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.18)',
        md:      '0 2px 6px rgba(0,0,0,0.2)',
        lg:      '0 4px 12px rgba(0,0,0,0.25)',
        xl:      '0 8px 24px rgba(0,0,0,0.3)',
        none:    'none',
      },
    },
  },
  plugins: [],
};