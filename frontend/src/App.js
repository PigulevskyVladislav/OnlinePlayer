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
      is_file_explorer_turned: true
    };

    this.toggleFileExplorer = this.toggleFileExplorer.bind(this);
  }

  toggleFileExplorer = (is_turns_on) => {
    this.setState({is_file_explorer_turned: 
                    is_turns_on});
  }

  render() {
    return (
      <div className="app">
        {this.state.is_file_explorer_turned && 
          <FileExplorerPopup handleClose={this.toggleFileExplorer} />} 

        <Header toggleExplorer={this.toggleFileExplorer} />

        <Player />

      </div>
    );
  }
}

export default App;
