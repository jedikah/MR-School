import { useQuery } from '@apollo/client';

import { ResponsableData, RESPONSABLES } from './responsables.gql';
import {
  useResponsableDispatch,
  useResponsableState
} from '../responsable.consumer';
import { ResponsableDispatch } from '../responsable.action';
import { ResponsableState } from '../responsable.context';
import { QueryResponsablesArgs } from '../../types';

export interface UseResponsable {
  responsableData: ResponsableData | undefined;
  loadingResponsable: boolean;
  responsableState: ResponsableState;
  responsableDispatch: ResponsableDispatch;
}

export const useResponsables = (): UseResponsable => {
  const responsableState = useResponsableState();
  const responsableDispatch = useResponsableDispatch();

  const { data, loading: loadingResponsable } = useQuery<
    ResponsableData,
    QueryResponsablesArgs
  >(RESPONSABLES, {
    variables: {
      responsablesFilterInput: responsableState.responsableFilter
    }
  });

  return {
    responsableData: data,
    loadingResponsable,
    responsableState,
    responsableDispatch
  };
};
