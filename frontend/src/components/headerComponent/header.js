import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import logo_ from '../../images/logo.png'

class Header extends Component{

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo_} alt="Logo"></img>

        <GoogleLogin
          className="login_btn"
          clientId="1014889555336-pjrd86lt7eq3fqt3pnfnnrujq1o5m6md.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default Header;
