import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import GulpGraph from '../components/graph';
import GulpSource from '../components/source';

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  align-items: center;

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
`
const HeroAnimation = styled.div`
  display: none;

  img {
    max-width: 100%;
  }
  @media(min-width: 768px) {
    display: block;
  }
`

const ViewSource = styled.div`
  margin-bottom: var(--medium);
  text-align: right;
`

const Hero = ({ props }) => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Automate and enhance your workflow</h1>
        <p>Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.</p>
      </HeroText>
      <HeroAnimation>
        <ViewSource>
          <Button title='View Source'/>
        </ViewSource>
        <GulpGraph />
        {/* <GulpSource /> */}
      </HeroAnimation>
    </HeroContainer>
  )
}

export default Hero;