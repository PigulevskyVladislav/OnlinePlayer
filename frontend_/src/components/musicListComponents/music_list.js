import React, { Component } from 'react';

import MusicBlock from './music_block';

class MusicList extends Component{
  constructor() {
    super();

    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    this.getItems();
  }
  getItems() {
    fetch('/123')
      .then(results => results.json())
      .then(results => this.setState({'items': results}));
  }
 render() {
  return (
    <div className="musicList">
        <ul>
          {this.state.items.map(function(item, index) {
            return(
              <MusicBlock key = {index} 
              name = {item.name} id = {item.id} />
            )
          }
          )}
        </ul>
    </div>
  );
 }
}

export default MusicList;