import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginHooks from './components/LoginHooks';

export default function App() {
  return (
    <Router>
      <div className="navbar">
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

