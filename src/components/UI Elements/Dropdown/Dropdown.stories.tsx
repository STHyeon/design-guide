import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
    title: 'UI Elements/Dropdown',
    component: Dropdown
} as Meta;

const data1 = [
    {
        title: 'a',
        link: '/',
        disabled: false
    },
    {
        title: 'a1',
        link: '/',
        disabled: false
    }
];

const data2 = [
    {
        title: 'a2',
        link: '/',
        disabled: true
    },
    {
        title: 'a3',
        link: '/',
        disabled: true
    }
];

export const Basic: FC = () => <Dropdown items={data1} />;

export const Header: FC = () => <Dropdown items={data1} headers="제목" />;

export const Disabled: FC = () => <Dropdown items={data2} />;
