import * as React from "react";
import produce, { Draft } from "immer";

import { MutationCreateMatiereArgs, MutationRemoveMatiereArgs } from "../types";

// Actions

interface SelectMatiereAction {
  type: "SELECT_MATIERE";
  idMatiere: string;
}

interface HandleChangeAction {
  type: "HANDLE_CHANGE";
  value: string;
}

interface SetToDeleteMatiereAction {
  type: "SET_TO_DELETE_MATIERE";
  idMatiere: number;
}

type MatiereActions =
  | SelectMatiereAction
  | HandleChangeAction
  | SetToDeleteMatiereAction;
export type MatiereDispatch = (action: MatiereActions) => void;

// Context

export interface MatiereState {
  selectedMatiere: string;
  removeMatiereVariables: MutationRemoveMatiereArgs;
  createMatiereVariables: MutationCreateMatiereArgs;
}

const initialState: MatiereState = {
  selectedMatiere: "",
  createMatiereVariables: {
    designation: "",
  },
  removeMatiereVariables: {
    id: 0,
  },
};

const matiereReducer = produce(
  (draft: Draft<MatiereState>, action: MatiereActions) => {
    switch (action.type) {
      case "HANDLE_CHANGE":
        draft.createMatiereVariables.designation = action.value;
        break;

      case "SELECT_MATIERE":
        if (draft.selectedMatiere === action.idMatiere)
          draft.selectedMatiere = "";
        else draft.selectedMatiere = action.idMatiere;
        break;

      case "SET_TO_DELETE_MATIERE":
        draft.removeMatiereVariables.id = action.idMatiere;
        break;
    }
  }
);

export const MatiereDisaptchContext = React.createContext<
  MatiereDispatch | undefined
>(undefined);
export const MatiereStateContext = React.createContext<
  MatiereState | undefined
>(undefined);

export const MatiereProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(matiereReducer, initialState);

  return (
    <MatiereStateContext.Provider value={state}>
      <MatiereDisaptchContext.Provider value={dispatch}>
        {children}
      </MatiereDisaptchContext.Provider>
    </MatiereStateContext.Provider>
  );
};
