import { useImmer } from "use-immer";

import { LoginInput } from "../../types";

export type UseLoginForm = {
  loginInput: LoginInput;
  handleChangeLoginForm: (key: keyof LoginInput, value: string) => void;
};

export const useLoginForm = (): UseLoginForm => {
  const [loginInput, setLoginInput] = useImmer<LoginInput>({
    contact: "",
    motDePasse: "",
  });

  const handleChangeLoginForm = (key: keyof LoginInput, value: string) => {
    setLoginInput((draft) => {
      draft[key] = value;
    });
  };

  return {
    loginInput,
    handleChangeLoginForm,
  };
};
