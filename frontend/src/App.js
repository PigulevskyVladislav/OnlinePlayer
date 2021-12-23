import React, { Component } from 'react';

// components
import FileExplorerPopup from './components/file_explorer_popup.js';
import Header from './components/headerComponent/header'
import Player from './components/player'

// includes
import './css/default.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      is_file_explorer_turned: false,
      folder_name: ''
    };

    this.toggleFileExplorer = this.toggleFileExplorer.bind(this);
  }

  toggleFileExplorer = (is_turns_on) => {
    this.setState({is_file_explorer_turned: 
                    is_turns_on});
  }

  changeFolderName = (new_folder_name) => {
    this.setState({folder_name: 
                    new_folder_name});
  }

  render() {
    return (
      <div className="app">
        {this.state.is_file_explorer_turned && 
          <FileExplorerPopup handleClose={this.toggleFileExplorer} 
                             changeFolder={this.changeFolderName}
                             folder_name={this.state.folder_name}/>} 

        <Header toggleExplorer={this.toggleFileExplorer} />

        <Player />

      </div>
    );
  }
}

export default App;
