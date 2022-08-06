import React from "react";
import "../../sass/PokemonCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { add_pokemon_to_team, remove_pokemon_from_team } from "../../store/actions";
import { Link } from "react-router-dom";
import PlusIcon from "../../assets/plus.png";
import XMarkIcon from "../../assets/xmark.png";
import { IPokemon } from "../../interfaces/pokemon";
import { Types } from "./Types";

interface IProps {
  pokemon: IPokemon;
  isTeam: boolean;
}

function PokemonCard({ pokemon, isTeam }: IProps) {
  const dispatch = useDispatch();
  const team = useSelector((state: any) => state.team);

  const addToTeam = () => {
    dispatch(add_pokemon_to_team(pokemon));
  };

  const removeFromTeam = () => {
    dispatch(remove_pokemon_from_team(pokemon));
  };

  const isOnTeam = team.some((p: any) => p.id === pokemon.id);
  const isTeamFull = team.length >= 6;

  return (
    <div className="pokemon-card">
      {!isTeam && !isOnTeam && !isTeamFull && <img onClick={addToTeam} className="add btn" src={PlusIcon} alt="" />}
      {isTeam && <img onClick={removeFromTeam} className="remove btn" src={XMarkIcon} alt="" />}

      <img className="pokemon-img" src={pokemon.image} alt="" />
      <div className="pokemon-info">
        <span className="number"># {pokemon.id}</span>
        <Link to={`/pokemon/${pokemon.id}`} className="name">
          {pokemon.name}
        </Link>
        <Types pokemon={pokemon} />
      </div>
    </div>
  );
}

export { PokemonCard };
