import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { MutationCreateEleveArgs } from "../../types";
import { CreatEleveData, CREATE_ELEVE } from "./creat-eleve";
import { UseCreateEleveForm, useCreateEleveForm } from "./createEleveForm";

export type UseCreatEleve = UseCreateEleveForm & {
  submitEleve: () => void;
  eleveLoading: boolean;
};

export const useCreatEleve = () => {
  const { enqueueSnackbar } = useSnackbar();
  const form = useCreateEleveForm();
  const [createEleve, { loading: eleveLoading }] = useMutation<
    CreatEleveData,
    MutationCreateEleveArgs
  >(CREATE_ELEVE, {
    onError: (error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    },
  });

  const submitEleve = () => {
    if (
      form.creatEleveInput.eleve.matricule !== "" ||
      form.creatEleveInput.eleve.naissance !== "" ||
      form.creatEleveInput.eleve.sexe !== "" ||
      form.creatEleveInput.parent.adresse !== "" ||
      form.creatEleveInput.parent.contact !== "" ||
      form.creatEleveInput.parent.mere !== "" ||
      form.creatEleveInput.parent.pere !== "" ||
      form.creatEleveInput.parent.tuteur !== "" ||
      form.creatEleveInput.utilisateur.adresse !== "" ||
      form.creatEleveInput.utilisateur.prenom !== "" ||
      form.creatEleveInput.utilisateur.photo !== "" ||
      form.creatEleveInput.utilisateur.nom !== "" ||
      form.creatEleveInput.utilisateur.motDePasse !== "" ||
      form.creatEleveInput.utilisateur.contact !== ""
    ) {
      console.log(form.creatEleveInput.eleve.sexe);
      createEleve({
        variables: {
          input: form.creatEleveInput,
        },
      });
    } else {
      form._setCreatEleveFormError(true);
    }
  };
  return {
    ...form,
    submitEleve,
    eleveLoading,
  };
};
