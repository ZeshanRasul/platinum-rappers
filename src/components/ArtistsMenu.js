import React from 'react';

import { Link } from 'react-router';

import artists from '../data/artists';

export default class ArtistsMenu extends React.Component{
  render() {
    return(
      <nav className="artists-menu">
        {artists.map(menuArtist => {
          return <Link key={menuArtist.id} to={`/artist/${menuArtist.id}`} activeClassName="active">
            {menuArtist.name}
          </Link>;
        })}
      </nav>
    );
  }
}
