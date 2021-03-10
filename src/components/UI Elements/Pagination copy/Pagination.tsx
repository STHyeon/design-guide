import React, { FC } from 'react';
import * as S from './StyledPagination';

type LinkProp = {
    title: string;
    link: string;
};

interface BreadcrumbsProps {
    items: LinkProp[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, ...props }) => (
    <S.BreadcrumbsWrapper {...props}>
        {items?.map(({ title, link }) => (
            <S.BreadcrumbsItem key={title}>
                <S.BreadcrumbsLink to={link}>{title}</S.BreadcrumbsLink>
            </S.BreadcrumbsItem>
        ))}
    </S.BreadcrumbsWrapper>
);
