import React, { FC } from 'react';

import * as S from './styled';

interface IProps {
  title: string;
  body: string;
}

const LandingContent: FC<IProps> = ({ title, body }) => {
  return (
    <S.LandingSection>
      <S.SectionContent>
        <S.SectionText>
          <S.SectionTitle>{title}</S.SectionTitle>
          <S.SectionBody>{body}</S.SectionBody>
        </S.SectionText>
      </S.SectionContent>
    </S.LandingSection>
  );
};

export default LandingContent;
