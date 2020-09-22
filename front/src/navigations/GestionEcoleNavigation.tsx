import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const GestionEcoleNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/gestion-ecole`}
        component={
          require("../components/main/gestion-eleve/frais-de-scolarite/FraisDeScolarite")
            .default
        }
      />
    </Switch>
  );
};

export default GestionEcoleNavigation;
