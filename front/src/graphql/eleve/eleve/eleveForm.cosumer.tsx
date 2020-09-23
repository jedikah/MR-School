import * as React from "react";
import { OneEleveContext } from "../eleve/eleveFormContext";
import { UseOneEleve } from "./eleveFormContext";

export const useOneEleveFormCtx = (): UseOneEleve => {
  const context = React.useContext(OneEleveContext);
  if (context === undefined) {
    throw new Error("useOneEleveForm must be used within a ElevesFormProvider");
  }
  return context;
};
