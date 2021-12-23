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
      folder_name: '',
      token_id: '',
      isLoginState: false,
    };

    this.toggleFileExplorer = this.toggleFileExplorer.bind(this);
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState({token_id: response.tokenId,
                   isLoginState: true});
    console.log(this.state.token_id);
  }

  responseGoogleError = (response) => {
    console.log('Error: ' + response.error);
    alert('Authorization error');
  }

  logout = () => {
    this.setState({token_id: '',
                   isLoginState: false});
    console.log(this.state.token_id);
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

        <Header responseGoogleError={this.responseGoogleError}
                toggleExplorer={this.toggleFileExplorer} 
                responseGoogle={this.responseGoogle}
                logout={this.logout}
                isLoginState={this.state.isLoginState}/>

        <Player isSongsRenderState={this.state.isLoginState && this.state.folder_name == 'MyMusic'}/>

      </div>
    );
  }
}

export default App;
