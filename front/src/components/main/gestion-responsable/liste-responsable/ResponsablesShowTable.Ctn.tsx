import * as React from 'react';

import ResponsablesShowTable from './ResponsablesShowTable';
import { useResponsables } from '../../../../graphql/responsable/responsables/responsables.service';

export const ResponsablesShowTableCtn: React.FC = () => {
  const { responsableData, loadingResponsable } = useResponsables();

  return (
    <ResponsablesShowTable
      loadingResponsable={loadingResponsable}
      responsableData={responsableData}
    />
  );
};

export default ResponsablesShowTableCtn;
