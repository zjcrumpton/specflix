import styled from 'styled-components';

export const LanguageSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #aaaaaa;
  margin: 0 0.75rem;
  margin-right: 2rem;
  height: 100%;
  padding: 0 10px;
`;

export const Select = styled.select`
  color: #e7e7e7;
  background: transparent;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';

  ::-ms-expand {
    display: none;
  }

  option {
    background-color: #131014;
    font-size: 0.9rem;

    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }
`;
