import React, { FC } from 'react';

import * as S from './styled';
import { VscChevronRight as RightArrowIcon } from 'react-icons/vsc';

const EmailField: FC = () => {
  return (
    <S.EmailFieldWrapper>
      <S.EmailFieldGrid>
        <S.EmailInputWrapper>
          <S.EmailInputContainer>
            <S.EmailInputPlacement>
              <label placeholder="email">
                <S.EmailFieldInput id="hero_email" />
                <S.EmailInputInnerLabel for="hero_email">
                  Email address
                </S.EmailInputInnerLabel>
              </label>
            </S.EmailInputPlacement>
          </S.EmailInputContainer>
        </S.EmailInputWrapper>

        <S.SubmitWrapper>
          <S.SubmitButton>
            <S.SubmitText>Get Started</S.SubmitText>
            <RightArrowIcon />
          </S.SubmitButton>
        </S.SubmitWrapper>
      </S.EmailFieldGrid>
    </S.EmailFieldWrapper>
  );
};

export default EmailField;
