import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistsMenu from './ArtistsMenu';
import Album from './Album';
import artists from '../data/artists';

export default class ArtistPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const artist = artists.filter((artist) => artist.id === id)[0];
    if (!artist) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${artist.cover})` };
    return (
      <div className="artist-full">
        <ArtistsMenu/>
        <div className="artist">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${artist.image}`}/>
            <h2 className="name"> {artist.name} </h2>
          </div>
          <section className="description">
            From <strong> {artist.country} </strong>,
            born in {artist.birth}. (Find out more on <a href={artist.link} target="_blank">Wikipedia</a> )
          </section>
          <section className="albums">
            <p> Released <strong> {artist.albums.length} </strong> Platinum albums: </p>
            <ul>{
             artist.albums.map((album, i) => <Album key={i} {...album}/>)
           }</ul>
          </section>
          <div className="navigateBack">
            <Link to="/"> «Back to the Index </Link>
          </div>
        </div>
      </div>
    );
  }
}
