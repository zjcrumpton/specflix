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
            imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            vidSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Download your shows to watch offline."
            body="Save your favorites easily and always have something to watch."
            imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Watch everywhere."
            body="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
            imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            vidSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          />
        )}
      />

      <LandingElem
        Component={() => (
          <LandingContent
            title="Create profiles for kids."
            body="Send kids on adventures with their favorite characters in a space made just for them- free with your membership."
            imgSrc="https://occ-0-590-586.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
          />
        )}
      />
    </div>
  );
};

export default Landing;
