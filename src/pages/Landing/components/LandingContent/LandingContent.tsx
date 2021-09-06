import React, { FC } from 'react';

import * as S from './styled';

interface IProps {
  title: string;
  body: string;
  imgSrc: string;
  vidSrc?: string;
}

const LandingContent: FC<IProps> = ({ title, body, imgSrc, vidSrc }) => {
  return (
    <S.LandingSection>
      <S.SectionContent>
        <S.SectionText>
          <S.SectionTitle>{title}</S.SectionTitle>
          <S.SectionBody>{body}</S.SectionBody>
        </S.SectionText>
        <S.SectionImageContainer>
          <S.SectionAnimationContainer>
            <S.SectionImage src={imgSrc} />
            <S.Animation>
              <S.Video autoPlay={true} loop={true}>
                <source src={vidSrc} />
              </S.Video>
            </S.Animation>
          </S.SectionAnimationContainer>
        </S.SectionImageContainer>
      </S.SectionContent>
    </S.LandingSection>
  );
};

export default LandingContent;
