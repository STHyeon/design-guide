import React, { FC } from 'react';
import * as S from './StyledListItem';

interface ListItemProps {
    /** 접근성 */
    tabIndex?: number;
}

export const ListItem: FC<ListItemProps> = ({ children, tabIndex, ...props }) => (
    <S.Item tabIndex={tabIndex} {...props}>
        {children}
    </S.Item>
);
