import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './dashboard';
import Courses from './courses';
import Users from './users';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
