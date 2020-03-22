import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as GulpVisual } from '../assets/gulp-visual.svg';

const fill = keyframes`
  0% {
    stroke-dasharray: 100 400;
    stroke-dashoffset: 200;
  }

  50% {
    stroke: var(--red);
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 100 400;
    stroke-dashoffset: -200;
  }
`

const opacity = keyframes`
  0%, 50%, 75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const VisualGulp = styled(GulpVisual)` 
  width: 100%;
  height: 100%;

  .line-up-anim {
    animation: ${fill} infinite 4s linear;
    
    &.second {
      animation: ${opacity} 2s linear forwards, ${fill} infinite 4s linear 1.3s;
    }
  }

  .line-down-anim {
    animation: ${opacity} 5s linear forwards, ${fill} infinite 4s linear 2.5s;

    &.second {
      animation-delay: .4s;
    }
  }
`

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 26%);
  grid-column-gap: var(--big);
`
const Graph = (props) => {
  return (
    <div>
      {/* <TechList>
        <li>
          <p className="uppercase">pug</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
        <li>
          <p className="uppercase">sass</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
        <li>
          <p className="uppercase">js</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
      </TechList> */}
      <VisualGulp />
      {/* <TechList>
        <li>
          <p className="uppercase">html</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
        <li>
          <p className="uppercase">css</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
        <li>
          <p className="uppercase">js</p>
          <p>or any otehr templating language that iutputs HTML</p>
        </li>
      </TechList> */}
    </div>
  )
}

export default Graph;