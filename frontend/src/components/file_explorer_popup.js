import React, { Component } from 'react';
import '../css/file_explorer_popup.css';

class FileExplorerPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return(
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={()=>this.props.handleClose(false)}>x</span>
          <label className="form-label">
            Введите название каталога с музыкой:
            <input className="form-input" />
            <input className="form-button" type="button" value="Изменить" />
          </label>
        </div>
      </div>
    );
  }
}

export default FileExplorerPopup;