import * as React from "react";
import logger from "use-reducer-logger";
import produce, { Draft } from "immer";

// Actions

interface ConnectAction {
  type: "CONNECT";
}

interface DisconnectAction {
  type: "DISCONNECT";
}

interface SetAppReadyAction {
  type: "APP_READY";
}

type SessionActions = ConnectAction | DisconnectAction | SetAppReadyAction;
export type SessionDispatch = (action: SessionActions) => void;

// Context

export interface SessionState {
  connected: boolean;
  appReady: boolean;
}

const initialState: SessionState = {
  connected: false,
  appReady: false,
};

const sessionReducer = produce(
  (draft: Draft<SessionState>, action: SessionActions) => {
    switch (action.type) {
      case "CONNECT":
        draft.connected = true;
        break;

      case "DISCONNECT":
        draft.connected = false;
        break;

      case "APP_READY":
        draft.appReady = true;
        break;
    }
  }
);

export const SessionStateContext = React.createContext<
  SessionState | undefined
>(undefined);
export const SessionDispatchContext = React.createContext<
  SessionDispatch | undefined
>(undefined);

export const SessionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    logger(sessionReducer),
    initialState
  );

  return (
    <SessionStateContext.Provider value={state}>
      <SessionDispatchContext.Provider value={dispatch}>
        {children}
      </SessionDispatchContext.Provider>
    </SessionStateContext.Provider>
  );
};
