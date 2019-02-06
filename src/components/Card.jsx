import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ icon, title, text, link }) => (
  <div className="col-4">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <i className={icon}> {title}</i>
        </h4>

        <p className="card-text">{text}</p>
      </div>

      <div className="card-body">
        <NavLink to={link}>
          <i className="fas fa-arrow-alt-circle-right"> Click here</i>
        </NavLink>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
export default Card;
