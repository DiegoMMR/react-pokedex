import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IPokemon } from "../interfaces/pokemon";
import { IState } from "../interfaces/store";
import { PokemonList } from "../components/PokemonList/PokemonList";

import { Provider } from "react-redux";
import configureStore from "../store/store";
import { BrowserRouter } from "react-router-dom";

const pokemons: IPokemon[] = [
  {
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
  },
  {
    id: 2,
    name: "ivysaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    height: 10,
    types: ["grass", "poison"],
    stats: [
      { name: "hp", value: 60 },
      { name: "attack", value: 62 },
      { name: "defense", value: 63 },
      { name: "special-attack", value: 80 },
      { name: "special-defense", value: 80 },
      { name: "speed", value: 60 },
    ],
  },
];

const initialState: IState = {
  team: [],
  pokemons: pokemons,
};

const store = configureStore(initialState);

describe("Render PokemonCard", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <PokemonList />
      </Provider>
    </BrowserRouter>
  );

  it("Render elements in component", () => {
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
    });
  });
});
