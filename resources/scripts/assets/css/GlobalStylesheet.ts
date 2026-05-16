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
        --elipso-ink: #171717;
        --elipso-body: #4d4d4d;
        --elipso-muted: #888888;
        --elipso-hairline: #ebebeb;
        --elipso-canvas: #ffffff;
        --elipso-canvas-soft: #fafafa;
        --elipso-canvas-soft-2: #f5f5f5;
        --elipso-link: #0070f3;
        --elipso-error: #ee0000;
        --elipso-warning: #f5a623;
        --elipso-cyan: #50e3c2;
        --elipso-violet: #7928ca;
        --elipso-pink: #ff0080;
        --elipso-ship: #f9cb28;
        --elipso-shadow: 0 1px 1px rgb(0 0 0 / 3%), 0 8px 24px rgb(0 0 0 / 6%);
    }

    body {
        ${tw`font-sans bg-neutral-100 text-neutral-800`};
        letter-spacing: 0;
        color: var(--elipso-body);
        background:
            radial-gradient(circle at 18% -12%, rgb(0 124 240 / 16%), transparent 28rem),
            radial-gradient(circle at 82% 0%, rgb(255 0 128 / 12%), transparent 26rem),
            linear-gradient(180deg, var(--elipso-canvas), var(--elipso-canvas-soft) 34rem);
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-semibold font-header`};
        color: var(--elipso-ink);
        letter-spacing: -0.04em;
    }

    p {
        ${tw`leading-snug font-sans`};
        color: var(--elipso-body);
    }

    a {
        color: inherit;
    }

    ::selection {
        color: #f2f2f2;
        background: var(--elipso-ink);
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
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

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px #ebebeb, inset 0 0 0 4px #c7c7c7;
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;
