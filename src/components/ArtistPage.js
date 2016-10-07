import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistMenu from './ArtistMenu';
import Flag from './Flag';
import artists from '../data/artists';

export default class ArtistPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const artist = artist.filter((artist) => artist.id === id)[0];
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
            Platinum rapper from <strong><Flag code={artist.country} showName="true"/></strong>,
            born in {artist.birth}. (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a> )
          </section>
          <section className="albums">
            <p> Released <strong> {artist.albums.length} </strong> albums: </p>
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