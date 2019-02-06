import React from 'react';
import { Route, Switch } from 'react-router-dom';
import shortid from 'shortid';
import routes from '../Data/routes';

const RouteManager = () => {
  const showRoutes = routes.map(e => (
    <Route key={shortid.generate()} path={e.path} exact={e.exact} component={e.main} />
  ));
  return <Switch>{showRoutes}</Switch>;
};

export default RouteManager;
