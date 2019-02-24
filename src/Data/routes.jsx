import React from 'react';
import Home from '../components/RoutePage/Home';
import About from '../components/RoutePage/About';
import Contact from '../components/RoutePage/Contact';
import NotFound from '../components/RoutePage/NotFound';
import MakeChange from '../components/CardDesk/Project/MakeChange';
import CollatzConjecture from '../components/CardDesk/Project/CollatzConjecture';
import SillyStoryGenerator from '../components/CardDesk/Project/SillyStoryGenerator';
import ShapeCalculation from '../components/CardDesk/Project/ShapeCalculation';

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
    path: '/make-change',
    exact: true,
    main: () => <MakeChange />,
  },
  {
    path: '/collatz-conjecture',
    exact: true,
    main: () => <CollatzConjecture />,
  },
  {
    path: '/silly-story-generator',
    exact: true,
    main: () => <SillyStoryGenerator />,
  },
  {
    path: '/shape-calculation',
    exact: true,
    main: () => <ShapeCalculation />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
