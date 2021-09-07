import React, { FC } from 'react';

import * as S from './styled';

import { HeroImage } from './components';

const Hero: FC = () => {
  return (
    <S.HeroSection>
      <HeroImage />
    </S.HeroSection>
  );
};

export default Hero;
