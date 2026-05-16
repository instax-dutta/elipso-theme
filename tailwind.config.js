const colors = require('tailwindcss/colors');

const gray = {
    50: '#ffffff',
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#ebebeb',
    400: '#c7c7c7',
    500: '#a1a1a1',
    600: '#888888',
    700: '#666666',
    800: '#4d4d4d',
    900: '#171717',
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
                black: '#171717',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: {
                    50: '#ffffff',
                    100: '#f2f2f2',
                    200: '#ebebeb',
                    300: '#c7c7c7',
                    400: '#888888',
                    500: '#171717',
                    600: '#000000',
                    700: '#000000',
                    800: '#000000',
                    900: '#000000',
                },
                blue: {
                    ...colors.blue,
                    500: '#0070f3',
                    600: '#0070f3',
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
                default: theme('colors.neutral.400', 'currentColor'),
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
