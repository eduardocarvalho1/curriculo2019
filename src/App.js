import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'


export default class App extends Component {
  render() {
    return (
      <div id="content" style={contentStyle}>
        <Sidebar />
        <div style={descriptionsStyle} id="descriptions">
          <Home />
          <Skills/>
          <Experience/>
        </div>

      </div>
    );
  }
}

const contentStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
  background: '#ededed'
}

const descriptionsStyle={
  display: 'flex',
flexDirection: 'column',
width: '100%'
}