import React, { FC } from 'react';

import * as S from './styled';

export interface ButtonProps {
  label: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({ label, color }) => {
  return (
    <S.SpecflixButton type="button" color={color}>
      {label}
    </S.SpecflixButton>
  );
};

export default Button;
