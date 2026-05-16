import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded-lg no-underline text-neutral-800 items-center bg-white p-4 border border-neutral-300 transition-all duration-150 overflow-hidden`};
    box-shadow: 0 1px 1px rgb(0 0 0 / 3%), 0 8px 24px rgb(0 0 0 / 4%);

    ${(props) => props.$hoverable !== false && tw`hover:border-neutral-500 hover:-translate-y-px`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-neutral-100 border border-neutral-300 text-black p-3`};
    }
`;
