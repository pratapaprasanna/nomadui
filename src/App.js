import React from 'react';
import './App.css';
import styles from './App.module.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AppScreen } from './components/AppScreen/appscreen';

import { NavBar } from './components/NavBar/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className={styles.pageOuterContainer}>
        <AppScreen />
        <Switch>
          <Route exact path="/">
            <Redirect to="/AppScreen" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
