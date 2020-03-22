import React from 'react';
import styled from 'styled-components';

import Button from './button';
import GulpGraph from './graph';
import GulpSource from './source';

const AnimationContainer = styled.div``

const ViewSource = styled.div`
  margin-bottom: var(--medium);
  text-align: right;
`

const ButtonFancy = styled.button`
  background: white;
  padding: var(--tiny) var(--big);
  outline: none;
  max-width: 50%;

  color: var(--purple);
  border: 2px solid var(--purple);
  box-shadow: 6px 6px 0 1px var(--purple);

  transition: box-shadow .2s ease-in;

  &:hover {
    box-shadow: 6px 6px 0 -1px var(--purple);
    transition: box-shadow .2s ease-in;
  }

  @media(min-width: 768px) {
    max-width: 100%;
  }
`

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {viewSource: false}
  }

  handleClick = () => {
    this.setState({
      viewSource: !this.state.viewSource
    });
  };
  
  render() {
    return (
      <AnimationContainer>
        <ViewSource>
            <ButtonFancy onClick={this.handleClick}>
              <span className="uppercase">{this.state.viewSource ? "Close Source" : "View Source"}</span>
            </ButtonFancy> 
        </ViewSource>
        {this.state.viewSource ?  <GulpSource />  :  <GulpGraph /> }
      </AnimationContainer>
    )
  } 
}

export default Animation;

