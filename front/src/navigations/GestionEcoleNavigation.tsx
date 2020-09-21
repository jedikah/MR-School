import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const GestionEcoleNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/matiere`}
        component={
          require("../components/main/gestion-ecole/matiere/Matiere").default
        }
      />
    </Switch>
  );
};

export default GestionEcoleNavigation;
