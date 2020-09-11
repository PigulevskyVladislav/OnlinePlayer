import React, { Component } from 'react';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
import logo_ from '../../images/logo.png'

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      token_id: '',
      isLoginState: false,
     };
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

        {!this.state.isLoginState &&
        <GoogleLogin
          className="auth_btn"
          clientId="1014889555336-pjrd86lt7eq3fqt3pnfnnrujq1o5m6md.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogleError}
          cookiePolicy={'single_host_origin'}
        />}

        {this.state.isLoginState &&
        <GoogleLogout
          className="auth_btn"
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        />}
      </div>
    );
  }
}

export default Header;
