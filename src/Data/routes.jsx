import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import MakeChange from '../components/MakeChange';
import NotFound from '../components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />,
  },
  {
    path: '/contact',
    exact: false,
    main: () => <Contact />,
  },
  {
    path: '/makechange',
    exact: false,
    main: () => <MakeChange />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
