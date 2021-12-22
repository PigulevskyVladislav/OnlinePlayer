import React, { Component } from 'react';
import logo_ from '../../images/logo.png';

class Header extends Component{
  constructor(props) {
    super();
  }

  render() {
    return (
      <header>
          <img className="logo" src={logo_} alt="Logo"></img>
          <button onClick={()=>this.props.toggleExplorer(true)} />
      </header>
    );
  }
}

export default Header;
