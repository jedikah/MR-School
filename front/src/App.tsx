import React from "react";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import "fontsource-roboto";
import "hover.css/css/hover-min.css";

import { ContextProvider } from "./contexts";
import { apolloClient } from "./graphql/apollo";
import RootNavigation from "./navigations/RootNavigation";

function App() {
  return (
    <ContextProvider>
      <ApolloProvider client={apolloClient}>
        <SnackbarProvider maxSnack={1}>
          <RootNavigation />
        </SnackbarProvider>
      </ApolloProvider>
    </ContextProvider>
  );
}

export default App;
