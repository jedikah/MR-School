import * as React from 'react';

import { ResponsableForm, ResponsableFormProps } from './ResponsableForm';
import { useCreateResponsable } from '../../../graphql/responsable/create-responsable/create-responsable.service';

const CreatResponsableCtn: React.FC = () => {
  const {
    responsableDispatch,
    responsableState,
    responsableLoading,
    submitResponsable
  } = useCreateResponsable();
  const creatResponsableForm: ResponsableFormProps = {
    error: responsableState.createResponsableFormError,
    title: 'Ajouter un responsable',
    submitBtnLabel: 'Ajouter',
    loading: responsableLoading,
    onSubmit: submitResponsable,
    value: responsableState.createResponsable,
    onChange: ({ key1, key2, value }) => {
      responsableDispatch({
        type: 'HANDLE_CHANGE_CREATE_RESPONSABLE',
        key1,
        key2,
        value
      });
    }
  };
  return <ResponsableForm {...creatResponsableForm} />;
};

export default CreatResponsableCtn;
