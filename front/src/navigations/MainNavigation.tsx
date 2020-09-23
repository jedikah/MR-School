import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/gestion-eleve`}
        component={require('./GestionEleveNavigation').default}
      />
      <Route
        path={`${match.url}/gestion-ecole`}
        component={require('./GestionEcoleNavigation').default}
      />
      <Route
        path={`${match.url}/gestion-responsable`}
        component={require('./GestionResponsableNavigation').default}
      />
    </Switch>
  );
};

export default MainNavigation;
