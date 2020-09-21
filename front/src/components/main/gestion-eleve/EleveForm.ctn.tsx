import * as React from "react";

import { EleveForm } from "./EleveForm";
import { useCreatEleve } from "../../../graphql/eleve/create-eleve/create-user.service";

const CreatEleveCtn: React.FC = () => {
  const creatEleveForm = useCreatEleve();
  return <EleveForm {...creatEleveForm} />;
};

export default CreatEleveCtn;
