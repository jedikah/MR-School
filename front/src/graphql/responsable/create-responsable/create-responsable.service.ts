import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

import { MutationCreateResponsableArgs } from '../../types';
import {
  CreatResponsableData,
  CREATE_RESPONSABLE
} from './createResponsable.gql';
import {
  useResponsableState,
  useResponsableDispatch
} from '../responsable.consumer';
import { ResponsableState } from '../responsable.context';
import { ResponsableDispatch } from '../responsable.action';

export interface UseCreatResponsable {
  responsableState: ResponsableState;
  responsableDispatch: ResponsableDispatch;
  submitResponsable: () => void;
  responsableLoading: boolean;
}

export const useCreateResponsable = (): UseCreatResponsable => {
  const { enqueueSnackbar } = useSnackbar();

  const responsableState = useResponsableState();
  const responsableDispatch = useResponsableDispatch();

  const [createResponsable, { loading: responsableLoading }] = useMutation<
    CreatResponsableData,
    MutationCreateResponsableArgs
  >(CREATE_RESPONSABLE, {
    onCompleted: (data) => {
      console.log('ok okok');
      console.log(data.createResponsable.__typename);
      enqueueSnackbar(
        `votre mot de passe est ${data.createResponsable.utilisateur.motDePasse}`,
        {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        }
      );
    },
    onError: (error) => {
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      });
    }
  });

  const submitResponsable = (): void => {
    const utilisateur = responsableState.createResponsable.utilisateur;
    const fonction = responsableState.createResponsable.fonction;
    const variables = { input: { utilisateur, fonction } };
    if (
      fonction.designation !== '' ||
      utilisateur.adresse !== '' ||
      utilisateur.contact !== '' ||
      utilisateur.nom !== '' ||
      utilisateur.prenom !== ''
    ) {
      createResponsable({ variables });
    } else {
      responsableDispatch({
        type: 'SET_FORM_ERROR',
        key: 'createResponsableFormError',
        value: true
      });
    }
  };

  return {
    responsableState,
    responsableDispatch,
    submitResponsable,
    responsableLoading
  };
};
