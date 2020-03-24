import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import MusicList from './components/musicListComponents/music_list';
import Player from './components/player'

// includes
import './css/default.css';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Header />

        <MusicList />

        <Footer />

        <Player id="player"/>

      </div>
    );
  }
}

export default App;
