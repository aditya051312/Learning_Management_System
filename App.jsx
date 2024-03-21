import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
    </Router>
  );
};

export default App;
