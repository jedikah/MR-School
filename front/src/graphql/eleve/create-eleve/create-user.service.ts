import { MutationUpdaterFn, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { MutationCreateEleveArgs } from "../../types";
import { ELEVES, ElevesData } from "../eleves/eleves.gql";
import { CreatEleveData, CREATE_ELEVE } from "./creat-eleve.gql";
import { UseCreateEleveForm, useCreateEleveForm } from "./createEleveForm";

export type UseCreatEleve = UseCreateEleveForm & {
  submitEleve: () => void;
  eleveLoading: boolean;
};

const updateCache: MutationUpdaterFn<CreatEleveData> = (cache, { data }) => {
  const existingEleves = cache.readQuery<ElevesData>({
    query: ELEVES,
  });
  const newEleve = data;
  if (existingEleves && newEleve) {
    cache.writeQuery({
      query: ELEVES,
      data: {
        eleves: [newEleve, ...existingEleves.eleves.eleves],
      },
    });
  }
};

export const useCreatEleve = () => {
  const { enqueueSnackbar } = useSnackbar();
  const form = useCreateEleveForm();
  const [createEleve, { loading: eleveLoading }] = useMutation<
    CreatEleveData,
    MutationCreateEleveArgs
  >(CREATE_ELEVE, {
    onCompleted: (data) => {
      form.cleanInputCreatEleve();
      enqueueSnackbar(
        `votre mot de passe est ${data.createEleve.utilisateur.motDePasse}`,
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        }
      );
    },
    update: updateCache,
    onError: (error) => {
      console.log(error);
      form.cleanInputCreatEleve();
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
      form.creatEleveInput.eleve.sexe !== "" &&
      form.creatEleveInput.eleve.naissance !== "" &&
      form.creatEleveInput.eleve.matricule !== "" &&
      form.creatEleveInput.utilisateur.nom !== "" &&
      form.creatEleveInput.utilisateur.prenom !== "" &&
      form.creatEleveInput.utilisateur.contact !== "" &&
      form.creatEleveInput.utilisateur.adresse !== "" &&
      form.creatEleveInput.parent.contact !== "" &&
      form.creatEleveInput.parent.adresse !== "" &&
      form.creatEleveInput.parent.pere !== "" &&
      form.creatEleveInput.parent.mere !== "" &&
      form.creatEleveInput.parent.tuteur !== ""
    ) {
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
