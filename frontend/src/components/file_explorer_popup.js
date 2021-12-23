import React, { Component } from 'react';
import '../css/file_explorer_popup.css';

class FileExplorerPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.folder_name};
  }

  handleChange(new_value) {
    this.setState({value: new_value});
  }

  clickChange = () => {
    this.props.changeFolder(this.state.value);
    this.props.handleClose(false);
  }

  render() {
    return(
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={()=>this.props.handleClose(false)}>x</span>
          <label className="form-label">
            Введите название каталога с музыкой:
            <input className="form-input" value={this.state.value} onChange={event => this.handleChange(event.target.value)}/>
            <input className="form-button" type="button" value="Изменить" 
                   onClick={this.clickChange}/>
          </label>
        </div>
      </div>
    );
  }
}

export default FileExplorerPopup;