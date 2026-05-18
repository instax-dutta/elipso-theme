import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import { breakpoint } from '@/theme';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    width: 100%;
    max-width: 34rem;
    margin: 0 auto;

    ${breakpoint('sm')`
        width: min(100%, 34rem);
    `};

    ${breakpoint('md')`
        ${tw`px-2`}
    `};
`;

const Shell = styled.div`
    ${tw`w-full mx-auto p-8 md:p-10 overflow-hidden`};
    border-radius: 1.25rem;
    border: 1px solid var(--elipso-hairline, #202733);
    background:
        linear-gradient(180deg, color-mix(in srgb, var(--elipso-canvas-raised) 98%, transparent) 0%, color-mix(in srgb, var(--elipso-canvas-soft) 98%, transparent) 100%);
    box-shadow: var(--elipso-shadow-panel, 0 1px 1px rgba(0, 0, 0, 0.34), 0 24px 60px rgba(0, 0, 0, 0.42));
    backdrop-filter: blur(18px);
`;

const Eyebrow = styled.p`
    ${tw`text-xs uppercase mb-3`};
    color: var(--elipso-muted, #7d8796);
    letter-spacing: 0.08em;
`;

const Mark = styled.div`
    ${tw`mb-8 flex items-center justify-between`};
`;

const Brand = styled.div`
    ${tw`text-sm font-medium`};
    color: var(--elipso-body, #b1bac7);
    letter-spacing: 0.02em;
`;

const Dot = styled.div`
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 9999px;
    background: linear-gradient(135deg, var(--elipso-link, #6bb8ff) 0%, var(--elipso-cyan, #56d4b0) 100%);
    box-shadow: 0 0 0 0.35rem color-mix(in srgb, var(--elipso-cyan, #56d4b0) 8%, transparent);
`;

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        {title && (
            <h2
                css={tw`text-4xl md:text-5xl text-left text-neutral-100 font-semibold pb-6`}
                style={{ letterSpacing: '-0.06em', lineHeight: 0.96 }}
            >
                {title}
            </h2>
        )}
        <FlashMessageRender css={tw`mb-2 px-1`} />
        <Form {...props} ref={ref}>
            <Shell>
                <Mark>
                    <Brand>Pterodactyl Panel</Brand>
                    <Dot />
                </Mark>
                <Eyebrow>Secure Access</Eyebrow>
                <div>{props.children}</div>
            </Shell>
        </Form>
        <p css={tw`text-left text-neutral-500 text-xs mt-5`}>
            &copy; 2015 - {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://pterodactyl.io'}
                target={'_blank'}
                css={tw`no-underline text-neutral-500 hover:text-neutral-300`}
            >
                Pterodactyl Software
            </a>
        </p>
    </Container>
));
