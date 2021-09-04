import styled from 'styled-components';

export const HeroTextContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  font-size: 1.625rem;
  font-weight: 400;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.1;
  text-align: center;
  font-weight: 400;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.625rem;
  margin: 1rem auto;
  max-width: 800px;
  font-weight: 400;
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
  max-width: none;
  padding-bottom: 20px;
  font-size: 1.2rem;
  padding: 0 5%;
  margin: 0 auto;
  font-weight: 400;
  padding-bottom: 20px;
`;
