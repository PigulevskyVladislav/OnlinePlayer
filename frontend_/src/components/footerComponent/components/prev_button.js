import React, { Component } from 'react';
import prev from '../../../images/prev.png'

class PrevButton extends Component{
 handleClick = () => {
   this.props.playPrev();
 }

 render() {
  return (
    <div className="prevButton">
        <img className="prevButton" 
             src={prev} 
             alt="Previos" 
             onClick={this.handleClick} />
    </div>
  );
 }
}

export default PrevButton;