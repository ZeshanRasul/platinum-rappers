import React from 'react';

const data = {
  'usa' : {
    'name' : 'U.S.A',
    'icon' : 'us-flag.png',
  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name} </span>}
      </span>
    );
  }
}
