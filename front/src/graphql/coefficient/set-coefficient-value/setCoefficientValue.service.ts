import * as React from "react";
import { useMutation } from "@apollo/client";
import {
  SetCoefficientValueData,
  SET_COEFFICIENT_VALUE,
} from "./setCoefficientValue.gql";
import { useSnackbar } from "notistack";

import { MutationSetCoefficientValueArgs } from "../../types";
import { useMatiereState } from "../../matiere/matiere.consumer";

const useSetCoefficientValue = (classeId: number, initialValue: number) => {
  const { enqueueSnackbar } = useSnackbar();
  const matiereState = useMatiereState();
  const [value, setValue] = React.useState(initialValue);

  const [
    setCoefficientValue,
    { loading: loadingCoefficientValue },
  ] = useMutation<SetCoefficientValueData, MutationSetCoefficientValueArgs>(
    SET_COEFFICIENT_VALUE,
    {
      onCompleted: (data) => {
        enqueueSnackbar(`Affectation reussite`, {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      },
    }
  );

  const handleChangeCoefficientInput = (value: number) => {
    setValue(value);
  };

  const submitSetCoefficientValue = () => {
    const matiereId = matiereState.updateMatiereVariables.updateMatiereInput.id;
    if (matiereId && classeId) {
      setCoefficientValue({
        variables: {
          coefficientInput: {
            classeId,
            matiereId,
            value,
          },
        },
      });
    }
  };

  return {
    submitSetCoefficientValue,
    loadingCoefficientValue,
    handleChangeCoefficientInput,
    coefficientValue: value,
  };
};

export default useSetCoefficientValue;
