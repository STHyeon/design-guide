import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Text } from './Text';
import * as S from './StyledText';

export default {
    title: 'Docs/Text',
    component: Text
} as Meta;

export const Size: FC = () => (
    <S.TextWrapper>
        <Text weight="regular" size="small" />
        <Text weight="regular" size="lightsmall" />
        <Text weight="regular" size="normal" />
        <Text weight="regular" size="lightbig" />
        <Text weight="regular" size="big" />
    </S.TextWrapper>
);

export const Weight: FC = () => (
    <S.TextWrapper>
        <Text size="normal" weight="light" type />
        <Text size="normal" weight="regular" type />
        <Text size="normal" weight="bold" type />
    </S.TextWrapper>
);
