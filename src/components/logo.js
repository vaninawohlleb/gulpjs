import React from 'react';
import styled from 'styled-components';
import logo from '../assets/gulp.svg';

const LinkLogo = styled.a`

  img {
    max-width: var(--xxl);
  }

`

const Logo = ({ props }) => {
  return (
    <LinkLogo href="#">
      <img src={logo} alt='gulp' />
    </LinkLogo>
  )
}

export default Logo;