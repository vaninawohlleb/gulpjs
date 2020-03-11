import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const TierContainer = styled.div`
`

const Tier = (props) => {
  return (
    <TierContainer>
     <p>{props.text}</p>
     <Button title={props.buttonTitle} themed />
    </TierContainer>
  )
}

export default Tier;