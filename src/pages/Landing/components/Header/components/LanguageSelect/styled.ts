import styled from 'styled-components';

export const Select = styled.select`
  margin: 0 0.75rem;
  margin-right: 2rem;
  font-size: 0.9rem;
  color: #e7e7e7;
  background: transparent;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  height: 100%;

  @media (min-width: 550px) {
    font-size: 1rem;
  }

  option {
    background-color: #131014;
  }
`;
