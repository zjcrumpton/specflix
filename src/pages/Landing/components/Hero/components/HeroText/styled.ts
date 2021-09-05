import styled from 'styled-components';

export const HeroTextContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  font-size: 4rem;
  font-weight: 400;
  margin-top: 30px;

  @media (min-width: 550px) {
    padding: 75px 0;
  }

  @media (min-width: 750px) {
    margin-top: 50px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.75rem;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.1;
  text-align: center;
  font-weight: 400;

  @media (min-width: 550px) {
    max-width: 550px;
    font-size: 3.125rem;
  }

  @media (min-width: 1450px) {
    font-size: 4rem;
    max-width: 800px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.125rem;
  margin: 1rem auto;
  max-width: 800px;
  font-weight: 400;

  @media (min-width: 550px) {
    font-size: 1.625rem;
  }
`;

export const HeroForm = styled.form`
  max-width: 950px;
  padding-top: 0.85rem;
  display: flex;
  flex-direction: column;
  font-size: 1.625rem;
  font-weight: 400;
`;

export const HeroPrompt = styled.h3`
  max-width: 300px;
  padding-bottom: 20px;
  font-size: 18px;
  padding: 0 5%;
  margin: 0 auto;
  font-weight: 400;
  padding-bottom: 20px;

  @media (min-width: 550px) {
    font-size: 23px;
    max-width: 450px;
  }

  @media (min-width: 950px) {
    font-size: 1.2rem;
    max-width: none;
  }
`;
