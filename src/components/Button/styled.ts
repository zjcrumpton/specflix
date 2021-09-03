import styled from 'styled-components';

export const SpecflixButton = styled.button`
  background-color: #0099d8;
  background-color: ${(props) => (props.color ? props.color : '#0099d8')};
  font-weight: 400;
  color: white;
  border-radius: 3px;
  text-decoration: none;
  border: none;
  font-family: 'Kanit', sans-serif;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  @media (min-width: 550px) {
    font-size: 1rem;
    padding: 7px 17px;
  }
`;
