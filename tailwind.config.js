const colors = require('tailwindcss/colors');

const gray = {
    50: '#1a1a1a',
    100: '#111111',
    200: '#0a0a0a',
    300: '#333333',
    400: '#555555',
    500: '#666666',
    600: '#888888',
    700: '#a1a1a1',
    800: '#e0e0e0',
    900: '#ffffff',
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
                primary: {
                    50: '#1a1a1a',
                    100: '#111111',
                    200: '#0a0a0a',
                    300: '#333333',
                    400: '#555555',
                    500: '#ffffff',
                    600: '#e0e0e0',
                    700: '#cccccc',
                    800: '#999999',
                    900: '#666666',
                },
                blue: {
                    ...colors.blue,
                    500: '#0070f3',
                    600: '#3b9aff',
                    700: '#0761d1',
                },
                gray: gray,
                neutral: gray,
                cyan: {
                    ...colors.cyan,
                    400: '#50e3c2',
                    600: '#00dfd8',
                    700: '#29bc9b',
                },
                yellow: {
                    ...colors.yellow,
                    400: '#f9cb28',
                    700: '#f5a623',
                },
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.600', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};