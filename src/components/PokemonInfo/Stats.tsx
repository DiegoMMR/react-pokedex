import React, { Fragment } from "react";
import { IPokemon, IStat } from "../../interfaces/pokemon";

interface IProps {
  pokemon: IPokemon;
}

function Stats({ pokemon }: IProps) {
  return (
    <div className="stats">
      {pokemon.stats.map((stat: IStat) => {
        return (
          <div className="stat" key={stat.name}>
            <span className="title">{stat.name}: </span>
            <span className="value">{stat.value}</span>
          </div>
        );
      })}
    </div>
  );
}

export { Stats };
