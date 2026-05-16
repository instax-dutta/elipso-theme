import styled, { css } from 'styled-components/macro';
import tw from 'twin.macro';

export interface Props {
    isLight?: boolean;
    hasError?: boolean;
}

const light = css<Props>`
    ${tw`bg-neutral-800 border-neutral-600 text-white`};
    &:focus {
        ${tw`border-white`}
    }

    &:disabled {
        ${tw`bg-neutral-900 border-neutral-700`};
    }
`;

const checkboxStyle = css<Props>`
    ${tw`bg-neutral-800 cursor-pointer appearance-none inline-block align-middle select-none flex-shrink-0 w-4 h-4 text-cyan-400 border border-neutral-600 rounded-sm`};
    color-adjust: exact;
    background-origin: border-box;
    transition: all 75ms linear, box-shadow 25ms linear;

    &:checked {
        ${tw`border-transparent bg-no-repeat bg-center`};
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-color: currentColor;
        background-size: 100% 100%;
    }

    &:focus {
        ${tw`outline-none border-cyan-400`};
        box-shadow: 0 0 0 1px rgba(80, 227, 194, 0.25);
    }
`;

const inputStyle = css<Props>`
    resize: none;
    ${tw`appearance-none outline-none w-full min-w-0`};
    ${tw`px-3 py-2 border rounded-md text-sm transition-all duration-150`};
    ${tw`bg-neutral-800 border-neutral-700 hover:border-neutral-600 text-white shadow-none focus:ring-0`};

    & + .input-help {
        ${tw`mt-1 text-xs`};
        ${(props) => (props.hasError ? tw`text-red-400` : tw`text-neutral-500`)};
    }

    &:required,
    &:invalid {
        ${tw`shadow-none`};
    }

    &:not(:disabled):not(:read-only):focus {
        ${tw`border-white shadow-lg ring-2 ring-neutral-500 ring-opacity-30`};
        ${(props) => props.hasError && tw`border-red-400 ring-red-500`};
    }

    &:disabled {
        ${tw`opacity-50`};
    }

    &::placeholder {
        ${tw`text-neutral-500`};
    }

    ${(props) => props.isLight && light};
    ${(props) => props.hasError && tw`text-red-300 border-red-500 hover:border-red-400`};
`;

const Input = styled.input<Props>`
    &:not([type='checkbox']):not([type='radio']) {
        ${inputStyle};
    }

    &[type='checkbox'],
    &[type='radio'] {
        ${checkboxStyle};

        &[type='radio'] {
            ${tw`rounded-full`};
        }
    }
`;
const Textarea = styled.textarea<Props>`
    ${inputStyle}
`;

export { Textarea };
export default Input;