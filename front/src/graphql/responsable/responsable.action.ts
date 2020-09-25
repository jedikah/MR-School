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

export interface HandleChangeGetResponsables {
  type: 'HANDLE_CHANGE_GET_RESPONSABLES';
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
  | SetFormErrorAction
  | HandleChangeGetResponsables;

export type ResponsableDispatch = (action: ResponsableAction) => void;
