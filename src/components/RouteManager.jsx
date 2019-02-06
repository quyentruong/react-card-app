import React from 'react';
import { Route, Switch } from 'react-router-dom';
import shortid from 'shortid';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MakeChange from './MakeChange';
import NotFound from './NotFound';

const RouteManager = () => {
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

  const showRoutes = routes.map(e => (
    <Route key={shortid} path={e.path} exact={e.exact} component={e.main} />
  ));
  return (
    <div>
      <Switch>{showRoutes}</Switch>
    </div>
  );
};

export default RouteManager;
