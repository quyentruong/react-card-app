import React from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

const Header = () => {
  const navMenu = [
    {
      path: '/',
      exact: true,
      text: 'Home',
    },
    {
      path: '/about',
      exact: false,
      text: 'About',
    },
    {
      path: '/contact',
      exact: false,
      text: 'Contact',
    },
  ];
  const showMenu = navMenu.map(e => (
    <li key={shortid.generate()} className="nav-item">
      <NavLink className="nav-link" activeClassName="active" exact={e.exact} to={e.path}>
        {e.text}
        <span className="sr-only">(current)</span>
      </NavLink>
    </li>
  ));
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="nav navbar-nav">{showMenu}</ul>
      </nav>
    </div>
  );
};

export default Header;
