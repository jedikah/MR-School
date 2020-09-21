import * as React from "react";

import { SessionProvider } from "./contexts/session/session.context";
import { ElevesFormProvider } from "./graphql/eleve/eleves/elevesForm.context";
import { CreateMatiereProvider } from "./graphql/matiere/create-matiere/createMatiere.context";

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [SessionProvider, ElevesFormProvider, CreateMatiereProvider].reduce(
    (acc, Provider) => {
      return <Provider>{acc}</Provider>;
    },
    children
  );
};
