import React from 'react';
import { Meta } from '@storybook/react';
import { Text } from './Text';
import * as S from './StyledText';

export default {
    title: 'Docs/Text',
    component: Text
} as Meta;

export const Size = () => (
    <S.TextWrapper>
        <Text size="small" />
        <Text size="lightsmall" />
        <Text size="normal" />
        <Text size="lightbig" />
        <Text size="big" />
    </S.TextWrapper>
);

export const Weight = () => (
    <S.TextWrapper>
        <Text size="normal" weight="light" />
        <Text size="normal" weight="regular" />
        <Text size="normal" weight="bold" />
    </S.TextWrapper>
);
