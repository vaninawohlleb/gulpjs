import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.ul`
  font-family: var(--heading-text);
  color: white;
  display: grid;
  grid-template-columns: var(--hugest) var(--xxl) var(--large) var(--xxl) var(--hugest);
  grid-column-gap: var(--small);
  align-items: center;
`
const Nav = ({ props }) => {
  return (
    <NavigationContainer>
      <li className="uppercase">get started</li>
      <li className="uppercase">plugins</li>
      <li className="uppercase">api</li>
      <li className="uppercase">donate</li>
      <li className='uppercase button-like'>enterprise</li>
    </NavigationContainer>
  )
}

export default Nav;