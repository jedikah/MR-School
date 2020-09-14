import * as React from "react";
import { useImmer } from "use-immer";

import { LoginInput } from "../../types";

export type UseLoginForm = {
  loginInput: LoginInput;
  handleChangeLoginForm: (key: keyof LoginInput, value: string) => void;
  _setLoginFormError: (value: boolean) => void;
  loginFormError: boolean;
};

export const useLoginForm = (): UseLoginForm => {
  const [loginFormError, setLoginFormError] = React.useState(false);
  const [loginInput, setLoginInput] = useImmer<LoginInput>({
    contact: "",
    motDePasse: "",
  });

  const _setLoginFormError = (value: boolean) => {
    setLoginFormError(value);
  };

  const handleChangeLoginForm = (key: keyof LoginInput, value: string) => {
    setLoginInput((draft) => {
      draft[key] = value;
    });
  };

  return {
    loginInput,
    handleChangeLoginForm,
    loginFormError,
    _setLoginFormError,
  };
};
