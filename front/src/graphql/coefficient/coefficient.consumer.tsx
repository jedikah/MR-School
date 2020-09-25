import * as React from "react";
import {
  CoefficientDisaptchContext,
  CoefficientStateContext,
  CoefficientDispatch,
  CoefficientState,
} from "./coefficient.context";

export const useCoefficientDispatch = (): CoefficientDispatch => {
  const context = React.useContext(CoefficientDisaptchContext);
  if (context === undefined) {
    throw new Error(
      "useCoefficientDispatch must be used within a CoefficientDispatchProvider"
    );
  }
  return context;
};

export const useCoefficientState = (): CoefficientState => {
  const context = React.useContext(CoefficientStateContext);
  if (context === undefined) {
    throw new Error(
      "useCoefficientState must be used within a CoefficientStateProvider"
    );
  }
  return context;
};
