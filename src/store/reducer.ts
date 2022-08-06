import { IPokemon } from "../interfaces/pokemon";
import { IState } from "../interfaces/store";

const initialState: IState = {
  pokemons: [],
  team: [],
};

export const AppReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case "team/add":
      return addToTeam(state, action.payload.newPokemon);
    case "team/remove":
      return removeFromTeam(state, action.payload.pokemonToRemove);
    case "pokemons/list":
      return listPokemons(state, action.payload.pokemons);
    default:
      return state;
  }
};

const addToTeam = (state: any, newPokemon: IPokemon) => {
  const newState = {
    ...state,
    team: [...state.team, newPokemon],
  };

  return newState;
};

const removeFromTeam = (state: any, pokemonToRemove: IPokemon) => {
  const newState = {
    ...state,
    team: state.team.filter((pokemon: IPokemon) => pokemon !== pokemonToRemove),
  };

  return newState;
};

const listPokemons = (state: any, pokemons: IPokemon[]) => {
  const newState = {
    ...state,
    pokemons: pokemons,
  };

  return newState;
};
