import React, { FC } from 'react';
import * as S from './StyledLink';

export interface LinkProps {
    /** 링크 주소 */
    to: string;
    /** 밑줄 활성화 여부 */
    underline?: boolean;
    /** 접근성 */
    tabIndex?: number;
    /** 접근성 */
    ariaLabel?: string;
}

export const Link: FC<LinkProps> = ({ children, tabIndex, ariaLabel, underline = false, to = '', ...props }) => (
    <S.LinkWrapper to={to} tabIndex={tabIndex} aria-label={ariaLabel} underline={underline ? 1 : 0} {...props}>
        {children}
    </S.LinkWrapper>
);
