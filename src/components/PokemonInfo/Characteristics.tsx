import React, { Fragment } from "react";
import { IPokemon } from "../../interfaces/pokemon";
import { Types } from "../Pokedex/Types";

interface IProps {
  pokemon: IPokemon;
}

function Characteristics({ pokemon }: IProps) {
  return (
    <div className="characteristics">
      <div>
        <span className="title">Altura</span>
        <span className="value">{pokemon.height}</span>
      </div>
      <div>
        <span className="title">Tipos</span>
        <span className="value">
          <ul className="types">
            <Types pokemon={pokemon} />
          </ul>
        </span>
      </div>
    </div>
  );
}

export { Characteristics };
