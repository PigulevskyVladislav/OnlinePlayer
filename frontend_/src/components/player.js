import React, { Component } from 'react';
import Footer from './footerComponent/footer';
import MusicList from './musicListComponents/music_list';

class Player extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      order: [],
      song_index: -1,
      random: false,
      is_first_random_song: false,
      is_first_order_song: false,
      is_play: false,
      loop: 0,
      progress: 0,
     };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('/songs')
      .then(results => results.json())
      .then(results => this.setState({items: results},
        () => {
          var songs_order = Array.from(Array(
            this.state.items.length).keys());
            
          this.setState({ order: songs_order });
        }));
  }

  getSongId = (index) => {
    return (
      this.state.items[index].id
      );
  }

  setIndex = (index) => {
    this.setState({
     song_index: this.state.order[index]
    });
  }

  changeProgress = (event) => {
    if (this.state.song_index !== -1) {
      var x = event.pageX - event.target.offsetLeft;
      var progress = Math.round(x / (event.target.offsetWidth / 100));
      this.refs.player.currentTime = this.refs.player.duration / 100 * progress;
      this.refreshProgress();
    }
  }

  refreshWhilePlaying = () => {
    if (this.state.is_play) {
      this.refreshProgress();
    }
  }

  refreshProgress =  () => {
    var duration = this.refs.player.duration;
    var result = Number.isNaN(duration) ? 0 : 
      Math.round(this.refs.player.currentTime /
      (duration / 100));
    this.setState({
      progress: result
    });
    console.log(this.state.progress);
  }

  switchSong = (is_next) => {
    if (this.state.song_index !== -1) {
      var change_number = is_next ? 1 : -1;
      var max_index = this.state.items.length - 1;
      var song_index = this.state.song_index;
      var new_index;
      var order = this.state.order;
      var rand = this.state.random;
      var is_first_random_song = 
          this.state.is_first_random_song;
      var is_first_order_song = 
          this.state.is_first_order_song;
   
      if (is_first_random_song) {
        song_index = order[song_index];
        this.setState({ is_first_random_song: false });
      } else
        if (is_first_order_song) {
        song_index = order.indexOf(song_index);
        this.setState({ is_first_order_song: false });
      }

      song_index = song_index + change_number;
      var is_out_of_range = song_index < 0 || 
                              song_index > max_index;
      if (is_out_of_range) {
        if (this.state.loop === 0) {
          return;
        }
        song_index = is_next ? 0 : max_index; 
      }   
      if (rand) {
        new_index = order.indexOf(song_index);    
      } else {
        new_index = song_index;
      }
      let id = this.getSongId(new_index);
      this.handlePlaySong(id);
      this.setState({ 
        song_index: song_index
      });
    }
  }

  onPlay = () => {
    this.setState({
      is_play: true
    });
    this.progressID = setInterval((this.refreshWhilePlaying), 40);
  }

  onPause = () => {
    this.setState({
      is_play: false
    });
    clearInterval(this.progressID);
  }

  onSongEnded = () => {
    if (this.state.loop === 2) {
      this.handlePlay();
    } else {
      this.handlePlayNext();
    }
  }

 handlePlay = () => {
   if(this.refs.player.src !== '') {
    this.refs.player.play();
   }
 }

 handlePause = () => {
  this.refs.player.pause();
 }

 handlePlaySong = (id) => {
  this.refs.player.src =
  "https://docs.google.com/uc?export=download&id="
  .concat(id);
  this.handlePlay();
 }

 handlePlayNext = () => {
   this.switchSong(true);
 }

 handlePlayPrev = () => {
  this.switchSong(false);
}

 handleLoop = (index) => {
  this.setState({
    loop: index
  });
 }

 handleRandom = () => {
   var rand = this.state.random;
   var order = this.state.order;

   if (!rand) {
    //  Randomize song order
    for (var i = 0; i < order.length; i++) {
      var j = Math.floor(Math.random() * order.length);
      var temp = order[i];
      order[i] = order[j];
      order[j] = temp;
    }

    // for (var i = 0; i < this.state.order.length; i++) {
    //   alert(this.state.order[i]);
    // }
    this.setState({ order: order,
                    is_first_random_song: true});
  }
    else {
      this.setState({ is_first_order_song: true });
   }
    this.setState({ random: !rand });
 }

 handleVolumeChange = (volume) => {
  this.refs.player.volume = volume;
 }

//  handleProgressChange = (progress) => {
//   //this.refs.player.volume = volume;
//  }

 render() {
  return (
    <div>
      <audio ref='player' volume='0.5'
                          onEnded={this.onSongEnded}
                          onPlay={this.onPlay}
                          onPause={this.onPause}
                          onProgress={this.refreshProgress}
      />
      
      <div>
        <MusicList playSong={this.handlePlaySong}
                   setIndex={this.setIndex}

                   items={this.state.items}
        />

        <Footer playSong={this.handlePlay} 
                pauseSong={this.handlePause}
                playNext={this.handlePlayNext}
                playPrev={this.handlePlayPrev}
                loopList={this.handleLoop}
                randomOrder={this.handleRandom}
                changeVolume={this.handleVolumeChange}
                changeProgress={this.changeProgress}
                
                progress={this.state.progress}
                is_play={this.state.is_play}
        />
      </div>
    </div>
  );
 }
}

export default Player;