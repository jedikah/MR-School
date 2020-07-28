export interface SessionState {
  connected: boolean;
}

export const CONNECT = 'CONNECT';

export interface ConnectAction {
  type: typeof CONNECT;
}

export type SessionActions = ConnectAction;
