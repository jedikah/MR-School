import * as React from "react";
import { useImmer } from "use-immer";
import {
  CreateEleveInput,
  EleveInput,
  ParentInput,
  UtilisateurInput,
} from "../../types";

export type CreateEleveInputKey = keyof CreateEleveInput;
export type EleveInputKey = keyof EleveInput;
export type ParentInputKey = keyof ParentInput;
export type UtilisateurInputKey = keyof UtilisateurInput;

export type UseCreateEleveForm = {
  creatEleveInput: CreateEleveInput;
  handleChangeCreatEleveForm: (
    key1: CreateEleveInputKey,
    key2: EleveInputKey | ParentInputKey | UtilisateurInputKey,
    value: string
  ) => void;
  _setCreatEleveFormError: (value: boolean) => void;
  createEleveFormError: boolean;
};

export const useCreateEleveForm = (): UseCreateEleveForm => {
  const [createEleveFormError, setCreateEleveFormError] = React.useState(false);
  const [creatEleveInput, setCreateEleveInput] = useImmer<CreateEleveInput>({
    eleve: {
      matricule: "",
      naissance: "",
      sexe: "",
    },
    parent: {
      adresse: "",
      contact: "",
      mere: "",
      pere: "",
      tuteur: "",
    },
    utilisateur: {
      nom: "",
      prenom: "",
      adresse: "",
      contact: "",
      photo: "",
      motDePasse: "",
    },
  });

  console.log(creatEleveInput);

  const _setCreatEleveFormError = (value: boolean) => {
    setCreateEleveFormError(value);
  };

  const handleChangeCreatEleveForm = (
    key1: CreateEleveInputKey,
    key2: EleveInputKey | ParentInputKey | UtilisateurInputKey,
    value: string
  ) => {
    setCreateEleveInput((draft) => {
      if (
        key1 === "eleve" &&
        (key2 === "naissance" || key2 === "sexe" || key2 === "matricule")
      ) {
        draft[key1][key2] = value;
      }
      if (
        key1 === "parent" &&
        (key2 === "adresse" ||
          key2 === "contact" ||
          key2 === "mere" ||
          key2 === "pere" ||
          key2 === "tuteur")
      ) {
        draft[key1][key2] = value;
      }
      if (
        key1 === "utilisateur" &&
        (key2 === "adresse" ||
          key2 === "contact" ||
          key2 === "motDePasse" ||
          key2 === "nom" ||
          key2 === "photo" ||
          key2 === "prenom")
      ) {
        draft[key1][key2] = value;
      }
    });
  };

  return {
    creatEleveInput,
    handleChangeCreatEleveForm,
    createEleveFormError,
    _setCreatEleveFormError,
  };
};
