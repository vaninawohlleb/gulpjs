import React from 'react';
import styled from 'styled-components';
import BackersGrid from './backers-grid';

const BackersContainer = styled.div`
  max-width: var(--max-width-large);
  margin: 0 auto;
  padding: var(--huge) 0;
  display: grid;
  grid-template-columns: 25vw 51vw;
  align-items: center;
  grid-column-gap: var(--huge);

  h3 {
    margin-top: 0;
  }
`

const BackersText = styled.div`
  p {
    margin-bottom: 0;
  }
`

const Backers = ({ props }) => {
  return (
    <BackersContainer>
      <BackersText>
      <h3>Individual backers</h3>
      <p>Our mission statement. node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
      </BackersText>
      <BackersGrid />
    </BackersContainer>
  )
}

export default Backers;