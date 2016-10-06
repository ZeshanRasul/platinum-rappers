import React from 'react';

const typeMap = {
  'P' : 'Platinum'
};

export default class Album extends React.Component {
  render() {
    return (
      <li className="album">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="name">{this.props.name}</span>
        <span className="year">{this.props.year}</span>
      </li>
    );
  }
}
