const elipsoDark = {
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
        '2xl': '16px',
        full:  '9999px',
      },
      boxShadow: {
        sm:      'inset 0 0 0 1px rgba(255,255,255,0.06)',
        DEFAULT: '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 8px -8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        md:      '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 2px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.06)',
        lg:      '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        xl:      '0px 1px 1px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), 0px 24px 32px -8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)',
        none:    'none',
      },
    },
  },
  plugins: [],
};