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
         
        <b>{this.props.name}</b> 
    </div>
  );
 }
}

export default MusicBlock;