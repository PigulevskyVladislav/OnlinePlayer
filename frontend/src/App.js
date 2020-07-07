import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header';
import Player from './components/player'

// includes
import './css/default.css';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Header />

        <Player />

      </div>
    );
  }
}

export default App;
