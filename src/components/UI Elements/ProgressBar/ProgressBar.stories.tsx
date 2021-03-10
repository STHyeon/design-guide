import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
    title: 'UI Elements/ProgressBar',
    component: ProgressBar
} as Meta;

export const Basic: FC = () => <ProgressBar width={60} />;

export const All: FC = () => (
    <>
        <ProgressBar width={60} />
        <ProgressBar width={40} textShow />
    </>
);

export const Text: FC = () => <ProgressBar width={60} textShow />;
