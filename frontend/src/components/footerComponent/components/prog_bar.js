import React, {Component} from 'react';

class ProgressBar extends Component {
  render () {
    return (
      <progress value={this.props.progress} max='100'
                onClick={this.props.changeProgress}
      />
    );
  }
}

export default ProgressBar;