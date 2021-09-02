import React, { FC } from 'react';

import * as S from './styled';
import { Logo } from '../../../../components';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.SpecflixHeader>
        <Logo />
        <div>
          <select>English</select>
          <button>Sign In</button>
        </div>
      </S.SpecflixHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
