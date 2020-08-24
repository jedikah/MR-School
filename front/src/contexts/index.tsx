import * as React from "react";

import { SessionProvider } from "./session/session.context";

export const ContextProvider: React.FC<any> = ({ children }) => {
  return [SessionProvider].reduce((acc, Ctx) => {
    return <Ctx>{acc}</Ctx>;
  }, children);
};
