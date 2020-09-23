import {
  CreateResponsableInput,
  CreateUtilisateurInput_Responsable,
  FonctionInput
} from '../types';

export interface HandleChangeCreateResponsable {
  type: 'HANDLE_CHANGE_CREATE_RESPONSABLE';
  key1: keyof CreateResponsableInput;
  key2: keyof CreateUtilisateurInput_Responsable | keyof FonctionInput;
  value: string;
}

export interface HandleChangeUpdateResponsable {
  type: 'HANDLE_CHANGE_UPDATE_RESPONSABLE';
  value: string;
}

export interface SetFormErrorAction {
  type: 'SET_FORM_ERROR';
  key: 'createResponsableFormError';
  value: boolean;
}

export type ResponsableAction =
  | HandleChangeCreateResponsable
  | HandleChangeUpdateResponsable
  | SetFormErrorAction;

export type ResponsableDispatch = (action: ResponsableAction) => void;
