import * as React from "react";
import {
  MatieresDisaptchContext,
  MatieresStateContext,
  MatieresDispatch,
  MatieresState,
} from "./matieres.context";

export const useMatieresDispatch = (): MatieresDispatch => {
  const context = React.useContext(MatieresDisaptchContext);
  if (context === undefined) {
    throw new Error(
      "useMatieresDispatch must be used within a MatieresDispatchProvider"
    );
  }
  return context;
};

export const useMatieresState = (): MatieresState => {
  const context = React.useContext(MatieresStateContext);
  if (context === undefined) {
    throw new Error(
      "useMatieresState must be used within a MatieresStateProvider"
    );
  }
  return context;
};
