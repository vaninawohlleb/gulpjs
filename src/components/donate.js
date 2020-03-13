import React from 'react';
import styled from 'styled-components';

const DonateContainer = styled.div`
  background: var(--red);
  min-height: 18vh;
  padding: 0 var(--medium);
  
  // h2 {
  //   margin: 0;
  // }
`

const Donate = (props) => {
  return (
    <DonateContainer>
      <h2>Donate</h2>
      <p>For companies wanting to support open source </p>
    </DonateContainer>
  )
}

export default Donate;