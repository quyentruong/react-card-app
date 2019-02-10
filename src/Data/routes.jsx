import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import MakeChange from '../components/CardDesk/MakeChange';
import CollatzConjecture from '../components/CardDesk/CollatzConjecture';

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
    exact: true,
    main: () => <MakeChange />,
  },
  {
    path: '/collatzconjecture',
    exact: true,
    main: () => <CollatzConjecture />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
