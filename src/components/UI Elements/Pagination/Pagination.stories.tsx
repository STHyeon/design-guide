import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
    title: 'UI Elements/Pagination',
    component: Pagination
} as Meta;

const data1 = [
    {
        title: '1',
        link: '/'
    }
];

const data2 = [
    {
        title: '1',
        link: '/'
    },
    {
        title: '2',
        link: '/'
    }
];

const data3 = [
    {
        title: '1',
        link: '/'
    },
    {
        title: '2',
        link: '/'
    },
    {
        title: '3',
        link: '/'
    }
];

export const Basic: FC = () => <Pagination items={data2} />;

export const All: FC = () => (
    <>
        <Pagination items={data1} />
        <Pagination items={data2} />
        <Pagination items={data3} />
    </>
);
