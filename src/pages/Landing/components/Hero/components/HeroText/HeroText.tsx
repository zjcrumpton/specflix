import React, { FC } from 'react';

import * as S from './styled';
import EmailField from '../../../EmailField';

const HeroText: FC = () => {
  return (
    <S.HeroTextContainer>
      <S.HeroTitle>Unlimited movies, TV shows, and more.</S.HeroTitle>
      <S.HeroSubtitle>Watch anywhere. Cancel anytime.</S.HeroSubtitle>
      <S.HeroForm>
        <S.HeroPrompt>
          Ready to watch? Enter your email to create or restart your membership.
        </S.HeroPrompt>
        <EmailField />
      </S.HeroForm>
    </S.HeroTextContainer>
  );
};

export default HeroText;
