import React from 'react';
import styled from 'styled-components';
import PluginsGrid from './plugins-grid';

const PluginContainer = styled.div`
  max-width: var(--max-width-large);
  margin: 0 auto;
  padding: var(--huge) 0;
  display: grid;
  grid-template-columns: 25vw 60vw;
  align-items: center;
  grid-column-gap: var(--max-width-tiny);

  h3 {
    margin-top: 0;
  }
`
const PluginText = styled.div`
  p {
    margin-bottom: 0;
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