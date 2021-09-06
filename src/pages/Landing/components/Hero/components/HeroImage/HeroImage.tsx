import React, { FC } from 'react';

import * as S from './styled';
import Header from '../../../Header';
import { HeroText } from '../';

const HeroImage: FC = () => {
  const heroImg = {
    src: 'https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/4d2d33bb-c8d0-4c01-abaa-6aaa031a943e/US-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg',
    srcSet:
      'https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/4d2d33bb-c8d0-4c01-abaa-6aaa031a943e/US-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/4d2d33bb-c8d0-4c01-abaa-6aaa031a943e/US-en-20210823-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/4d2d33bb-c8d0-4c01-abaa-6aaa031a943e/US-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w',
  };

  return (
    <>
      <Header />
      <S.BackgroundWrapper>
        <S.BackgroundGradient />
        <S.BackgroundImg src={heroImg.src} srcSet={heroImg.srcSet} />
      </S.BackgroundWrapper>
      <HeroText />
    </>
  );
};

export default HeroImage;
