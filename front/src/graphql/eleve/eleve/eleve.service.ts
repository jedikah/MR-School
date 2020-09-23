import { useQuery } from "@apollo/client";
import { QueryEleveArgs } from "../../types";
import { ELEVE, EleveData } from "./eleve.gql";
import { useOneEleveFormCtx } from "./eleveForm.cosumer";
import { UseOneEleve } from "./eleveFormContext";

export type UseEleves = UseOneEleve & {
  eleveData: EleveData | undefined;
  elevesLoading: boolean;
};

export const useOneEleve = () => {
  const eleveForm = useOneEleveFormCtx();
  const { data: eleveData, loading: elevesLoading } = useQuery<
    EleveData,
    QueryEleveArgs
  >(ELEVE, {
    variables: eleveForm.eleveInput,
  });

  return {
    ...eleveForm,
    eleveData,
    elevesLoading,
  };
};
