import React, { Component } from 'react';

import MusicBlock from './music_block';

class MusicList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [],
     };
  }

 getLength = () => {
   
 }

 render() {
  return (
    <div className="musicList">
        <SongList items={this.props.items}
                  playSong={this.props.playSong}
                  setIndex={this.props.setIndex} 
        />
    </div>
  );
 }
}

export default MusicList;

function SongList(props) {
    const items = props.items;
    const listSongs = items.map((song, song_index) =>
        <MusicBlock key={song.id} 
                    index={song_index}
                    name={song.name} 
                    id={song.id} 
                    playSong={props.playSong}
                    setIndex={props.setIndex}            
        />
        );
    return (
      <div id="scroll_div">
        <ul>{listSongs}</ul>
      </div>);
}