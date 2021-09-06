import React, { FC, useState, ChangeEvent } from 'react';

import * as S from './styled';
import { VscChevronRight as RightArrowIcon } from 'react-icons/vsc';

interface ErrorMsg {
  visible: boolean;
  msg: string;
}

const errors = {
  invalid: 'Please enter a valid email address',
  required: 'Email is required!',
};

const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailField: FC = () => {
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState<ErrorMsg>({
    visible: false,
    msg: errors.required,
  });

  const focus = () => setFocused(true);
  const unfocus = () => {
    if (email.length === 0) setFocused(false);
  };

  const validateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const valid = emailValidationRegex.test(newEmail);

    if (valid) {
      setErrMsg({
        ...errMsg,
        visible: false,
      });
    } else {
      const newErr: ErrorMsg = {
        visible: true,
        msg: '',
      };
      newErr.msg = newEmail.length < 5 ? errors.required : errors.invalid;

      setErrMsg(newErr);
    }
  };

  return (
    <S.EmailFieldWrapper>
      <S.EmailFieldGrid>
        <S.EmailInputWrapper>
          <S.EmailInputContainer>
            <S.EmailInputPlacement>
              <label placeholder="email">
                <S.EmailFieldInput
                  id="hero_email"
                  onFocus={focus}
                  onBlur={unfocus}
                  onChange={validateEmail}
                  value={email}
                />
                <S.EmailInputInnerLabel for="hero_email" focused={focused}>
                  Email address
                </S.EmailInputInnerLabel>
              </label>
            </S.EmailInputPlacement>

            <S.ValidationMessage visible={errMsg.visible}>
              {errMsg.msg}
            </S.ValidationMessage>
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

// default state is that its hidden
