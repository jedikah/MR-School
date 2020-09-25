import {
  useCoefficientState,
  useCoefficientDispatch,
} from "../coefficient.consumer";
import { CoefficientState, CoefficientDispatch } from "../coefficient.context";
import { useMatiereState } from "../../matiere/matiere.consumer";
import { useMutation, useApolloClient } from "@apollo/client";
import { SetCoefficientsData, SET_COEFFICIENTS } from "./setCoefficients.gql";
import { MutationSetCoefficientsArgs } from "../../types";
import { MatieresData, MATIERES } from "../../matiere/matieres/matieres.gql";
import produce from "immer";

export interface UseSetCoefficient {
  coefficientState: CoefficientState;
  coefficientDispatch: CoefficientDispatch;
  loadingSetCoefficients: boolean;
  submitSetCoefficients: () => void;
}

export const useSetCoefficient = (): UseSetCoefficient => {
  const apollo = useApolloClient();
  const matiereState = useMatiereState();
  const coefficientState = useCoefficientState();
  const coefficientDispatch = useCoefficientDispatch();

  const [setCoefficients, { loading: loadingSetCoefficients }] = useMutation<
    SetCoefficientsData,
    MutationSetCoefficientsArgs
  >(SET_COEFFICIENTS, {
    onCompleted(data) {
      data.setCoefficients.coefficientTable.forEach((coe) => {
        console.log(coe.status);
      });
      coefficientDispatch({ type: "CLEAR_SELECT_CLASSE_COEFFICIENT" });
      const prevMatieres = apollo.cache.readQuery<MatieresData>({
        query: MATIERES,
      });
      if (prevMatieres) {
        apollo.cache.writeQuery<MatieresData>({
          query: MATIERES,
          data: produce(prevMatieres, (draft) => {
            draft.matieres.forEach((m) => {
              if (parseInt(m.id) === data.setCoefficients.matiereId) {
                m.coefficientTable = data.setCoefficients.coefficientTable;
              }
            });
          }),
        });
      }
    },
  });

  const submitSetCoefficients = () => {
    const variables: MutationSetCoefficientsArgs = {
      idCoefficient: {
        idMatiere: matiereState.updateMatiereVariables.updateMatiereInput.id,
        idClasses: coefficientState.coefficientSelectedClasses.map((c) => c),
      },
    };
    setCoefficients({ variables });
  };

  return {
    coefficientState,
    coefficientDispatch,
    loadingSetCoefficients,
    submitSetCoefficients,
  };
};
