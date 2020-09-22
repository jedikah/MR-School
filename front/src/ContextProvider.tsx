import * as React from "react";

import { SessionProvider } from "./contexts/session/session.context";
import { ElevesFormProvider } from "./graphql/eleve/eleves/elevesForm.context";
import { CreateMatiereProvider } from "./graphql/matiere/create-matiere/createMatiere.context";
import { MatieresProvider } from "./graphql/matiere/matieres/matieres.context";

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [
    SessionProvider,
    ElevesFormProvider,
    CreateMatiereProvider,
    MatieresProvider,
  ].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};
