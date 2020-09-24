import * as React from "react";

import UpdateMatiere from "./UpdateMatiere";
import AddMatiere from "./AddMatiere";

export interface FormMatiereProps {
  mode: boolean;
}

const FormMatiere: React.FC<FormMatiereProps> = ({ mode }) => {
  return mode ? <UpdateMatiere /> : <AddMatiere />;
};

export default FormMatiere;
