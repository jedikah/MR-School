import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import LoginScreen from '../screen/Login';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={(): ReactElement => <LoginScreen />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
