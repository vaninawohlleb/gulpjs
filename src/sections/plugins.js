import React from 'react';
import styled from 'styled-components';
import PluginsGrid from './plugins-grid';

const PluginContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  align-items: center;

  @media(min-width: 768px) {
    max-width: var(--max-width-mid);
    display: grid;
    grid-template-columns: 42% 58%;
    grid-column-gap: var(--big);
  }
  
  @media(min-width: 1200px) {
    padding: var(--huge) var(--big);
    max-width: var(--max-width-large);
    grid-template-columns: 30% 54%;
    grid-column-gap: var(--max-width-tiny);
  }

  h3 {
    margin-top: 0;
  }
`
const PluginText = styled.div`
  align-self: baseline;
  flex-direction: column;
  align-items: top;

  h3 {
    text-align: center;

    @media(min-width: 768px) {
      text-align: left;
    }
  }

  p {
    margin-bottom: 0;
    display: none;

    @media(min-width: 768px) {
      display: block;
    }
  }
`

const Plugins = ({ props }) => {
  return (
    <PluginContainer>
      <PluginText>
        <h3>Plugins for the most popular tech</h3>
        <p>By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
      </PluginText>
      <PluginsGrid />
    </PluginContainer>
  )
}

export default Plugins;