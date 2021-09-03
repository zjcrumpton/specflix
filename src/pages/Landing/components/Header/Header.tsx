import React, { FC } from 'react';

import * as S from './styled';
import { Logo, LinkButton } from '../../../../components';
import { LanguageSelect } from './components';
import { PATHS } from '../../../../navigation';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.SpecflixHeader>
        <Logo />
        <S.HeaderButtonWrapper>
          <LanguageSelect />
          <LinkButton to={PATHS.BROWSE} label="Sign In" />
        </S.HeaderButtonWrapper>
      </S.SpecflixHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
