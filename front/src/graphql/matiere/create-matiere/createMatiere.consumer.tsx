import * as React from "react";

import {
  CreateMatiereState,
  CreateMatiereDispatch,
  CreateMatiereStateContext,
  CreateMatiereDispatchContext,
} from "./createMatiere.context";

export const useCreateMatiereState = (): CreateMatiereState => {
  const context = React.useContext(CreateMatiereStateContext);
  if (context === undefined) {
    throw new Error(
      "useCreateMatiereState must be used within a CreateMatiereProvider"
    );
  }
  return context;
};

export const useCreateMatiereDispatch = (): CreateMatiereDispatch => {
  const context = React.useContext(CreateMatiereDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCreateMatiereDispatch must be used within a CreateMatiereProvider"
    );
  }
  return context;
};
