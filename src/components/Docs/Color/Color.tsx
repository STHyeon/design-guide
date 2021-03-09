import React, { FC } from 'react';
import * as S from './StyledColor';

interface ColorProps {
    /** 색상값 받는 변수 */
    appearance?: string;
}

/**
 * 색상만 참고해주세요(컴포넌트는 임시입니다.)
 */

export const Color: FC<ColorProps> = ({ appearance, children }) => <S.ColorBox appearance={appearance}>{children}</S.ColorBox>;
