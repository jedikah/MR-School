import * as React from "react";
import { useImmer } from "use-immer";
import {
  CreateEleveInput,
  EleveInput,
  ParentInput,
  CreateUtilisateurInput_Eleve,
} from "../../types";

export type CreateEleveInputKey = keyof CreateEleveInput;
export type EleveInputKey = keyof EleveInput;
export type ParentInputKey = keyof ParentInput;
export type UtilisateurInputKey = keyof CreateUtilisateurInput_Eleve;

export type UseCreateEleveForm = {
  creatEleveInput: CreateEleveInput;
  handleSexeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCreatEleveForm: (
    key1: CreateEleveInputKey,
    key2: EleveInputKey | ParentInputKey | UtilisateurInputKey,
    value: string
  ) => void;
  _setCreatEleveFormError: (value: boolean) => void;
  handleDateChange: (date: Date | null) => void;
  createEleveFormError: boolean;
  sexe: string;
  selectedDate: Date | null;
};

export const useCreateEleveForm = (): UseCreateEleveForm => {
  const [createEleveFormError, setCreateEleveFormError] = React.useState(false);

  const [sexe, setSexe] = React.useState("garçon");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

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
    },
  });
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
          key2 === "nom" ||
          key2 === "contact" ||
          key2 === "photo" ||
          key2 === "prenom")
      ) {
        draft[key1][key2] = value;
      }
    });
  };

  const handleSexeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSexe((e.target as HTMLInputElement).value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return {
    creatEleveInput,
    sexe,
    selectedDate,
    handleChangeCreatEleveForm,
    handleSexeChange,
    createEleveFormError,
    handleDateChange,
    _setCreatEleveFormError,
  };
};
