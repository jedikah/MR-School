import { useImmer } from "use-immer";
import { QueryElevesArgs, PaginationInput } from "../../types";

export type UseElevesForm = {
  elevesVariables: QueryElevesArgs;
  changePaginationInput: (key: keyof PaginationInput, value: number) => void;
};

export const useElevesForm = (): UseElevesForm => {
  const [elevesVariables, setElevesVariables] = useImmer<QueryElevesArgs>({
    paginationInput: {
      page: 1,
      limit: 2,
    },
  });

  const changePaginationInput = (key: keyof PaginationInput, value: number) => {
    setElevesVariables((draft) => {
      draft.paginationInput[key] = value;
    });
  };

  return {
    elevesVariables,
    changePaginationInput,
  };
};
