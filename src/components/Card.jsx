import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class Card extends Component {
  constructor(props) {
    super(props);
    this.temp = props.temp;
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {this.temp.icon} {this.temp.title}
          </h4>
          <p className="card-text">{this.temp.text}</p>
          <div className="text-center">
            <NavLink to={this.temp.link}>
              <FaArrowAltCircleRight />
              <b> Click here</b>
            </NavLink>
          </div>
          <p className="card-text">
            <small className="text-muted">
              Last updated <TimeAgo date={this.temp.updated} />
            </small>
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  temp: PropTypes.instanceOf(Object),
};

export default Card;
