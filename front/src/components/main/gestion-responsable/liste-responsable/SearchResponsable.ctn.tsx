import * as React from 'react';

import SearchResponsables from './SearchResponsable';
import { useResponsables } from '../../../../graphql/responsable/responsables/responsables.service';

const SearchResponsablesCtn: React.FC = () => {
  const { responsableState, responsableDispatch } = useResponsables();

  return <SearchResponsables {...{ responsableState, responsableDispatch }} />;
};

export default SearchResponsablesCtn;
