import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumbs } from './Pagination';

export default {
    title: 'UI Elements/Breadcrumbs',
    component: Breadcrumbs
} as Meta;

const data1 = [
    {
        title: 'Home',
        link: '/'
    }
];

const data2 = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Library',
        link: '/'
    }
];

const data3 = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Library',
        link: '/'
    },
    {
        title: 'Data',
        link: '/'
    }
];

export const Basic: FC = () => <Breadcrumbs items={data2} />;

export const All: FC = () => (
    <>
        <Breadcrumbs items={data1} />
        <Breadcrumbs items={data2} />
        <Breadcrumbs items={data3} />
    </>
);
