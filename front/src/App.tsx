import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "fontsource-roboto";

import { ContextProvider } from "./contexts";
import { apolloClient } from "./graphql/apollo";

import LoginPage from "./pages/Login";
import GeneralMenuPage from "./pages/GeneralMenu";
import Drawer from './pages/drawer';


function App() {
  return (
    <Router>
      <head>
        <link rel="stylesheet" href={require("hover.css/css/hover-min.css")} />
      </head>

      <ContextProvider>
        <ApolloProvider client={apolloClient}>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/general-menu">
            <GeneralMenuPage />
          </Route>
          <Route path="/drawer">
            <Drawer />
          </Route>
        </ApolloProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
