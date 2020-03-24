import React, { Component } from 'react';

class Player extends Component{
 state = {
  song_index: -1,
 }

 play = () => {
  this.refs.player_own.play();
 }

 pause = () => {
  this.refs.player_own.pause();
 }

 isPaused = () => this.refs.player_own.paused;

 setSongIndex = (i) => {
   this.serState({
    song_index: i
   });
 }

 render() {
  return (
    <div>
      <div><audio ref="player_own" src="" /></div>
    </div>
  );
 }
}

export default Player;