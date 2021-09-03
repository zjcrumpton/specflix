import React, { FC } from 'react';

import * as S from './styled';
import { Logo, LinkButton } from '../../../../components';
import { PATHS } from '../../../../navigation';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.SpecflixHeader>
        <Logo />
        <div>
          <select name="language-select">
            <option value="/" lang="en">
              English
            </option>
            <option value="/us-es/" lang="es">
              Español
            </option>
          </select>
          <LinkButton to={PATHS.BROWSE} label="Sign In" />
        </div>
      </S.SpecflixHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
