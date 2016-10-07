import React from 'react';

import { Link } from 'react-router';

export default class ArtistPreview extends React.Component {
  render(){
    return (
      <Link to={`/artist/${this.props.id}`}>
        <div className="artist-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="albums-count"> {this.props.albums.length} </span>
        </div>
      </Link>
    );
  }
}
