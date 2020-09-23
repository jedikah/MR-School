import * as React from 'react';

import Eleves from '../../gestion-eleve/liste-eleve/Eleves';
import { useEleves } from '../../../../graphql/eleve/eleves/eleves.service';

export const ResponsableCtn: React.FC = () => {
  const elevesProps = useEleves();
  return <Eleves {...elevesProps} />;
};

export default ResponsableCtn;
