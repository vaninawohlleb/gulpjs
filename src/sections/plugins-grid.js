import React from 'react';
import styled from 'styled-components';
import Plugin from './plugin';

import angularImg from '../assets/angular.svg';
import babelImg from '../assets/babel.svg';
import bowerImg from '../assets/bower.svg';
import buddyImg from '../assets/buddy.svg';
import coffeescriptImg from '../assets/coffeescript.svg';
import pugImg from '../assets/pug.svg';

// separate into data file and import
const plugins = [
  {
    title: 'angular',
    img: angularImg
  },
  {
    title: 'babel',
    img: babelImg
  },
  {
    title: 'bower',
    img: bowerImg
  },
  {
    title: 'buddy',
    img: buddyImg
  },
  {
    title: 'coffeescript',
    img: coffeescriptImg
  },
  {
    title: 'pug',
    img: pugImg
  }
]

const PluginsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 42%);
  align-items: center;
  justify-content: center;
  grid-column-gap: var(--medium);
  grid-row-gap: var(--medium);

  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
    grid-column-gap: var(--big);
    grid-row-gap: var(--big);
  }  
`

const PluginsGrid = (props) => {
  return (
    <PluginsContainer>
      {plugins.map((plugin, index) => <Plugin key={index} title={plugin.title} imgSrc={plugin.img}/>)}
    </PluginsContainer>
  )
}

export default PluginsGrid;