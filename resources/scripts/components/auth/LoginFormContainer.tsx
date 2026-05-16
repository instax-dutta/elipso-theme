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
    ${breakpoint('sm')`
        ${tw`w-4/5 mx-auto`}
    `};

    ${breakpoint('md')`
        ${tw`p-10`}
    `};

    ${breakpoint('lg')`
        ${tw`w-3/5`}
    `};

    ${breakpoint('xl')`
        ${tw`w-full`}
        max-width: 700px;
    `};
`;

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        {title && <h2 className={'text-3xl text-center text-[var(--elipso-ink)] font-semibold py-4 tracking-[-0.04em]'} style={{ fontFamily: 'var(--font-sans)' }}>{title}</h2>}
        <FlashMessageRender css={tw`mb-2 px-1`} />
        <Form {...props} ref={ref}>
            <div
                style={{
                    background: 'rgba(17,17,17,0.85)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    border: '1px solid var(--elipso-hairline)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-5)',
                }}
                className={'md:flex w-full p-6 mx-1 overflow-hidden'}
            >
                <div
                    style={{
                        background: 'var(--elipso-canvas-soft)',
                        borderRadius: '8px',
                    }}
                    className={'flex-none select-none mb-6 md:mb-0 md:mr-6 self-stretch p-6 flex items-center justify-center'}
                >
                    <img src={'/assets/svgs/pterodactyl.svg'} className={'block w-40 md:w-56 mx-auto'} alt="Pterodactyl" />
                </div>
                <div className={'flex-1'}>{props.children}</div>
            </div>
        </Form>
        <p className={'text-center text-[var(--elipso-muted)] text-xs mt-4'}>
            &copy; 2015 - {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://pterodactyl.io'}
                target={'_blank'}
                className={'no-underline text-[var(--elipso-muted)] hover:text-[var(--elipso-body)]'}
            >
                Pterodactyl Software
            </a>
        </p>
    </Container>
));