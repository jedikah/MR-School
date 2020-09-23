import * as React from 'react';

import SearchResponsables from './SearchResponsable';
import { useEleves } from '../../../../graphql/eleve/eleves/eleves.service';

const SearchResponsablesCtn: React.FC = () => {
  const searchResponsableProps = useEleves();

  return <SearchResponsables {...searchResponsableProps} />;
};

export default SearchResponsablesCtn;
