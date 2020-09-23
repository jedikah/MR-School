import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const GestionResponsableNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/listResponsable`}
        component={
          require('../components/main/gestion-responsable/liste-responsable/ListeResponsable')
            .default
        }
      />
    </Switch>
  );
};

export default GestionResponsableNavigation;
