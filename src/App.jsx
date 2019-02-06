import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import RouteManager from './components/RouteManager';

const App = () => {
  const history = createHistory();
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <RouteManager />
      </div>
    </Router>
  );
};

export default App;
