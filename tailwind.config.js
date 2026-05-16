const colors = require('tailwindcss/colors');

// Vercel Dark Mode Gray Scale
const vercelGray = {
    50: '#ffffff',
    100: '#f5f5f5',
    200: '#ebebeb',
    300: '#a1a1a1',
    400: '#888888',
    500: '#666666',
    600: '#555555',
    700: '#333333',
    800: '#1a1a1a',
    900: '#111111',
    950: '#0a0a0a',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Geist"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
                header: ['"Geist"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            colors: {
                black: '#000000',
                white: '#ffffff',
                primary: vercelGray,
                gray: vercelGray,
                neutral: vercelGray,
                cyan: {
                    ...colors.cyan,
                    300: '#7ee6d3',
                    400: '#50e3c2',
                    500: '#00dfd8',
                    600: '#00c4b8',
                    700: '#29bc9b',
                },
                blue: {
                    ...colors.blue,
                    400: '#3b9aff',
                    500: '#0070f3',
                    600: '#0060df',
                    700: '#0761d1',
                },
                violet: {
                    ...colors.violet,
                    400: '#9460ea',
                    500: '#7928ca',
                    600: '#5b21b6',
                    700: '#4c2889',
                },
                pink: {
                    ...colors.pink,
                    400: '#ff4da6',
                    500: '#ff0080',
                    600: '#e60070',
                },
                yellow: {
                    ...colors.yellow,
                    400: '#f9cb28',
                    500: '#f5a623',
                    600: '#d4900f',
                },
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.03em',
                normal: '-0.01em',
            },
            borderRadius: {
                'none': '0',
                'sm': '4px',
                'DEFAULT': '6px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
                'pill': '100px',
                'full': '9999px',
            },
            boxShadow: {
                'vercel-sm': '0px 1px 1px rgba(0,0,0,0.2), 0px 2px 2px rgba(0,0,0,0.1)',
                'vercel-md': '0px 2px 2px rgba(0,0,0,0.15), 0px 8px 8px -8px rgba(0,0,0,0.2)',
                'vercel-lg': '0px 2px 2px rgba(0,0,0,0.15), 0px 8px 16px -4px rgba(0,0,0,0.25)',
                'vercel-xl': '0px 1px 1px rgba(0,0,0,0.2), 0px 8px 16px -4px rgba(0,0,0,0.3), 0px 24px 32px -8px rgba(0,0,0,0.4)',
            },
            transitionDuration: {
                '150': '150ms',
                '200': '200ms',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};