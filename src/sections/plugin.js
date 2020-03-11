import React from 'react';
import styled from 'styled-components';

const PluginContainer = styled.div`
  box-shadow: 1px 2px 5px 1px #ddd;
  background: white;
  padding: var(--small);
  display: flex;
  height: 24.5vh;
  flex-direction: column;
  justify-items: center;

  img {
    max-height: 100px;
    display: block;
    margin: var(--tiny) auto;
  }

  span {
    font-size: 14px;
    text-align: center;
    display: block;
  }
`

const Plugin = (props) => {
  return (
    <PluginContainer>
      <img src={props.imgSrc} alt={props.title} />
      <span>{props.title}</span>
    </PluginContainer>
  )
}

export default Plugin;