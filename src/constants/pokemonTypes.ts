interface typeColor {
  background: string;
  color: string;
}

interface listOfPokemonTypes {
  [key: string]: typeColor;
}

export const pokemonTypes: listOfPokemonTypes = {
  grass: { background: "#7CB342", color: "#fff" },
  poison: { background: "#9C27B0", color: "#fff" },
  fire: { background: "#E65100", color: "#fff" },
  flying: { background: "#1976D2", color: "#fff" },
  water: { background: "#039BE5", color: "#fff" },
  bug: { background: "#1B5E20", color: "#fff" },
  normal: { background: "#9E9E9E", color: "#fff" },
  electric: { background: "#FFC107", color: "#fff" },
  ground: { background: "#795548", color: "#fff" },
  fairy: { background: "#F8BBD0", color: "#fff" },
  fighting: { background: "#E91E63", color: "#fff" },
  psychic: { background: "#E040FB", color: "#fff" },
  rock: { background: "#BDBDBD", color: "#fff" },
  steel: { background: "#616161", color: "#fff" },
  ice: { background: "#00BFA5", color: "#fff" },
  ghost: { background: "#9E9E9E", color: "#fff" },
  dragon: { background: "#039BE5", color: "#fff" },
};
