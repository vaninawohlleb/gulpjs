import React from 'react';
import styled from 'styled-components';

const FooterNavContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-column-gap: var(--xxl);
`
const FooterNav = ({ props }) => {
  return (
    <FooterNavContainer>
      <ul>
        <li>Github issues</li>
        <li>Roadmap</li>
        <li>Stack Overflow</li>
      </ul>
      <ul>
        <li>twitter</li>
        <li>blog</li>
        <li>hello@gulpjs.com</li>
      </ul>
    </FooterNavContainer>
  )
}

export default FooterNav;