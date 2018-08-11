import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor (props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction () {
    if (this.props.isRemoval) {
      return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
    } else {
      return (<a className="Track-action" onClick={this.addTrack}>+</a>);
    }
  }

  addTrack () {
    this.props.onAdd(this.props.track);
  }

  removeTrack () {
    this.props.onRemove(this.props.track);
  }

  playPreview () {
    const previewUrl = this.props.onPlay(this.props.track.id);
    console.log(previewUrl);
    if (previewUrl) {
      return (
        <audio controls>
          <source src={previewUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      );
    }
    return;
  }

  render () {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.playPreview()}{this.renderAction()}
      </div>
    );
  }
}

export default Track;
