import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginHooks from './components/LoginHooks';

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      Welcome nomads
      <LoginHooks />
      {/* <LogoutHooks /> */}
    </div>
  );
}
