import React, { Component } from 'react';
import next from '../../../images/next.png'

class NextButton extends Component{
 handleClick = () => {
  this.props.playNext();
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