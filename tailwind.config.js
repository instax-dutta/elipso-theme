module.exports = {
  content: ['./resources/**/*.{js,jsx,ts,tsx,blade.php}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        elipso: {
          canvas:           '#0a0a0a',
          'canvas-soft':    '#111111',
          'canvas-soft-2':  '#1a1a1a',
          'canvas-raised':  '#141414',
          ink:              '#ededed',
          body:             '#a1a1a1',
          muted:            '#666666',
          hairline:         '#262626',
          'hairline-strong':'#404040',
          primary:          '#ffffff',
          'on-primary':     '#0a0a0a',
          link:             '#0070f3',
          success:          '#00c950',
          error:            '#ff4444',
          warning:          '#f5a623',
        },
      },
      borderRadius: {
        ui:       '6px',
        card:     '8px',
        'card-lg':'12px',
        pill:     '100px',
        'pill-sm':'64px',
      },
      boxShadow: {
        '1': 'inset 0 0 0 1px rgba(255,255,255,0.06)',
        '2': '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 2px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.06)',
        '3': '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 8px -8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        '4': '0px 2px 2px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        '5': '0px 1px 1px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), 0px 24px 32px -8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)',
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '48px', letterSpacing: '-0.15rem', fontWeight: '600' }],
        'display-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.08rem', fontWeight: '600' }],
        'display-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.06rem', fontWeight: '600' }],
        'display-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.04rem', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};