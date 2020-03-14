import React from 'react';
import styled from 'styled-components';
import Tier from './tier';

import bat from '../assets/bat.svg';
import rocket from '../assets/rocket.svg';
import beer from '../assets/beer.svg';

const BackersGridContainer = styled.div`
  margin-top: var(--big);
  display: grid;
  grid-row-gap: var(--big);
  
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 26%);
    grid-column-gap: var(--huge);
  }

  @media(min-width: 1200px) {
    margin-top: 0;
  }
`

const Backers = (props) => {
  return (
    <BackersGridContainer>
      <Tier title="Donate once" text='Make a custom one time or recurring contribution to support this collective.' buttonTitle='donate' icon={bat} />
      <Tier title="Donate once a month"  text='Support us with a monthly donation and help us continue our activities.' buttonTitle='donate' icon={rocket} />
      <Tier title="Unknown tier 3" text='Become a sponsor and get your logo on our README with a link to your site.' buttonTitle='donate' icon={beer} />
    </BackersGridContainer>
  )
}

export default Backers;