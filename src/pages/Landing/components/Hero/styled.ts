import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
`;

export const BackgroundImg = styled.img`
  object-fit: cover;
  transform: none;
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
