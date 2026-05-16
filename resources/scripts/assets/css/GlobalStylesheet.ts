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
        /* Core surfaces */
        --elipso-canvas:          #0a0a0a;
        --elipso-canvas-soft:     #111111;
        --elipso-canvas-soft-2:   #1a1a1a;
        --elipso-canvas-raised:   #141414;

        /* Text */
        --elipso-ink:             #ededed;
        --elipso-body:            #a1a1a1;
        --elipso-muted:           #666666;

        /* Borders */
        --elipso-hairline:        #262626;
        --elipso-hairline-strong: #404040;

        /* Primary action — white pill on dark surface */
        --elipso-primary:         #ffffff;
        --elipso-on-primary:      #0a0a0a;

        /* Semantic */
        --elipso-link:            #0070f3;
        --elipso-link-deep:       #3291ff;
        --elipso-success:         #00c950;
        --elipso-success-soft:    rgba(0, 201, 80, 0.15);
        --elipso-error:           #ff4444;
        --elipso-error-soft:      rgba(255, 68, 68, 0.12);
        --elipso-warning:         #f5a623;
        --elipso-warning-soft:    rgba(245, 166, 35, 0.12);

        /* Accents */
        --elipso-violet:          #7928ca;
        --elipso-cyan:            #50e3c2;
        --elipso-highlight-pink:  #ff0080;

        /* Gradient stops */
        --elipso-grad-dev-start:  #007cf0;
        --elipso-grad-dev-end:    #00dfd8;
        --elipso-grad-prev-start: #7928ca;
        --elipso-grad-prev-end:   #ff0080;
        --elipso-grad-ship-start: #ff4d4d;
        --elipso-grad-ship-end:   #f9cb28;

        /* Elevation */
        --shadow-1: inset 0 0 0 1px rgba(255,255,255,0.06);
        --shadow-2: 0px 1px 1px rgba(0,0,0,0.3), 0px 2px 2px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.06);
        --shadow-3: 0px 2px 2px rgba(0,0,0,0.3), 0px 8px 8px -8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06);
        --shadow-4: 0px 2px 2px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06);
        --shadow-5: 0px 1px 1px rgba(0,0,0,0.3), 0px 8px 16px -4px rgba(0,0,0,0.4), 0px 24px 32px -8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06);

        /* Radius */
        --radius-ui:      6px;
        --radius-card:    8px;
        --radius-card-lg: 12px;
        --radius-pill:    100px;
        --radius-full:    9999px;
    }

    body {
        ${tw`font-sans`};
        background: var(--elipso-canvas);
        color: var(--elipso-ink);
        font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.01em;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
        font-weight: 600;
        color: var(--elipso-ink) !important;
        letter-spacing: -0.04em;
        line-height: 1.25;
    }

    p {
        ${tw`leading-snug font-sans`};
        color: var(--elipso-body);
    }

    /* Typography scale */
    h1, .display-xl { font-size: 48px; font-weight: 600; line-height: 48px; letter-spacing: -0.15rem; }
    h2, .display-lg { font-size: 32px; font-weight: 600; line-height: 40px; letter-spacing: -0.08rem; }
    h3, .display-md { font-size: 24px; font-weight: 600; line-height: 32px; letter-spacing: -0.06rem; }
    h4, .display-sm { font-size: 20px; font-weight: 600; line-height: 28px; letter-spacing: -0.04rem; }

    a {
        color: var(--elipso-link) !important;
        text-decoration: none;
    }

    a:hover {
        color: var(--elipso-link-deep) !important;
        text-decoration: underline;
    }

    code, pre, kbd, samp {
        font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
        font-size: 13px;
        line-height: 20px;
    }

    ::selection {
        background: #ffffff;
        color: #0a0a0a;
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

    /* Scrollbar */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background: var(--elipso-canvas);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--elipso-hairline-strong);
        border-radius: var(--radius-full);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--elipso-muted);
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;