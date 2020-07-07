import React, { Component } from 'react';

class VolumeSlider extends Component{
 constructor(props) {
  super(props);
  
  this.handleVolumeChange = 
    this.handleVolumeChange.bind(this);
 }

 handleVolumeChange = (event) => {
   this.props.changeVolume(event.target.value);
 }

 render() {
  return (
    <div className="volSlider">
        <input type="range" min='0' max='1' step='0.02'
               onChange={this.handleVolumeChange}
        />
    </div>
  );
 }
}

export default VolumeSlider;