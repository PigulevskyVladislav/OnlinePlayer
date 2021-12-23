import React, { Component } from 'react';
import ExplorerButton from './file_explorer_button'
import GoogleLogin, {GoogleLogout} from 'react-google-login';
import logo_ from '../../images/logo.png'

class Header extends Component{
  constructor(props) {
    super(props);
  }

  /*<GoogleLogout
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={this.logout}
  >
  </GoogleLogout>*/

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo_} alt="Logo"></img>

        <ExplorerButton openPopup={()=>this.props.toggleExplorer(true)} />
        
        {!this.props.isLoginState &&
        <GoogleLogin
          className="auth_btn"
          clientId="1014889555336-pjrd86lt7eq3fqt3pnfnnrujq1o5m6md.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.props.responseGoogle}
          onFailure={this.props.responseGoogleError}
          cookiePolicy={'single_host_origin'}
        />}

        {this.props.isLoginState &&
        <GoogleLogout
          className="auth_btn"
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.props.logout}
        />}
      </div>
    );
  }
}

export default Header;
