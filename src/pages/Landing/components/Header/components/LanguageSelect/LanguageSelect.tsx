import React, { FC } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { AiOutlineCaretDown as Arrow } from 'react-icons/ai';

import * as S from './styled';

export const LanguageSelect: FC = () => {
  return (
    <S.LanguageSelectWrapper>
      <FaGlobe size="11" />
      <S.Select name="language-select">
        <option value="/" lang="en">
          English
        </option>
        <option value="/us-es/" lang="es">
          Español
        </option>
      </S.Select>
      <Arrow size="15" />
    </S.LanguageSelectWrapper>
  );
};

export default LanguageSelect;
