import React from 'react';
import Benefit from './benefit';
import styled from 'styled-components';

import codeBlock from '../assets/code-block.svg';
import timer from '../assets/timer.svg';
import atom from '../assets/atom.svg';

const BenefitsContainer = styled.div`
  max-width: var(--max-width-large);
  margin: 0 auto;
  padding: var(--huge) 0;
  display: grid;
  grid-template-columns: repeat(3, 28%);
  align-items: start;
  grid-column-gap: calc(var(--xxl) + 1vw);
`

const Benefits = (props) => {
  return (
    <BenefitsContainer>
      <Benefit icon={codeBlock} title="Simple Usage" text="By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before."/>
      <Benefit icon={timer} title="Efficient Builds" text="Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk. Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk."/>
      <Benefit icon={atom} title="Quality Ecosystem" text="By enforcing strict guidelines, we ensure our plugins stay simple and work as expected. By enforcing strict guidelines, we ensure our plugins stay simple and work as expected."/>
    </BenefitsContainer>
  )
}

export default Benefits;