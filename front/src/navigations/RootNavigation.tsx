import * as React from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import { useCheckToken } from "../utils/useCheckToken";

const RootNavigation: React.FC = () => {
  const sessionState = useCheckToken();

  if (!sessionState.appReady) return <></>;

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={require("../pages/Login").default}
        />

        <PrivateRoute
          exact
          path="/home"
          component={require("../pages/Home").default}
        />

        <PrivateRoute
          exact
          path="/main"
          component={require("../pages/Main").default}
        />

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default RootNavigation;
