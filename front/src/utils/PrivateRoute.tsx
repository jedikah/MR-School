import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useSessionState } from "../contexts/session/session.consumer";

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const sessionState = useSessionState();
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionState.connected ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
