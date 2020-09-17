import * as React from "react";

import {
  SessionStateContext,
  SessionDispatchContext,
  SessionState,
  SessionDispatch,
} from "./session.context";

export const useSessionState = (): SessionState => {
  const context = React.useContext(SessionStateContext);
  if (context === undefined) {
    throw new Error("userSessionState must be used within a SessionProvider");
  }
  return context;
};

export const useSessionDispatch = (): SessionDispatch => {
  const context = React.useContext(SessionDispatchContext);
  if (context === undefined) {
    throw new Error("useSessionDispatch must be used within a SessionProvider");
  }
  return context;
};
