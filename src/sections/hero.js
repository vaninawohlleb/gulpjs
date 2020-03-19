import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Button from '../components/button';
import GulpGraph from '../components/graph';
import GulpSource from '../components/source';
import cupLogo from '../assets/gulp-2x.png';

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  align-items: center;

  img {
    max-width: 100%;
  }

  @media(min-width: 768px) {
    min-height: 90vh;
    max-width: var(--max-width-mid);
  }

  @media(min-width: 1200px) {
    max-width: var(--max-width-large);
    display: grid;
    grid-template-columns: 44% 49%;
    grid-column-gap: var(--xxl);
  }
`
const HeroText = styled.div`
  p {
    font-size: calc(1.35rem + .1vw);
    line-height: calc(1.8rem + .2vw);
  }

  > div {
    display: grid;
    grid-template-columns: 20% 75%;
    grid-column-gap: var(--big);
  }
`
const HeroAnimation = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`

const ViewSource = styled.div`
  margin-bottom: var(--medium);
  text-align: right;
`

const Hero = (props) => {
  return (
    <HeroContainer>
      <HeroText>
        {isMobile &&
          <div>
            <img src={cupLogo} alt="logo cup" />
            <h1>Automate and enhance your workflow</h1>
          </div>
        } {!isMobile &&
          <h1>Automate and enhance your workflow</h1>
        }
        <p>Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.</p>
      </HeroText>
      {!isMobile &&
        <HeroAnimation>
          <ViewSource>
            <Button title='View Source'/>
          </ViewSource>
          <GulpGraph />
          {/* <GulpSource /> */}
        </HeroAnimation>
      }
    </HeroContainer>
  )
}

export default Hero;