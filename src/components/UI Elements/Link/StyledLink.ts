import { Link as Href } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

interface StyledProps {
    underline?: number;
    disabled?: boolean;
}

export const LinkWrapper = styled(Href)<StyledProps>`
    text-decoration: ${(props) => (props.underline ? 'underline !important' : 'none')};

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed !important;
            opacity: 0.5;
        `}
`;
