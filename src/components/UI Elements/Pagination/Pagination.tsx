import React, { FC } from 'react';
import * as S from './StyledPagination';

type LinkProp = {
    title: string;
    link: string;
};

interface PaginationProps {
    items: LinkProp[];
}

export const Pagination: FC<PaginationProps> = ({ items, ...props }) => (
    <S.PaginationWrapper {...props}>
        <S.PaginationItem>
            <S.PaginationLink to={'link'} aria-label="이전">
                &laquo;
            </S.PaginationLink>
        </S.PaginationItem>

        {items?.map(({ title, link }) => (
            <S.PaginationItem key={title}>
                <S.PaginationLink to={link}>{title}</S.PaginationLink>
            </S.PaginationItem>
        ))}

        <S.PaginationItem>
            <S.PaginationLink to={'link'} aria-label="다음">
                &raquo;
            </S.PaginationLink>
        </S.PaginationItem>
    </S.PaginationWrapper>
);
