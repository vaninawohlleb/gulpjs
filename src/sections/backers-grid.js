import React from 'react';
import styled from 'styled-components';
import Tier from './tier';

const BackersGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-column-gap: var(--big);
`

const Backers = (props) => {
  return (
    <BackersGridContainer>
      <Tier title="Donate once" text='Make a custom one time or recurring contribution to support this collective.' buttonTitle='donate' />
      <Tier title="Donate once a month"  text='Support us with a monthly donation and help us continue our activities.' buttonTitle='donate' />
      <Tier title="Unknown tier 3" text='Become a sponsor and get your logo on our README with a link to your site.' buttonTitle='donate' />
    </BackersGridContainer>
  )
}

export default Backers;