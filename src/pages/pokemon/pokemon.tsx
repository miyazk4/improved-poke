import React from "react";
import { PokeData } from "./index";

interface PokeProps {
  pokemon: PokeData;
}

const Pokemon = ({ pokemon }: PokeProps) => {
  return (
    <div className="pokeContainer">
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.base_experience}</h2>
    </div>
  );
};

export default Pokemon;
