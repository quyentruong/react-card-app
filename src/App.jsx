import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import RouteManager from './components/RouteManager';

const App = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <br />
        <RouteManager />
      </div>
    </Router>
  );
};

export default App;
