import React, { Component } from 'react';
import next from '../../../images/next.png'

class NextButton extends Component{
 constructor(props) {
  super(props);
  this.player = document.getElementsByTagName("audio")[0];
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
    <div className="nextButton" onClick={this.handleClick}>
        <img src={next} alt="Next"></img>
    </div>
  );
 }
}

export default NextButton;