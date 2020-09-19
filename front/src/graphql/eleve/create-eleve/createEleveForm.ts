import * as React from "react";
import { useImmer } from "use-immer";

import {
  CreateEleveInput,
  EleveInput,
  ParentInput,
  CreateUtilisateurInput_Eleve,
} from "../../types";
import { dateToString } from "../../../utils/dateUtils";

export type CreateEleveInputKey = keyof CreateEleveInput;
export type EleveInputKey = keyof EleveInput;
export type ParentInputKey = keyof ParentInput;
export type UtilisateurInputKey = keyof CreateUtilisateurInput_Eleve;

export type UseCreateEleveForm = {
  creatEleveInput: CreateEleveInput;
  createEleveFormError: boolean;
  _setCreatEleveFormError: (value: boolean) => void;
  handleChangeCreatEleveForm: (
    key1: CreateEleveInputKey,
    key2: EleveInputKey | ParentInputKey | UtilisateurInputKey,
    value: string
  ) => void;
  cleanInputCreatEleve: () => void;
};

const CREATE_ELEVE_INPUT: CreateEleveInput = {
  eleve: {
    matricule: "",
    naissance: "",
    sexe: "g",
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
  },
};

export const useCreateEleveForm = (): UseCreateEleveForm => {
  const [createEleveFormError, setCreateEleveFormError] = React.useState(false);
  const [creatEleveInput, setCreateEleveInput] = useImmer<CreateEleveInput>({
    ...CREATE_ELEVE_INPUT,
    eleve: {
      ...CREATE_ELEVE_INPUT.eleve,
      naissance: dateToString(new Date()),
    },
  });

  const _setCreatEleveFormError = (value: boolean) => {
    setCreateEleveFormError(value);
  };

  const cleanInputCreatEleve = () => {
    setCreateEleveInput((draft) => {
      Object.assign(draft, CREATE_ELEVE_INPUT);
    });
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
          key2 === "nom" ||
          key2 === "contact" ||
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
    cleanInputCreatEleve,
    _setCreatEleveFormError,
  };
};
