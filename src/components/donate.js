import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const DonateContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  grid-column-gap: var(--big);
  align-items: center;
  grid-area: footer;

  a {
    background: var(--red);
    padding: var(--tiny) 0;
    text-align: center;
    color: white;
  }

  p {
    color: var(--black);
  }

  @media(min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 37% 37%;
    background: var(--red);
    min-height: 18vh;
    padding: 0 var(--medium);
    align-content: center;

    h2 {
      margin: 0;
      align-self: center;
    }

    p {
      color: white;
      margin: 0;
      align-self: flex-start;
    }
  }
`

const Donate = (props) => {
  if(isMobile) {
    return (
      <DonateContainer>
        <a href="/"><h2>Donate</h2></a>
        <p>For companies wanting to support open source</p>
      </DonateContainer>
    )
    } return (
      <DonateContainer>
        <h2>Donate</h2>
        <p>For companies wanting to support open source</p>
      </DonateContainer>
    )
}

export default Donate;