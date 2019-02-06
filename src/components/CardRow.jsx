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
    const state = { ...this.state };
    const elements = state.temp.map(e => {
      let result = null;
      if (e.title !== null && e.text !== null) {
        result = <Card key={e.id} icon={e.icon} title={e.title} text={e.text} link={e.link} />;
      }
      return result;
    });
    return <div className="row">{elements}</div>;
  }
}

CardRow.propTypes = {
  temp: PropTypes.instanceOf(Array),
};

export default CardRow;
