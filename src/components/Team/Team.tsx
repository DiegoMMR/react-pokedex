import React from "react";
import "../../sass/Team.scss";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Pokedex/PokemonCard";

function Team() {
  const team = useSelector((state: any) => state.team);

  return (
    <div className="team-container">
      <h1>Listos para el combate</h1>
      <div className="team-scroll">
        <div className="team-list">
          {team.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} isTeam />;
          })}
        </div>
      </div>
    </div>
  );
}

export { Team };
