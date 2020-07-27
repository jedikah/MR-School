import { ConnectAction, CONNECT } from "./types";

export function connect(): ConnectAction {
  return {
    type: CONNECT,
  };
}
