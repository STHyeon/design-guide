import React, { FC } from 'react';
import * as S from './StyledSpinner';

export const Spinner: FC = ({ ...props }) => <S.SpinnerWrapper aria-label="Content is loading..." {...props} />;
