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

const StyledGulp = styled(GulpVisual)` 
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
const Graph = (props) => {
  return (
    <StyledGulp />
  )
}

export default Graph;