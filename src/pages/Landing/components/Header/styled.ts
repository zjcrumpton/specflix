import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding-top: 20px;
  margin: 0 auto;
  max-width: 1920px;
  height: 5rem;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SpecflixHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  margin: 0 5%;

  @media (min-width: 550px) {
    margin: 0 56px;
  }
`;
