import * as React from "react";
import { Button } from "@material-ui/core";

import {
  useSessionState,
  useSessionDispatch,
} from "../contexts/session/session.consumer";

const LoginPage: React.FC = () => {
  const session = useSessionState();
  const sessionDispatch = useSessionDispatch();

  return (
    <div>
      <Button
        color="primary"
        onClick={() => sessionDispatch({ type: "CONNECT" })}
      >
        on
      </Button>
      <Button
        color="secondary"
        onClick={() => sessionDispatch({ type: "DISCONNECT" })}
      >
        off
      </Button>
      {session.connected ? "connected" : "not connected"}
    </div>
  );
};

export default LoginPage;
