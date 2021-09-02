import React, { FC } from 'react';

import * as S from './styled';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.SpecflixHeader>
        <h1>SPECFLIX</h1>
        <div>
          <select>English</select>
          <button>Sign In</button>
        </div>
      </S.SpecflixHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
