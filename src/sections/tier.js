import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const TierContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.5fr 0.5fr;
`

const Heading = styled.div`
  display: flex;

  img {
    margin-right: var(--tiny);
  }

  h4 {
    color: var(--red);
    align-self: center;
  }
`

const Tier = (props) => {
  return (
    <TierContainer>
      <Heading>
        <img src={props.icon} alt={props.title} />
        <h4>{props.title}</h4>
      </Heading>
      <p>{props.text}</p>
      <Button title={props.buttonTitle} />
    </TierContainer>
  )
}

export default Tier;