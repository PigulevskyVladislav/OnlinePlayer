import React, { Component } from 'react';
import '../css/file_explorer_popup.css';

class FileExplorerPopup extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={()=>this.props.handleClose(false)}>x</span>
            {this.props.content}
        </div>
      </div>
    );
  }
}

export default FileExplorerPopup;