import React from 'react';
import styled from 'styled-components';

import { isMobile } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu';
import burger from '../assets/burger.svg';

const NavigationContainer = styled.ul`
  font-family: var(--heading-text);
  color: white;
  display: grid;
  grid-template-columns: var(--hugest) var(--xxl) var(--large) var(--xxl) var(--hugest);
  grid-column-gap: var(--small);
  align-items: center;

  li {
    text-align: center;

    &.button-like {
      padding: var(--tiny);
      border: 2px solid white;
    }
  }

`
const Nav = (props) => {
  if(isMobile) {
    return (
      <Menu right noOverlay customBurgerIcon={ <img src={burger} alt="burger" /> }>
        <li className="uppercase">get started</li>
        <li className="uppercase">plugins</li>
        <li className="uppercase">api</li>
        <li className="uppercase">donate</li>
        <li className='uppercase button-like'>enterprise</li>
      </Menu>
    )
  } return (
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