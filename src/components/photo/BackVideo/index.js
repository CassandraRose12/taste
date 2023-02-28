import React from 'react'
import Video from './videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './Elements.js'

function VideoSection() {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Welcome To A Website Full Of Flavor</HeroH1>
          <HeroP>Keep scrolling for more</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default VideoSection