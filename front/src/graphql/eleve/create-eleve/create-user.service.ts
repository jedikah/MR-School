import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { MutationCreateEleveArgs } from "../../types";
import { CreatEleveData, CREATE_ELEVE } from "./creat-eleve.gql";
import { UseCreateEleveForm, useCreateEleveForm } from "./createEleveForm";

export type UseCreatEleve = UseCreateEleveForm & {
  submitEleve: () => void;
  eleveLoading: boolean;
};

export const handleOnCompletedCreatEleve = (data: CreatEleveData) => {
  return data.createEleve.utilisateur.motDePasse;
};

export const useCreatEleve = () => {
  const { enqueueSnackbar } = useSnackbar();
  const form = useCreateEleveForm();
  const [createEleve, { loading: eleveLoading }] = useMutation<
    CreatEleveData,
    MutationCreateEleveArgs
  >(CREATE_ELEVE, {
    onCompleted: (data) => {
      handleOnCompletedCreatEleve(data);
    },
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
      form.creatEleveInput.eleve.naissance !== "" &&
      form.creatEleveInput.eleve.matricule !== "" &&
      form.creatEleveInput.utilisateur.nom !== "" &&
      form.creatEleveInput.utilisateur.prenom !== "" &&
      form.creatEleveInput.parent.contact !== "" &&
      form.creatEleveInput.parent.adresse !== "" &&
      form.creatEleveInput.parent.pere !== "" &&
      form.creatEleveInput.parent.mere !== "" &&
      form.creatEleveInput.utilisateur.adresse !== "" &&
      form.creatEleveInput.utilisateur.contact !== ""
    ) {
      console.log(
        "de service creat eleve sex: ",
        form.creatEleveInput.eleve.sexe,
        "de service creat eleve naissance: ",
        form.creatEleveInput.eleve.naissance
      );
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
    handleOnCompletedCreatEleve,
    eleveLoading,
  };
};
