import React, { FC } from 'react';
import * as S from './StyledLink';

export interface LinkProps {
    /** 링크 주소 */
    to: string;
    /** 밑줄 활성화 여부 */
    underline?: boolean;
    /** 접근성 */
    tabIndex?: number;
}

export const Link: FC<LinkProps> = ({ children, tabIndex, underline = false, to = '', ...props }) => (
    <S.LinkWrapper to={to} tabIndex={tabIndex} underline={underline ? 1 : 0} {...props}>
        {children}
    </S.LinkWrapper>
);
