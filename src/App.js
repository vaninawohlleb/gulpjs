import React from 'react';
import Logo from 'components/logo';
import Nav from 'components/nav';
import Socials from 'components/socials';
import Slider from 'components/slider';
import FooterNav from 'components/footer-nav';
import Hero from 'sections/hero';
import Benefits from 'sections/benefits';
import Plugins from 'sections/plugins';
import Backers from 'sections/backers';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --tiny: .5rem;
    --small: 1rem;
    --medium: 1.5rem;
    --big: 2rem;
    --large: 2.5rem;
    --huge: 4.5rem;
    --xxl: 5rem;
    --hugest: 8rem;
    --max: 10rem;

    --max-width-large: 73rem;
    --max-width-big: 61.50rem;
    --max-width-mid: 50rem;
    --max-width-small: 15rem;
    --max-width-tiny: 12rem;

    --red: #CF4647;
    --light-gray: #F6F8FA;
    --purple: #393E64;
    --black: #0A0908;

    --heading-text: 'Work Sans', sans-serif;
    --body-text: 'Poppins', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    line-height: calc(1.1rem + .5vw);
    font-weight: 400;
    scroll-behavior: smooth;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: var(--body-text);
    color: var(--black);
    margin: 0;
    padding: 0;
    background: #fff;
    overflow-x: hidden;
  }

  ul, ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    all: initial;
  }

  h1, h2, h3, h4, .uppercase {
    font-family: var(--heading-text);
    font-weight: 900;
  }

  h1 {
    font-size: calc(2.53rem + .1vw);
    line-height: calc(3rem + .2vw);
  }

  h2, h4, .uppercase {
    text-transform: uppercase;
  }

  h3 {
    font-size: calc(1.4rem + .1vw);
    line-height: calc(1.5rem + .2vw);
    color: var(--purple);
    margin-top: 0;
  }

  h4, .uppercase {
    font-size: calc(.9rem + .1vw);
  }
`;

const Header = styled.header`
  background: var(--red);
  position: relative;
  padding: var(--tiny) var(--big);
  display: grid;
  grid-template-columns: 10% 80% 10%;
`


const Main = styled.main`
 
`

const Footer = styled.footer`
  background: var(--purple);
  color: white;
  position: relative;
  padding: var(--big);
  display: grid;
  grid-template-columns: 40vw 30vw 10vw;
  grid-template-areas: ". first last";
  grid-column-gap: var(--hugest);

  > ul {
    grid-area: first;
  }

  > a {
    grid-area: last;
  }
`

const GreyContainer = styled.div`
  display: block;
  background: var(--light-gray);
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Logo />
        <Nav />
        <Socials />
      </Header>
      <Main>
        <Hero />
        <Slider />
        <Benefits />
        <GreyContainer>
          <Plugins />
        </GreyContainer>
        <Backers />
        <Slider themed/>      
      </Main>
      <Footer>
        <FooterNav />
        <Logo />
      </Footer>
    </div>
  );
}

export default App;
