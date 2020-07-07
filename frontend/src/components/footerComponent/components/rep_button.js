import React, { Component } from 'react';
import rep_off from '../../../images/rep_off.png'
import rep_all from '../../../images/rep_all.png'
import rep_one from '../../../images/rep_one.png'

class RepButton extends Component{
  state = {
    index: 0,
    repState: [rep_off, rep_all, rep_one]
  }

  swapState = () => {
    var index = this.state.index;
    if(this.state.index === 2) {
      index = 0;
    } else {
      ++index
    }
    this.props.loopList(index);
    this.setState({
      index: index
    })
  }

  render() {
  return (
    <div className="repButton">
        <img src={this.state.repState[this.state.index]} 
             alt="Repeat" onClick={this.swapState}
        />
    </div>
  );
 }
}

export default RepButton;