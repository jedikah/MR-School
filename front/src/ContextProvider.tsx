import * as React from "react";

import { SessionProvider } from "./contexts/session/session.context";
import { ElevesFormProvider } from "./graphql/eleve/eleves/elevesForm.context";
import { MatiereProvider } from "./graphql/matiere/matiere.context";
import { CoefficientProvider } from "./graphql/coefficient/coefficient.context";

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [
    SessionProvider,
    ElevesFormProvider,
    MatiereProvider,
    CoefficientProvider,
  ].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};
