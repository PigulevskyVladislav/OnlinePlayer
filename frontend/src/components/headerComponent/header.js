import React, { Component } from 'react';
import logo_ from '../../images/logo.png'

class Header extends Component{
 render() {
  return (
    <header>
        <img className="logo" src={logo_} alt="Logo"></img>
    </header>
  );
 }
}

export default Header;
