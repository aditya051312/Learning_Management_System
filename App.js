import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;