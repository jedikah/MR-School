import * as React from "react";

import SearchEleves from "./SearchEleves";
import { useEleves } from "../../../../graphql/eleve/eleves/eleves.service";

const SearchElevesCtn: React.FC = () => {
  const searchElevesProps = useEleves();

  return <SearchEleves {...searchElevesProps} />;
};

export default SearchElevesCtn;
