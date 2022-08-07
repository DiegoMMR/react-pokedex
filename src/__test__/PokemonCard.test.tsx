import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IPokemon } from "../interfaces/pokemon";
import { PokemonCard } from "../components/Pokedex/PokemonCard";

import { Provider } from "react-redux";
import configureStore from "../store/store";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

const pokemon: IPokemon = {
  id: 1,
  name: "bulbasaur",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  height: 7,
  types: ["grass", "poison"],
  stats: [
    { name: "hp", value: 45 },
    { name: "attack", value: 49 },
    { name: "defense", value: 49 },
    { name: "special-attack", value: 65 },
    { name: "special-defense", value: 65 },
    { name: "speed", value: 45 },
  ],
};

describe("Render PokemonCard", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <PokemonCard pokemon={pokemon} isTeam={false} />
      </Provider>
    </BrowserRouter>
  );

  it("Render elements in component", () => {
    expect(getByText(pokemon.name)).toBeInTheDocument();
    expect(getByText(pokemon.types[0])).toBeInTheDocument();
    expect(getByText(pokemon.types[1])).toBeInTheDocument();
  });
});
