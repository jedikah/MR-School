import React from 'react';
import produce, { Draft } from 'immer';

import { CreateResponsableInput, ResponsablesFilterInput } from '../types';
import { ResponsableAction, ResponsableDispatch } from './responsable.action';

export interface ResponsableState {
  createResponsable: CreateResponsableInput;
  createResponsableFormError: boolean;
  responsableFilter: ResponsablesFilterInput;
}

const initialState: ResponsableState = {
  createResponsable: {
    fonction: { designation: 'admin' },
    utilisateur: {
      nom: 'nom 1',
      prenom: 'prenom 1',
      adresse: 'adresse 1',
      contact: 'contact 1',
      photo: ''
    }
  },
  createResponsableFormError: false,
  responsableFilter: {
    contact: ''
  }
};

const responsableReducer = produce(
  (draft: Draft<ResponsableState>, action: ResponsableAction) => {
    switch (action.type) {
      case 'HANDLE_CHANGE_CREATE_RESPONSABLE':
        if (action.key1 === 'fonction' && action.key2 === 'designation')
          draft.createResponsable[action.key1][action.key2] = action.value;

        if (
          action.key1 === 'utilisateur' &&
          (action.key2 === 'adresse' ||
            action.key2 === 'contact' ||
            action.key2 === 'nom' ||
            action.key2 === 'photo' ||
            action.key2 === 'prenom')
        )
          draft.createResponsable[action.key1][action.key2] = action.value;
        break;

      case 'SET_FORM_ERROR':
        if (action.key === 'createResponsableFormError')
          draft[action.key] = action.value;
        break;

      case 'HANDLE_CHANGE_GET_RESPONSABLES':
        draft.responsableFilter.contact = action.value;
        break;
    }
  }
);

export const ResponsableDispatchContext = React.createContext<
  ResponsableDispatch | undefined
>(undefined);
export const ResponsableStateContext = React.createContext<
  ResponsableState | undefined
>(undefined);

export const ResponsableProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(responsableReducer, initialState);

  return (
    <ResponsableStateContext.Provider value={state}>
      <ResponsableDispatchContext.Provider value={dispatch}>
        {children}
      </ResponsableDispatchContext.Provider>
    </ResponsableStateContext.Provider>
  );
};
