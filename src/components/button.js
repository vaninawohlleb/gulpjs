import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonContainer = styled.button`
  background: white;
  padding: var(--tiny) var(--big);
  outline: none;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  box-shadow: 6px 6px 0 1px ${props => props.theme.main};

  transition: box-shadow .2s ease-in;

  &:hover {
    box-shadow: 6px 6px 0 -1px ${props => props.theme.main};
    transition: box-shadow .2s ease-in;
  }
`

ButtonContainer.defaultProps = {
  theme: {
    main: 'var(--purple)'
  }
}

const theme = {
  main: 'var(--red)'
}

const Button = (props) => {
  if(!props.themed) {
    return (
      <ButtonContainer>
        <span className="uppercase">{props.title}</span>
      </ButtonContainer>
    )
  } return (
    <ThemeProvider theme={theme}>
      <ButtonContainer>
        <span className="uppercase">{props.title}</span>
      </ButtonContainer>
    </ThemeProvider>
  )
}

export default Button;