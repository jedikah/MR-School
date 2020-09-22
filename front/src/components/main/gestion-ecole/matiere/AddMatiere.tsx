import * as React from "react";

import MatiereForm, { MatiereFormProps } from "./MatiereForm";
import { useCreateMatiere } from "../../../../graphql/matiere/create-matiere/createMatiere.service";

const AddMatiere: React.FC = () => {
  const {
    createMatiereState,
    createMatiereDispatch,
    submitCreateMatiere,
    loadingCreateMatiere,
  } = useCreateMatiere();

  const matiereFormProps: MatiereFormProps = {
    loading: loadingCreateMatiere,
    onSubmit: submitCreateMatiere,
    value: createMatiereState.variables.designation,
    onChange: (value) => {
      createMatiereDispatch({ type: "HANDLE_CHANGE", value });
    },
  };

  return <MatiereForm {...matiereFormProps} />;
};

export default AddMatiere;
