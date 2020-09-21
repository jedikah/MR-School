import * as React from "react";
import produce, { Draft } from "immer";
import { MutationCreateMatiereArgs } from "../../types";

// Actions

interface HandleChangeAction {
  type: "HANDLE_CHANGE";
  value: string;
}

type CreateMatiereActions = HandleChangeAction;
export type CreateMatiereDispatch = (action: CreateMatiereActions) => void;

// Context

export interface CreateMatiereState {
  variables: MutationCreateMatiereArgs;
}

const initialState: CreateMatiereState = {
  variables: {
    designation: "",
  },
};

const createMatiereReducer = produce(
  (draft: Draft<CreateMatiereState>, action: CreateMatiereActions) => {
    switch (action.type) {
      case "HANDLE_CHANGE":
        draft.variables.designation = action.value;
        break;
    }
  }
);

export const CreateMatiereStateContext = React.createContext<
  CreateMatiereState | undefined
>(undefined);
export const CreateMatiereDispatchContext = React.createContext<
  CreateMatiereDispatch | undefined
>(undefined);

export const CreateMatiereProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    createMatiereReducer,
    initialState
  );

  return (
    <CreateMatiereStateContext.Provider value={state}>
      <CreateMatiereDispatchContext.Provider value={dispatch}>
        {children}
      </CreateMatiereDispatchContext.Provider>
    </CreateMatiereStateContext.Provider>
  );
};
