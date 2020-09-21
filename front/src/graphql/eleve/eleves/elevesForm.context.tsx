import * as React from "react";
import { useImmer } from "use-immer";
import {
  QueryElevesArgs,
  PaginationInput,
  ElevesFilterInput,
} from "../../types";

export type UseElevesForm = {
  elevesVariables: QueryElevesArgs;
  changePaginationInput: (key: keyof PaginationInput, value: number) => void;
  changeElevesFilterInput: (
    key: keyof ElevesFilterInput,
    value: string
  ) => void;
};

export const useElevesForm = (): UseElevesForm => {
  const [elevesVariables, setElevesVariables] = useImmer<QueryElevesArgs>({
    paginationInput: {
      page: 1,
      limit: 100,
    },
    elevesFilterInput: {
      matricule: "",
    },
  });

  const changePaginationInput = (key: keyof PaginationInput, value: number) => {
    setElevesVariables((draft) => {
      draft.paginationInput[key] = value;
    });
  };

  const changeElevesFilterInput = (
    key: keyof ElevesFilterInput,
    value: string
  ) => {
    setElevesVariables((draft) => {
      draft.elevesFilterInput[key] = value;
    });
  };

  return {
    elevesVariables,
    changePaginationInput,
    changeElevesFilterInput,
  };
};

export const ElevesFormContext = React.createContext<UseElevesForm | undefined>(
  undefined
);

export const ElevesFormProvider: React.FC = ({ children }) => {
  const elevesForm = useElevesForm();
  return (
    <ElevesFormContext.Provider value={elevesForm}>
      {children}
    </ElevesFormContext.Provider>
  );
};
