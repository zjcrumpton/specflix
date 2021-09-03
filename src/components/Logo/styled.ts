import styled from 'styled-components';

import * as STYLES from '../../styles/styles';

export const SpecflixLogo = styled.h1`
  color: ${STYLES.PRIMARY};
  font-family: 'Kanit', sans-serif;
  font-size: 1.6rem;

  @media (min-width: 550px) {
    font-size: 1.8rem;
  }

  @media (min-width: 950px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1450px) {
    font-size: 2.5rem;
  }
`;
