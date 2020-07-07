import React, { Component } from 'react';

import PlayButton from './components/play_button';
import MixButton from './components/mix_button';
import PrevButton from './components/prev_button';
import NextButton from './components/next_button';
import RepButton from './components/rep_button';
import VolumeSlider from './components/vol_slider';
import ProgressBar from './components/prog_bar';

class Footer extends Component{
 render() {
  return (
    <footer>
      <div className="navigatePanel">
        
        <MixButton randomOrder={this.props.randomOrder}
        />

        <PrevButton playPrev={this.props.playPrev}
        /> 

        <PlayButton playSong={this.props.playSong}
                    pauseSong={this.props.pauseSong}
                    is_play={this.props.is_play}
        />

        <NextButton playNext={this.props.playNext}
        />

        <RepButton loopList={this.props.loopList}
        />

        <VolumeSlider changeVolume={this.props.changeVolume}
        />
        
      </div>

      <div className="progressPanel">
        <ProgressBar changeProgress={this.props.changeProgress}
                     progress={this.props.progress}
        />
      </div>
    </footer>
  );
 }
}

export default Footer;