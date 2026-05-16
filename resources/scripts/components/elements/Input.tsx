import styled, { css } from 'styled-components/macro';
import tw from 'twin.macro';

export interface Props {
    isLight?: boolean;
    hasError?: boolean;
}

const light = css<Props>`
    background: var(--elipso-canvas-soft) !important;
    border-color: var(--elipso-hairline-strong) !important;
    color: var(--elipso-ink) !important;
    &:focus {
        border-color: var(--elipso-primary) !important;
    }

    &:disabled {
        opacity: 0.4;
    }
`;

const checkboxStyle = css<Props>`
    background: var(--elipso-canvas-soft-2) !important;
    border-color: var(--elipso-hairline) !important;
    width: 16px;
    height: 16px;
    accent-color: var(--elipso-primary);
    border-radius: 4px;
    cursor: pointer;
    appearance: none;
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
    transition: all 75ms linear, box-shadow 25ms linear;

    &:checked {
        background-color: var(--elipso-primary);
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%230a0a0a' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    &:focus {
        border-color: var(--elipso-primary) !important;
        box-shadow: 0 0 0 3px rgba(255,255,255,0.08) !important;
    }
`;

const inputStyle = css<Props>`
    resize: none;
    appearance: none;
    outline: none;
    width: 100%;
    min-width: 0;
    background: var(--elipso-canvas-soft) !important;
    border: 1px solid var(--elipso-hairline) !important;
    border-radius: var(--radius-ui) !important;
    color: var(--elipso-ink) !important;
    font-family: var(--font-sans);
    font-size: 14px;
    line-height: 20px;
    padding: 0 var(--space-sm);
    height: 40px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    & + .input-help {
        margin-top: 4px;
        font-size: 12px;
        color: var(--elipso-muted);
    }

    &:required,
    &:invalid {
        box-shadow: none;
    }

    &:not(:disabled):not(:read-only):focus {
        border-color: var(--elipso-primary) !important;
        box-shadow: 0 0 0 3px rgba(255,255,255,0.08) !important;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &::placeholder {
        color: var(--elipso-muted) !important;
    }

    &:hover {
        border-color: var(--elipso-hairline-strong) !important;
    }

    ${(props) => props.isLight && light};
    ${(props) => props.hasError && css`
        border-color: var(--elipso-error) !important;
        background: var(--elipso-error-soft) !important;
    `};
`;

const Input = styled.input<Props>`
    &:not([type='checkbox']):not([type='radio']) {
        ${inputStyle};
    }

    &[type='checkbox'],
    &[type='radio'] {
        ${checkboxStyle};

        &[type='radio'] {
            border-radius: 9999px;
        }
    }
`;
const Textarea = styled.textarea<Props>`
    ${inputStyle}
    height: auto;
    padding: var(--space-sm);
`;

export { Textarea };
export default Input;