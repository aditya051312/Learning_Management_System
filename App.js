import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
