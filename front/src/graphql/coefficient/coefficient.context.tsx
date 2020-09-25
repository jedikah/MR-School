import * as React from "react";
import produce, { Draft } from "immer";

// Actions

interface ToogleSelectClasseCoefficientAction {
  type: "TOOGLE_SELECT_CLASSE_COEFFICIENT";
  classeId: number;
}

interface ClearSelectClasseCoefficientAction {
  type: "CLEAR_SELECT_CLASSE_COEFFICIENT";
}

type CoefficientActions =
  | ToogleSelectClasseCoefficientAction
  | ClearSelectClasseCoefficientAction;
export type CoefficientDispatch = (action: CoefficientActions) => void;

// Context
export interface CoefficientState {
  coefficientSelectedClasses: readonly number[];
}

const initialState: CoefficientState = {
  coefficientSelectedClasses: [],
};

const coefficientReducer = produce(
  (draft: Draft<CoefficientState>, action: CoefficientActions) => {
    switch (action.type) {
      case "TOOGLE_SELECT_CLASSE_COEFFICIENT":
        if (draft.coefficientSelectedClasses.includes(action.classeId)) {
          draft.coefficientSelectedClasses.splice(
            draft.coefficientSelectedClasses.indexOf(action.classeId),
            1
          );
        } else {
          draft.coefficientSelectedClasses.push(action.classeId);
        }
        break;

      case "CLEAR_SELECT_CLASSE_COEFFICIENT":
        draft.coefficientSelectedClasses = [];
        break;
    }
  }
);

export const CoefficientDisaptchContext = React.createContext<
  CoefficientDispatch | undefined
>(undefined);
export const CoefficientStateContext = React.createContext<
  CoefficientState | undefined
>(undefined);

export const CoefficientProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(coefficientReducer, initialState);

  return (
    <CoefficientStateContext.Provider value={state}>
      <CoefficientDisaptchContext.Provider value={dispatch}>
        {children}
      </CoefficientDisaptchContext.Provider>
    </CoefficientStateContext.Provider>
  );
};
