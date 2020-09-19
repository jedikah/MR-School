import * as React from "react";

import { LoginForm } from "./LoginForm";
import { useLogin } from "../../graphql/auth/login/login.service";

const LoginFormCtn: React.FC = () => {
  const loginFormProps = useLogin();
  return <LoginForm {...loginFormProps} />;
};

export default LoginFormCtn;
