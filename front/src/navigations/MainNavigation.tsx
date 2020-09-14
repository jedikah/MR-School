import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const MainNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/gestion-eleve`}
        component={require("./GestionEleveNavigation").default}
      />
    </Switch>
  );
};

export default MainNavigation;
