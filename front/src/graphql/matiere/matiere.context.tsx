import * as React from "react";
import produce, { Draft } from "immer";

import {
  MutationCreateMatiereArgs,
  MutationRemoveMatiereArgs,
  MutationUpdateMatiereArgs,
  UpdateMatiereInput,
} from "../types";

// Actions

interface HandleChangeCreateMatiereVariablesAction {
  type: "HANDLE_CHANGE_CREATE_MATIERE_VARIABLES";
  value: string;
}

interface HandleChangeUpdateMatiereVariablesAction {
  type: "HANDLE_CHANGE_UPDATE_MATIERE_VARIABLES";
  value: string;
}

interface SetToDeleteMatiereAction {
  type: "SET_TO_DELETE_MATIERE";
  idMatiere: number;
}

interface SetToUpdateMatiereAction {
  type: "SET_TO_UPDATE_MATIERE";
  updateMatiereInput: UpdateMatiereInput;
}

type MatiereActions =
  | HandleChangeCreateMatiereVariablesAction
  | HandleChangeUpdateMatiereVariablesAction
  | SetToDeleteMatiereAction
  | SetToUpdateMatiereAction;
export type MatiereDispatch = (action: MatiereActions) => void;

// Context

export interface MatiereState {
  removeMatiereVariables: MutationRemoveMatiereArgs;
  createMatiereVariables: MutationCreateMatiereArgs;
  updateMatiereVariables: MutationUpdateMatiereArgs;
}

const initialState: MatiereState = {
  createMatiereVariables: {
    designation: "",
  },
  removeMatiereVariables: {
    id: 0,
  },
  updateMatiereVariables: {
    updateMatiereInput: {
      id: 0,
      designation: "",
    },
  },
};

const matiereReducer = produce(
  (draft: Draft<MatiereState>, action: MatiereActions) => {
    switch (action.type) {
      case "HANDLE_CHANGE_CREATE_MATIERE_VARIABLES":
        draft.createMatiereVariables.designation = action.value;
        break;

      case "HANDLE_CHANGE_UPDATE_MATIERE_VARIABLES":
        draft.updateMatiereVariables.updateMatiereInput.designation =
          action.value;
        break;

      case "SET_TO_DELETE_MATIERE":
        draft.removeMatiereVariables.id = action.idMatiere;
        break;

      case "SET_TO_UPDATE_MATIERE":
        if (
          draft.updateMatiereVariables.updateMatiereInput.id ===
          action.updateMatiereInput.id
        ) {
          draft.updateMatiereVariables.updateMatiereInput = {
            id: 0,
            designation: "",
          };
        } else {
          draft.updateMatiereVariables.updateMatiereInput =
            action.updateMatiereInput;
        }
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
