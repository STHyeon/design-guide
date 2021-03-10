import styled from 'styled-components/macro';
import { ListItem, Link } from 'components';
import { color } from 'assets/style/common';

export const PaginationWrapper = styled.ul`
    display: flex;
`;

export const PaginationItem = styled(ListItem)`
    &:first-child {
        a {
            margin-left: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
    }

    &:last-child {
        a {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
`;

export const PaginationLink = styled(Link)`
    display: block;
    position: relative;
    margin-left: -1px;
    padding: 6px 12px;
    border: 1px solid ${color.bright};
    color: ${color.primary};
    background: ${color.light};

    &:hover {
        background: ${color.bright};
    }
`;
