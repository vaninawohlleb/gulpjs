import React from 'react';
import styled from 'styled-components';

const BenefitContainer = styled.div`
  min-height: 52vh;
  background: var(--light-gray);
  box-shadow: 1px 2px 5px 1px #ddd;
  padding: var(--medium);
`

const Benefit = (props) => {
  return (
    <BenefitContainer>
      <img src={props.icon} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </BenefitContainer>
  )
}

export default Benefit;