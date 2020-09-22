import * as React from "react";

import MatiereForm, { MatiereFormProps } from "./MatiereForm";

const UpdateMatiere: React.FC = () => {
  const matiereFormProps: MatiereFormProps = {
    title: "Modifier la matiere",
    submitBtnLabel: "Modifier",
    loading: false,
    onSubmit: () => {
      //
    },
    value: "",
    onChange: () => {
      //
    },
  };

  return <MatiereForm {...matiereFormProps} />;
};

export default UpdateMatiere;
