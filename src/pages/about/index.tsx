import React from "react";
import PokeApi from "./pokeapi";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const About = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/pokeapi`}>
          <PokeApi />
        </Route>
      </Switch>
    </div>
  );
};

export default About;
