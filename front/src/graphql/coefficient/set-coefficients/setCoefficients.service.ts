import {
  useCoefficientState,
  useCoefficientDispatch,
} from "../coefficient.consumer";
import { CoefficientState, CoefficientDispatch } from "../coefficient.context";

export interface UseSetCoefficient {
  coefficientState: CoefficientState;
  coefficientDispatch: CoefficientDispatch;
}

export const useSetCoefficient = (): UseSetCoefficient => {
  const coefficientState = useCoefficientState();
  const coefficientDispatch = useCoefficientDispatch();

  return {
    coefficientState,
    coefficientDispatch,
  };
};
