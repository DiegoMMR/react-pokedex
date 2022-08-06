import React, { Fragment } from "react";
import { IPokemon } from "../../interfaces/pokemon";
import { pokemonTypes } from "../../constants/pokemonTypes";

interface IProps {
  pokemon: IPokemon;
}

function Types({ pokemon }: IProps) {
  return (
    <ul className="types">
      {pokemon.types.map((type: string) => {
        return (
          <li
            className="type"
            key={type}
            style={{ backgroundColor: pokemonTypes[type].background, color: pokemonTypes[type].color }}
          >
            {type}
          </li>
        );
      })}
    </ul>
  );
}

export { Types };
