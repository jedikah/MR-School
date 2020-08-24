import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "fontsource-roboto";

import { apolloClient } from "./graphql/apollo";

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <Button variant="contained" color="primary">
          Hello mr school
        </Button>
      </ApolloProvider>
    </Router>
  );
}

export default App;
