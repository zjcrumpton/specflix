import styled from 'styled-components';

import * as STYLES from '../../../../styles/styles';

export const EmailFieldWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  font-size: 1.625rem;
  font-weight: 400;
`;

export const EmailFieldGrid = styled.ul`
  display: flex;
  flex: 1 0 auto;
  text-align: right;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const EmailInputWrapper = styled.li`
  list-style: none;
  margin-left: 0;
  margin-bottom: 10px;
  text-align: right;
`;

export const EmailInputContainer = styled.div`
  margin: 0;
  display: inline-block;
  max-width: 500px;
  position: relative;
`;

export const EmailInputPlacement = styled.div`
  position: relative;
`;

export const EmailFieldInput = styled.input`
  height: 48px;
  min-width: 90vw;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding: 10px 10px 0;
  width: 100% !important;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  border: solid 1px #8c8c8c;
  border-radius: 2px;
  display: block;
  appearance: none;
  color: #000;
  line-height: 40px;
  margin: 0;

  @media (min-width: 550px) {
    min-width: 450px;
  }

  @media (min-width: 750px) {
    height: 60px;
  }

  @media (min-width: 1450px) {
    min-width: 500px;
    height: 70px !important;
  }
`;

interface LabelProps {
  for: string;
  focused: boolean;
}

export const EmailInputInnerLabel = styled.label<LabelProps>`
  font-size: ${({ focused }) => (focused ? '12px' : '14px')};

  position: absolute;
  top: ${({ focused }) => (focused ? '10%' : '40%')};
  left: 10px;
  color: #8c8c8c;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
    -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
    -o-transform 0.1s ease;

  @media (min-width: 750px) {
    font-size: ${({ focused }) => (focused ? '14px' : '16px')};
  }
`;

export const SubmitWrapper = styled.div`
  float: none;
  display: inline-block;
  text-align: left;
  flex: 1 0 auto;
  font-size: 1.625rem;
  font-weight: 400;
  color: #fff;
`;

export const SubmitButton = styled.button`
  margin: 0 !important;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 1px solid #333;
  font-size: 1.875rem;
  min-height: 40px;
  padding: 0 1em;
  display: inline-flex;
  align-items: center;
  line-height: initial;
  width: auto;
  position: relative;
  min-width: 74px;
  color: #fff;
  background-color: ${STYLES.PRIMARY};
  background-image: linear-gradient(
    to bottom,
    ${STYLES.PRIMARY},
    ${STYLES.PRIMARY}
  );
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.1px;
  border-radius: 2px;
  user-select: none;
  text-align: center;
  box-sizing: border-box;
  border: 0;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;

  @media (min-width: 950px) {
    min-height: 60px;
  }

  @media (min-width: 1450px) {
    min-height: 70px;
  }
`;

export const SubmitText = styled.span`
  padding: 0.5rem;
  -moz-box-flex: 1;
  flex: 1 1 auto;
  text-align: center;
  font-size: 1rem;
  line-height: initial;
  color: #fff;

  @media (min-width: 950px) {
    font-size: 1.625rem;
  }

  @media (min-width: 1450px) {
    font-size: 1.875rem;
  }
`;
