import * as React from 'react';

import { SessionProvider } from './contexts/session/session.context';
import { ElevesFormProvider } from './graphql/eleve/eleves/elevesForm.context';
import { ResponsableProvider } from './graphql/responsable/responsable.context';

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [SessionProvider, ElevesFormProvider, ResponsableProvider].reduce(
    (acc, Provider) => {
      return <Provider>{acc}</Provider>;
    },
    children
  );
};
