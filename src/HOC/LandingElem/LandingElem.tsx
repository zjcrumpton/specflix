import React, { FC } from 'react';

import * as S from './styled';

interface IProps {
  Component: FC;
}

const LandingElem: FC<IProps> = ({ Component }) => {
  return (
    <S.LandingElemWithBorder>
      <Component />
    </S.LandingElemWithBorder>
  );
};

export default LandingElem;
