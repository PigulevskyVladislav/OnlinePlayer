import React, { Component } from 'react';
import mix_off from '../../../images/mix_off.png'
import mix_on from '../../../images/mix_on.png'

class MixButton extends Component{
 state = {
   index: 0,
   mixState: [mix_off, mix_on]
 }

 handleClick = () => {
   this.props.randomOrder();
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
        <img src={this.state.mixState[this.state.index]} alt="Scramble" onClick={this.handleClick} />
    </div>
  );
 }
}

export default MixButton;