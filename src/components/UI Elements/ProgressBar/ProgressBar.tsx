import React, { FC } from 'react';
import * as S from './StyledProgressBar';

interface ProgressBarProps {
    width: number;
    textShow?: boolean;
}

export const ProgressBar: FC<ProgressBarProps> = ({ width, textShow = false, ...props }) => (
    <S.ProgressBarWrapper role="progressbar" {...props}>
        <S.Bar style={{ width: `${width}%` }}>{textShow && <>{width}%</>}</S.Bar>
    </S.ProgressBarWrapper>
);
