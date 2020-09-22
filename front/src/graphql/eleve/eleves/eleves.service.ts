import { ELEVES, ElevesData } from "./eleves.gql";
import { useQuery } from "@apollo/client";
import { QueryElevesArgs } from "../../types";
import { UseElevesForm } from "./elevesForm.context";
import { useElevesFormCtx } from "./elevesForm.consumer";

export type UseEleves = UseElevesForm & {
  elevesData: ElevesData | undefined;
  elevesLoading: boolean;
};

export const useEleves = (): UseEleves => {
  const elevesForm = useElevesFormCtx();
  const { data: elevesData, loading: elevesLoading } = useQuery<
    ElevesData,
    QueryElevesArgs
  >(ELEVES, {
    variables: elevesForm.elevesVariables,
  });

  return {
    ...elevesForm,
    elevesData,
    elevesLoading,
  };
};
