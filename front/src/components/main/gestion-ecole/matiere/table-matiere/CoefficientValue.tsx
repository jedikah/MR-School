import * as React from "react";
import { InputBase, CircularProgress } from "@material-ui/core";
import useSetCoefficientValue from "../../../../../graphql/coefficient/set-coefficient-value/setCoefficientValue.service";

export interface CoefficientValueProps {
  classeId: number;
  value: number;
  disabled: boolean;
}

const CoefficientValue: React.FC<CoefficientValueProps> = ({
  classeId,
  value,
  disabled,
}) => {
  const {
    coefficientValue,
    handleChangeCoefficientInput,
    loadingCoefficientValue,
    submitSetCoefficientValue,
  } = useSetCoefficientValue(classeId, value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitSetCoefficientValue();
  };
  console.log(disabled);
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBase
        disabled={!disabled}
        style={{
          maxHeight: 25,
          maxWidth: 50,
          color: "grey",
          fontWeight: "bold",
        }}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        value={parseInt(String(coefficientValue), 10)}
        placeholder="valeur"
        type="number"
        margin="dense"
        onChange={(e) => {
          const { value } = e.target;
          handleChangeCoefficientInput(Number(value));
        }}
      />
      {loadingCoefficientValue && (
        <CircularProgress
          style={{
            height: 20,
            width: 20,
            margin: 0,
            padding: 0,
            marginLeft: 5,
            marginBottom: 5,
          }}
        />
      )}
    </form>
  );
};

export default CoefficientValue;
