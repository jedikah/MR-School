import * as React from "react";
import {
  MatiereDisaptchContext,
  MatiereStateContext,
  MatiereDispatch,
  MatiereState,
} from "./matiere.context";

export const useMatiereDispatch = (): MatiereDispatch => {
  const context = React.useContext(MatiereDisaptchContext);
  if (context === undefined) {
    throw new Error(
      "useMatiereDispatch must be used within a MatiereDispatchProvider"
    );
  }
  return context;
};

export const useMatiereState = (): MatiereState => {
  const context = React.useContext(MatiereStateContext);
  if (context === undefined) {
    throw new Error(
      "useMatiereState must be used within a MatiereStateProvider"
    );
  }
  return context;
};
