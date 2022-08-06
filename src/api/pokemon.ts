import { IPokemon } from "../interfaces/pokemon";

const api_url = "https://pokeapi.co/api/v2/pokemon/";
const kanto_limit = 151;

const formatPokemon = (pokemon: any): IPokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    height: pokemon.height,
    types: pokemon.types.map((type: any) => type.type.name),
    stats: pokemon.stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
  };
};

export const getPokemon = async (id: number): Promise<IPokemon> => {
  const response = await fetch(`${api_url}${id}`);
  const pokemon = await response.json();
  return formatPokemon(pokemon);
};

export const getPokemons = (): Promise<IPokemon[]> => {
  const pokemons = [];
  for (let i = 1; i <= kanto_limit; i++) {
    pokemons.push(getPokemon(i));
  }

  return Promise.all(pokemons);
};
