import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  height: 522.4px;

  @media (min-width: 550px) {
    height: 767px;
  }

  @media (min-width: 575px) {
    height: 712px;
  }

  @media (min-width: 740px) {
    height: 738px;
  }

  @media (min-width: 740px) {
    height: 710px;
  }

  @media (min-width: 1450px) {
    height: 750.8px;
  }
`;

export const BackgroundImg = styled.img`
  object-fit: cover;
  transform: none;
  border-bottom: 3px solid green;
  min-height: 100%;
`;

export const BackgroundGradient = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
