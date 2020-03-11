import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import GulpGraph from '../components/graph';
import GulpSource from '../components/source';

const HeroContainer = styled.div`
  max-width: var(--max-width-large);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35vw 40vw;
  grid-column-gap: var(--xxl);
  min-height: 90vh;
  align-items: center;
`
const HeroText = styled.div`

p {
  font-size: calc(1.35rem + .1vw);
  line-height: calc(1.8rem + .2vw);
}
`
const HeroAnimation = styled.div`

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
        {/* <GulpGraph /> */}
        <GulpSource />
      </HeroAnimation>
    </HeroContainer>
  )
}

export default Hero;