import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: props.temp,
    };
  }

  render() {
    const elements = { ...this.state }.temp.map(e => {
      let result = null;
      if (e.title !== null && e.text !== null) {
        e.link = `/${e.title.toLowerCase().replace(/\s/g, '-')}`;
        result = <Card key={e.id} temp={e} />;
      }
      return result;
    });
    return (
      <div>
        <div className="card-deck">{elements}</div> <br />
      </div>
    );
  }
}

CardRow.propTypes = {
  temp: PropTypes.instanceOf(Array),
};

export default CardRow;
