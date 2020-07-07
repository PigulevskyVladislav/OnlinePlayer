import React, { Component } from 'react';

class MusicBlock extends Component{

  handleClick = () => {
   this.props.playSong(this.props.id);
   this.props.setIndex(this.props.index);
 }

 render() {
  return (
    <div className="musicBlock" 
         onClick={this.handleClick}>
         
        <h1>{this.props.name}</h1> 
    </div>
  );
 }
}

export default MusicBlock;