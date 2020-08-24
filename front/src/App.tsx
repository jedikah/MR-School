import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "fontsource-roboto";

import { ContextProvider } from "./contexts";
import { apolloClient } from "./graphql/apollo";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Router>
      <ContextProvider>
        <ApolloProvider client={apolloClient}>
          <Route path="/login">
            <LoginPage />
          </Route>
        </ApolloProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
