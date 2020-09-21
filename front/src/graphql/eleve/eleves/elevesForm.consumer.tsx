import * as React from "react";

import { UseElevesForm, ElevesFormContext } from "./elevesForm.context";

export const useElevesFormCtx = (): UseElevesForm => {
  const context = React.useContext(ElevesFormContext);
  if (context === undefined) {
    throw new Error(
      "useElevesFormCtx must be used within a ElevesFormProvider"
    );
  }
  return context;
};
