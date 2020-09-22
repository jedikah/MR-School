import * as React from "react";
import produce, { Draft } from "immer";

// Actions

interface SelectMatiereAction {
  type: "SELECT_MATIERE";
  idMatiere: string;
}

type MatieresActions = SelectMatiereAction;
export type MatieresDispatch = (action: MatieresActions) => void;

// Context

export interface MatieresState {
  selectedMatiere: string;
}

const initialState: MatieresState = {
  selectedMatiere: "",
};

const matieresReducer = produce(
  (draft: Draft<MatieresState>, action: MatieresActions) => {
    switch (action.type) {
      case "SELECT_MATIERE":
        if (draft.selectedMatiere === action.idMatiere)
          draft.selectedMatiere = "";
        else draft.selectedMatiere = action.idMatiere;
        break;
    }
  }
);

export const MatieresDisaptchContext = React.createContext<
  MatieresDispatch | undefined
>(undefined);
export const MatieresStateContext = React.createContext<
  MatieresState | undefined
>(undefined);

export const MatieresProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(matieresReducer, initialState);

  return (
    <MatieresStateContext.Provider value={state}>
      <MatieresDisaptchContext.Provider value={dispatch}>
        {children}
      </MatieresDisaptchContext.Provider>
    </MatieresStateContext.Provider>
  );
};
