import React, { FC } from 'react';
import * as S from './StyledText';
import { typography } from 'assets/style/common';

interface TextProps {
    size: string;
    weight?: string;
}

export const Text: FC<TextProps> = ({ size, weight }) => (
    <S.TextContent size={size} weight={weight}>
        <S.TextSize>
            {weight ? (
                <>
                    {weight}, {typography.weight[weight]}
                </>
            ) : (
                <>
                    {size}, {typography.size[size]}px
                </>
            )}
        </S.TextSize>
        Was he a beast if music could move him so?
    </S.TextContent>
);
