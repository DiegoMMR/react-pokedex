import React from "react";
import "../../sass/Pokedex.scss";
import { Routes, Route } from "react-router-dom";
import { PokemonList } from "../PokemonList/PokemonList";
import { PokemonInfo } from "../PokemonInfo/PokemonInfo";

function Pokedex() {
  return (
    <div className="pokedex-container">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="pokemon" element={<PokemonInfo />}>
          <Route path=":pokemonId" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export { Pokedex };
