import styled from 'styled-components';

export const LandingSection = styled.section`
  position: relative;
  padding: 50px 5%;

  @media (min-width: 550px) {
    padding: 70px 45px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  max-width: 1100px;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const SectionText = styled.div`
  margin: 0;
  width: 100%;
  padding: 0;
  z-index: 3;
  height: 100%;
  flex: 0 1 auto;
  font-size: 1.125rem;
  font-weight: 400;

  @media (min-width: 550px) {
    font-size: 1.25rem;
  }

  @media (min-width: 950px) {
    margin: -5% 0;
    width: 52%;
    padding: 0 3rem 0 0;
    font-size: 1.625rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 1.625rem;
  line-height: 1.1;
  margin: 0 0 0.4em;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }

  @media (min-width: 950px) {
    font-size: 3.125rem;
    text-align: left;
  }
`;

export const SectionBody = styled.h2`
  font-size: 1.125rem;
  margin: 0.75em 0 0.25em;

  @media (min-width: 550px) {
    font-size: 1.25rem;
  }

  @media (min-width: 950px) {
    font-size: 1.625rem;
    text-align: left;
  }
`;
