import * as React from "react";

import Eleves from "./Eleves";
import { useEleves } from "../../../../graphql/eleve/eleves/eleves.service";

export const ElevesCtn: React.FC = () => {
  const elevesProps = useEleves();
  return <Eleves {...elevesProps} />;
};

export default ElevesCtn;
