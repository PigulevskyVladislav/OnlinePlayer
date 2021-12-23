import React, { Component } from 'react';
import prev from '../../images/folder.png'

class FolderButton extends Component{
 handleClick = () => {
   this.props.openPopup();
 }

 render() {
  return (
    <div className="folderButton">
        <img className="folderButton" 
             src={prev} 
             alt="Songs location" 
             onClick={this.handleClick} />
    </div>
  );
 }
}

export default FolderButton;