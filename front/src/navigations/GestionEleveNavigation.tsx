import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const GestionEleveNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/frais`}
        component={
          require("../components/main/gestion-eleve/frais-de-scolarite/FraisDeScolarite")
            .default
        }
      />
      <Route
        path={`${match.url}/list`}
        component={
          require("../components/main/gestion-eleve/liste-eleve/ListeEleve")
            .default
        }
      />
      <Route
        path={`${match.url}/note`}
        component={
          require("../components/main/gestion-eleve/note-eleve/NoteEleve")
            .default
        }
      />
    </Switch>
  );
};

export default GestionEleveNavigation;
