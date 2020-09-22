import * as React from "react";

import MatiereForm, { MatiereFormProps } from "./MatiereForm";
import { useCreateMatiere } from "../../../../graphql/matiere/create-matiere/createMatiere.service";

const AddMatiere: React.FC = () => {
  const {
    matiereDispatch,
    matiereState,
    submitCreateMatiere,
    loadingCreateMatiere,
  } = useCreateMatiere();

  const matiereFormProps: MatiereFormProps = {
    title: "Ajouter une matiere",
    submitBtnLabel: "Enregistrer",
    loading: loadingCreateMatiere,
    onSubmit: submitCreateMatiere,
    value: matiereState.createMatiereVariables.designation,
    onChange: (value) => {
      matiereDispatch({ type: "HANDLE_CHANGE", value });
    },
  };

  return <MatiereForm {...matiereFormProps} />;
};

export default AddMatiere;
