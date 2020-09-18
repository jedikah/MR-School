import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useSessionState } from "../contexts/session/session.consumer";

type PublicRouteProps = RouteProps & {
  component: React.FC;
};

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const sessionState = useSessionState();
  return (
    <Route
      {...rest}
      render={(props) =>
        !sessionState.connected ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

export default PublicRoute;
