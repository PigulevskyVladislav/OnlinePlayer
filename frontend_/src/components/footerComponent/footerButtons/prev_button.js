import React, { Component } from 'react';
import prev from '../../../images/prev.png'

class PrevButton extends Component{
 constructor(props) {
  super(props);
  this.player = document.getElementsByTagName("audio")[0];
 }
 render() {
  return (
    <div className="prevButton">
        < img className="prevButton" src={prev} alt="Previos"></img>
    </div>
  );
 }
}

export default PrevButton;