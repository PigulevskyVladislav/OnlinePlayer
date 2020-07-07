import React, { Component } from 'react';
import play from '../../../images/play.png'
import pause from '../../../images/pause.png'

class PlayButton extends Component{
 state = {
  index: 0,
  playButtonState: [pause, play]
}

static getDerivedStateFromProps(props, state) {
  if ((props.is_play === true && state.index === 1)
  || (props.is_play === false && state.index === 0)) {
    return {
      index: props.is_play ? 0 : 1,
    };
  }
  return null;
}

handleClick = () => {
  if(this.props.is_play) {
    this.props.pauseSong();
  } else {
    this.props.playSong();
  }
}
 
 render() {
  return (
    <div className="playButton" onClick={this.handleClick}>
        <img src={this.state.playButtonState[this.state.index]} 
             alt="Play"
        />
    </div>
  );
 }
}

export default PlayButton;