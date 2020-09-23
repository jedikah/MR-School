import * as React from "react";
import { useImmer } from "use-immer";
import { InputMatriculeEleve, QueryEleveArgs } from "../../types";

export type UseOneEleve = {
  eleveInput: QueryEleveArgs;
  handelChangeMatricule: (
    key: keyof InputMatriculeEleve,
    value: string
  ) => void;
};

export const useOneEleve = (): UseOneEleve => {
  const [eleveInput, seteleveInput] = useImmer<QueryEleveArgs>({
    matriculeInput: {
      matricule: "",
    },
  });

  const handelChangeMatricule = (
    key: keyof InputMatriculeEleve,
    value: string
  ) => {
    seteleveInput((draft) => {
      draft.matriculeInput[key] = value;
    });
  };

  return {
    handelChangeMatricule,
    eleveInput,
  };
};

export const OneEleveContext = React.createContext<UseOneEleve | undefined>(
  undefined
);

export const OneEleveFormProvider: React.FC = ({ children }) => {
  const eleveForm = useOneEleve();
  return (
    <OneEleveContext.Provider value={eleveForm}>
      {children}
    </OneEleveContext.Provider>
  );
};
