import React from 'react';
import styled from 'styled-components';

import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';

const SocialsContainer = styled.ul`
  display: none;

  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    > li {
      position: relative;
      margin: var(--tiny);
    }
  }
`
const Socials = ({ props }) => {
  return (
    <SocialsContainer>
      <li><a href="/"><img src={twitter} alt="twitter" /></a></li>
      <li><a href="/"><img src={medium} alt="medium" /></a></li>
    </SocialsContainer>
  )
}

export default Socials;