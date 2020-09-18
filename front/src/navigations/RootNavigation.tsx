import * as React from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import { useCheckToken } from "../utils/useCheckToken";
import { useGlobalError } from "../graphql/apollo";

const RootNavigation: React.FC = () => {
  useGlobalError();
  const sessionState = useCheckToken();

  if (!sessionState.appReady) return <></>;

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/login"
          component={require("../pages/Login").default}
        />

        <PrivateRoute
          path="/home"
          component={require("../pages/Home").default}
        />

        <PrivateRoute
          path="/main"
          component={require("../pages/Main").default}
        />

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default RootNavigation;
