import React, { Component } from 'react';
import mix_off from '../../../images/mix_off.png'
import mix_on from '../../../images/mix_on.png'

class MixButton extends Component{
 /*constructor(props) {
  super(props);
  
  icon = mix_off;

  this.state = {
    player: document.getElementsByTagName("audio")[0],
  }
 }*/
 state = {
   index: 0,
   mixState: [mix_off, mix_on]
 }

 swapState = () => {
   if(this.state.index === 0) {
    this.setState({
      index: 1
    })
   } else {
    this.setState({
      index: 0
    })
   }
 }

 render() {
  return (
    <div className="mixButton">
        <img src={this.state.mixState[this.state.index]} alt="Scramble" onClick={this.swapState} />
    </div>
  );
 }
}

export default MixButton;