import * as React from "react";

import MatiereForm, { MatiereFormProps } from "./MatiereForm";
import { useCreateMatiere } from "../../../../../graphql/matiere/create-matiere/createMatiere.service";

const AddMatiere: React.FC = () => {
  const {
    matiereDispatch,
    matiereState,
    submitCreateMatiere,
    loadingCreateMatiere,
  } = useCreateMatiere();

  const matiereFormProps: MatiereFormProps = {
    error: matiereState.createMatiereFormError,
    title: "Ajouter une matiere",
    submitBtnLabel: "Ajouter",
    loading: loadingCreateMatiere,
    onSubmit: submitCreateMatiere,
    value: matiereState.createMatiereVariables.designation,
    onChange: (value) => {
      matiereDispatch({
        type: "HANDLE_CHANGE_CREATE_MATIERE_VARIABLES",
        value,
      });
    },
  };

  return <MatiereForm {...matiereFormProps} />;
};

export default AddMatiere;
