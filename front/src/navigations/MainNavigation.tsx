import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/main/frais"
        component={
          require('../components/frais-de-scolarite/FraisDeScolarite').default
        }
      />
      <Route
        path="/main/list-eleve"
        component={require('../components/student-list/StudentList').default}
      />
      <Route
        path="/main/note-eleve"
        component={require('../components/note-eleve/NoteEleve').default}
      />
    </Switch>
  );
};

export default MainNavigation;
