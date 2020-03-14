import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Donate from './donate.js';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import stickerMule from '../assets/st-mule.png';
import blaine from '../assets/blaine.png';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeftDark from '../assets/arrow-left-dark.svg';
import arrowRightDark from '../assets/arrow-right-dark.svg';

const SliderContainer = styled.div`
  position: relative;
  color: ${props => props.theme.color};
  display: grid;
  grid-template-columns: 1vw 38vw 63vw;
  grid-template-areas: ". content footer";
  align-items: center;

  @media(min-width: 768px) {
    grid-template-columns: 9vw 36vw 19vw;
    grid-template-areas: "nav content footer";
  }

  @media(min-width: 1200px) {
    grid-template-columns: 9vw 36vw 19vw;
    grid-template-areas: "nav content footer";
  }

  .react-multi-carousel-list {
    background: ${props => props.theme.background};
    grid-area: content;
    min-height: 18vh;
    padding: 0 var(--tiny);

    img {
      width: ${props => props.theme.imageWidth};
      max-width: 100%;
      border-radius: ${props => props.theme.borderRadius};
    }
  }

  .buttons {
    grid-area: nav;
    background: ${props => props.theme.background};
    min-height: 18vh;
    padding: 0 var(--tiny);
    display: flex;
    align-items: inherit;

     button {
      background-color: transparent;
      border: none;
      outline: none;
      width: 48px;
      height: 48px;

      :first-child {
        border-right: 1px solid ${props => props.theme.color};
        background: url('${props => props.theme.buttonLeft}') no-repeat;
        background-position: 0% 40%;
      }

      :last-child {
        background: url('${props => props.theme.buttonRight}') no-repeat;
        background-position: 100% 40%;
      }
    }
  }
`

SliderContainer.defaultProps = {
  theme: {
    background: 'var(--black)',
    color: 'var(--light-gray)',
    borderRadius: '0',
    buttonLeft: arrowLeft,
    buttonRight: arrowRight,
    imageWidth: 'var(--huge)'
  }
}

const theme = {
  background: 'var(--light-gray)',
  color: 'var(--black)',
  borderRadius: '100%',
  buttonLeft: arrowLeftDark,
  buttonRight: arrowRightDark,
  imageWidth: '3.5rem'
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  }
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="buttons">
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <button onClick={() => next()} />
    </div>
  );
};

const Slider = (props) => {
  if(!props.themed) {
    return (
      <SliderContainer>
        <Carousel 
          responsive={responsive}
          arrows={false}
          infinite={true}
          renderButtonGroupOutside={true} 
          customButtonGroup={<ButtonGroup />}>
          <div><img src={stickerMule} alt="sticker-mule" /></div>
          <div><img src={stickerMule} alt="sticker-mule" /></div>
          <div><img src={stickerMule} alt="sticker-mule" /></div>
          <div><img src={stickerMule} alt="sticker-mule" /></div>
          <div><img src={stickerMule} alt="sticker-mule" /></div>
        </Carousel>
        <Donate />
      </SliderContainer>
    )
  } return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <Carousel 
          responsive={responsive}
          arrows={false}
          infinite={true}
          renderButtonGroupOutside={true} 
          customButtonGroup={<ButtonGroup />}>
          <div><img src={blaine} alt="blaine" /></div>
          <div><img src={blaine} alt="blaine" /></div>
          <div><img src={blaine} alt="blaine" /></div>
          <div><img src={blaine} alt="blaine" /></div>
          <div><img src={blaine} alt="blaine" /></div>
        </Carousel>
      </SliderContainer>
    </ThemeProvider>
  )
}

export default Slider;