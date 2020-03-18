import React from "react";
import Header from "./components/header";
import Home from "./pages/home";

import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "./css-reset.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
