import React, { FC } from 'react';

import { Hero } from './components';
import { LandingElem } from '../../HOC';

const Landing: FC = () => {
  return (
    <div>
      <LandingElem Component={Hero} />
    </div>
  );
};

export default Landing;
