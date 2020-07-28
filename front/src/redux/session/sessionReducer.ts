import produce, { Draft } from 'immer';

import { SessionState, SessionActions, CONNECT } from './types';

const initialState: SessionState = {
  connected: false,
};

export const sessionReducer = produce((draft: Draft<SessionState>, action: SessionActions) => {
  switch (action.type) {
    case CONNECT:
      draft.connected = true;
      break;
  }
}, initialState);
