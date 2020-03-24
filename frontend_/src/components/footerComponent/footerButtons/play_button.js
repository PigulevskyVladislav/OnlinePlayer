import React, { Component } from 'react';
import play from '../../../images/play.png'
import pause from '../../../images/pause.png'

class PlayButton extends Component{
 state = {
  index: 0,
  playButtonState: [play, pause]
}
 handleClick = () => {
   let player_sorce = document.getElementsByTagName("audio")[0]
    if(player_sorce.paused) {
      if(player_sorce.currentSrc != "") {
        player_sorce.play();
        this.setState({
        index: 1
      })
      }
    }
    else {
      player_sorce.pause();
      this.setState({
        index: 0
      })
    }
 }
 
 render() {
  return (
    <div className="playButton" onClick={this.handleClick}>
        <img src={this.state.playButtonState[this.state.index]} alt="Play"></img>
    </div>
  );
 }
}

export default PlayButton;