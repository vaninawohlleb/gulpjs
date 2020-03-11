import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Donate from './donate';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import stickerMule from '../assets/st-mule.png';
import blaine from '../assets/blaine.png';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

// theme it - light and dark
const SliderContainer = styled.div`
  position: relative;
  width: 44vw;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};

  .react-multi-carousel-list {
    height: 18vh;
    margin-left: var(--hugest);

    img {
      width: var(--huge);
      max-width: 100%;
      border-radius: ${props => props.theme.borderRadius};
    }
  }

  button {
    :first-child {
      border-right: 1px solid ${props => props.theme.color};
      // background: url('${props => props.theme.buttonLeft}') no-repeat;
    }

    :last-child {
      // background: url('${props => props.theme.buttonRight}') no-repeat;
    }
  }
`
const Buttons = styled.div`
  position: absolute;
  top: 4.5vh;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: var(--small);
  }
`

SliderContainer.defaultProps = {
  theme: {
    background: 'var(--black)',
    color: 'var(--light-gray)',
    borderRadius: '0',
    buttonLeft: arrowLeft,
    buttonRight: arrowRight
  }
}

const theme = {
  background: 'var(--light-gray)',
  color: 'var(--black)',
  borderRadius: '100%'
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
    <Buttons>
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
        <img src={arrowLeft} />
      </button>
      <button onClick={() => next()}>
        <img src={arrowRight} />
      </button>
    </Buttons>
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
        {/* <Donate /> */}
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