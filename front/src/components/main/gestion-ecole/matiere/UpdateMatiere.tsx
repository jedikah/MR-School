import * as React from "react";

import MatiereForm, { MatiereFormProps } from "./MatiereForm";
import { useUpdateMatiere } from "../../../../graphql/matiere/update-matiere/updateMatiere.service";

const UpdateMatiere: React.FC = () => {
  const {
    matiereState,
    matiereDispatch,
    loadingUpdateMatiere,
    submitUpdateMatiere,
  } = useUpdateMatiere();

  const matiereFormProps: MatiereFormProps = {
    title: "Modifier la matiere",
    submitBtnLabel: "Modifier",
    loading: loadingUpdateMatiere,
    onSubmit: () => {
      submitUpdateMatiere();
    },
    value: matiereState.updateMatiereVariables.updateMatiereInput.designation,
    onChange: (value) => {
      matiereDispatch({
        type: "HANDLE_CHANGE_UPDATE_MATIERE_VARIABLES",
        value,
      });
    },
  };

  return <MatiereForm {...matiereFormProps} />;
};

export default UpdateMatiere;
