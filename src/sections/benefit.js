import React from 'react';
import styled from 'styled-components';

const BenefitContainer = styled.div`
  background: var(--light-gray);
  box-shadow: 1px 2px 5px 1px #ddd;
  padding: var(--medium);

  @media(min-width: 768px) {
    min-height: 52vh;
  }
`

const Heading = styled.div`
  display: flex;

  img {
    margin-right: var(--tiny);
  }
`
const Benefit = (props) => {
  return (
    <BenefitContainer>
      <Heading>
        <img src={props.icon} alt={props.title} />
        <h3>{props.title}</h3>
      </Heading>
      <p>{props.text}</p>
    </BenefitContainer>
  )
}

export default Benefit;