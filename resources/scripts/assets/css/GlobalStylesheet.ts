import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';
// @ts-expect-error untyped font file
import geist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2';
// @ts-expect-error untyped font file
import geistMono from '@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Geist';
        font-style: normal;
        font-display: swap;
        font-weight: 100 900;
        src: url(${geist}) format('woff2-variations');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-U+02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }

    @font-face {
        font-family: 'Geist Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 100 900;
        src: url(${geistMono}) format('woff2-variations');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }

    :root {
        --elipso-ink: #ffffff;
        --elipso-on-primary: #000000;
        --elipso-body: #a1a1a1;
        --elipso-muted: #666666;
        --elipso-hairline: #333333;
        --elipso-canvas: #0a0a0a;
        --elipso-canvas-soft: #111111;
        --elipso-canvas-soft-2: #1a1a1a;
        --elipso-link: #0070f3;
        --elipso-cyan: #50e3c2;
        --elipso-violet: #7928ca;
        --elipso-pink: #ff0080;
        --elipso-ship: #f9cb28;
    }

    body {
        ${tw`font-sans bg-black text-neutral-400`};
        letter-spacing: -0.01em;
        color: var(--elipso-body);
        background: 
            radial-gradient(circle at 18% -12%, rgb(0 124 240 / 10%), transparent 28rem),
            radial-gradient(circle at 82% 0%, rgb(255 0 128 / 8%), transparent 26rem),
            var(--elipso-canvas) !important;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-semibold font-header`};
        color: var(--elipso-ink) !important;
        letter-spacing: -0.04em;
    }

    p {
        ${tw`leading-snug font-sans`};
        color: var(--elipso-body);
    }

    a {
        color: var(--elipso-link) !important;
    }

    ::selection {
        color: #000000;
        background: #ffffff;
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 5px;
        border: 2px solid #0a0a0a;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555555;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;