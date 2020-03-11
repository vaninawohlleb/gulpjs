import React from 'react';
import styled from 'styled-components';

import graph from '../assets/gulp-graph.svg';

const GraphContainer = styled.div`
  font-size: 12px;
  line-height: 1;
`

const Graph = (props) => {
  return (
    <img src={graph} alt="gulp graph" />
  )
}

export default Graph;