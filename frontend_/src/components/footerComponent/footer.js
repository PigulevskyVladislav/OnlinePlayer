import React, { Component } from 'react';

import PlayButton from './footerButtons/play_button';
import MixButton from './footerButtons/mix_button';
import PrevButton from './footerButtons/prev_button';
import NextButton from './footerButtons/next_button';
import RepButton from './footerButtons/rep_button';

class Footer extends Component{
 render() {
  return (
    <footer>
      <div className="navigatePanel">
        
        <MixButton />

        <PrevButton />

        <PlayButton />

        <NextButton />

        <RepButton />

      </div>

      <div className="progressPanel">
        <div className="progressBar"></div>
      </div>
    </footer>
  );
 }
}

export default Footer;