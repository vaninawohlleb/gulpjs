import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const TierContainer = styled.div`
  h4 {
    color: var(--red);
    margin-bottom: 0;
  }
`

const Tier = (props) => {
  return (
    <TierContainer>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <Button title={props.buttonTitle} />
    </TierContainer>
  )
}

export default Tier;