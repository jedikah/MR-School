import * as React from "react";

import { SessionState } from "../contexts/session/session.context";
import {
  useSessionState,
  useSessionDispatch,
} from "../contexts/session/session.consumer";
import { env } from "../configs";

export const useCheckToken = (): SessionState => {
  const sessionState = useSessionState();
  const sessionDispatch = useSessionDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem(env.TOKEN_NAME);
    if (token) {
      sessionDispatch({ type: "CONNECT" });
    }
    sessionDispatch({ type: "APP_READY" });
  }, [sessionDispatch]);

  return sessionState;
};
