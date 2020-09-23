import * as React from "react";

import { SessionProvider } from "./contexts/session/session.context";
import { ElevesFormProvider } from "./graphql/eleve/eleves/elevesForm.context";
import { OneEleveFormProvider } from "./graphql/eleve/eleve/eleveFormContext";

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [SessionProvider, ElevesFormProvider, OneEleveFormProvider].reduce(
    (acc, Provider) => {
      return <Provider>{acc}</Provider>;
    },
    children
  );
};
