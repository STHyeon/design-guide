import React from 'react';
import { Meta } from '@storybook/react';
import { Color } from './Color';
import * as S from './StyledColor';

export default {
    title: 'Docs/Color',
    component: Color
} as Meta;

export const All = () => (
    <S.ColorWrapper>
        <Color appearance="primary">Primary</Color>
        <Color appearance="secondary">Secondary</Color>
        <Color appearance="success">Success</Color>
        <Color appearance="danger">Danger</Color>
        <Color appearance="warning">Warning</Color>
        <Color appearance="info">Info</Color>
        <Color appearance="light">Light</Color>
        <Color appearance="bright">Bright</Color>
        <Color appearance="dark">Dark</Color>
    </S.ColorWrapper>
);
