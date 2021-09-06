import React, { FC } from 'react';

import { Hero, LandingContent } from './components';
import { LandingElem } from '../../HOC';

const Landing: FC = () => {
  return (
    <div>
      <LandingElem Component={Hero} />
      <LandingElem
        Component={() => (
          <LandingContent
            title="Enjoy on your TV."
            body="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Download your shows to watch offline."
            body="Save your favorites easily and always have something to watch."
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Watch everywhere."
            body="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Create profiles for kids."
            body="Send kids on adventures with their favorite characters in a space made just for them- free with your membership."
          />
        )}
      />
    </div>
  );
};

export default Landing;
