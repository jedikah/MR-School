import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const RootNavigation: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={require('../pages/Login').default} />
        <Route path="/home" component={require('../pages/Home').default} />
        <Route path="/main" component={require('../pages/Main').default} />
      </Switch>
    </Router>
  );
};

export default RootNavigation;
