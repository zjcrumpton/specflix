import React, { FC } from 'react';

import * as S from './styled';

export const LanguageSelect: FC = () => {
  return (
    <S.Select name="language-select">
      <option value="/" lang="en">
        English
      </option>
      <option value="/us-es/" lang="es">
        Español
      </option>
    </S.Select>
  );
};

export default LanguageSelect;
