import React, { Component } from 'react';

class MusicBlock extends Component{
 state = {
   'name': '',
   'id': '',
   player: document.getElementsByTagName("audio")[0]
  }

 handleClick = () => {
  this.state.player.src =
  "https://docs.google.com/uc?export=download&id="
  .concat(this.props.id);
  this.state.player.play();
  //let player_own = document.getElementById("player");
  //player_own.setSongIndex(this.props.id);
 }

 render() {
  return (
    <div className="musicBlock" onClick={this.handleClick}>
        <h1>{this.props.name}</h1>
        
    </div>
  );
 }
}

export default MusicBlock;