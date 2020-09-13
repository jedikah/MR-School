import { useMutation } from "@apollo/client";

import { useLoginForm, UseLoginForm } from "./useLoginForm";
import { LoginData, LOGIN } from "./login.gql";
import { MutationLoginArgs } from "../../types";

export type UseLogin = UseLoginForm & {
  submitLogin: () => void;
  loginLoading: boolean;
};

export const useLogin = () => {
  const form = useLoginForm();
  const [login, { loading: loginLoading }] = useMutation<
    LoginData,
    MutationLoginArgs
  >(LOGIN);

  const submitLogin = () => {
    if (form.loginInput.contact !== "" && form.loginInput.motDePasse !== "") {
      login({
        variables: {
          input: form.loginInput,
        },
      });
    } else {
      // error
    }
  };

  return {
    ...form,
    submitLogin,
    loginLoading,
  };
};
