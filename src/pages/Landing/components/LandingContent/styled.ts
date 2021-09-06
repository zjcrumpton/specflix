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

export const SectionImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 0 1 auto;

  @media (max-width: 950px) {
    max-width: 600px;
    margin-top: 1em;
  }

  @media (min-width: 950px) {
    width: 48%;
  }
`;

export const SectionAnimationContainer = styled.div`
  margin: -10% 0 0 0;
  position: relative;
  overflow: hidden;

  @media (min-width: 950px) {
    margin: -10% -5% -5% 0;
  }
`;

export const SectionImage = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

export const Animation = styled.div`
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: baseline;
`;
