import { IPokemon } from "../interfaces/pokemon";

export const add_pokemon_to_team = (newPokemon: IPokemon) => {
  return {
    type: "team/add",
    payload: {
      newPokemon,
    },
  };
};

export const remove_pokemon_from_team = (pokemonToRemove: IPokemon) => {
  return {
    type: "team/remove",
    payload: {
      pokemonToRemove,
    },
  };
};

export const list_pokemons = (pokemons: IPokemon[]) => {
  return {
    type: "pokemons/list",
    payload: {
      pokemons,
    },
  };
};
