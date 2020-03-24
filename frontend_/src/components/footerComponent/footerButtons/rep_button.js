import React, { Component } from 'react';
import rep_off from '../../../images/rep_off.png'
import rep_all from '../../../images/rep_all.png'
import rep_one from '../../../images/rep_one.png'
//this.player = document.getElementsByTagName("audio")[0];

class RepButton extends Component{
  state = {
    index: 0,
    repState: [rep_off, rep_all, rep_one]
  }

  swapState = () => {
    if(this.state.index === 2) {
     this.setState({
       index: 0
     })
    } else {
     this.setState({
       index: this.state.index + 1
     })
    }
  }

  render() {
  return (
    <div className="repButton">
        <img src={this.state.repState[this.state.index]} alt="Repeat" onClick={this.swapState}></img>
    </div>
  );
 }
}

export default RepButton;