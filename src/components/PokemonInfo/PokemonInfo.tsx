import "../../sass/Pokedex.scss";
import "../../sass/PokemonInfo.scss";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_pokemon_to_team, remove_pokemon_from_team } from "../../store/actions";
import { IPokemon } from "../../interfaces/pokemon";
import { Link } from "react-router-dom";
import { Characteristics } from "./Characteristics";
import { Stats } from "./Stats";

function PokemonInfo() {
  const team = useSelector((state: any) => state.team);
  const params = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state: any) => state.pokemons.find((p: IPokemon) => p.id === Number(params.pokemonId)));

  const addToTeam = () => {
    dispatch(add_pokemon_to_team(pokemon));
  };

  const removeFromTeam = () => {
    dispatch(remove_pokemon_from_team(pokemon));
  };

  const isOnTeam = team.some((p: any) => p.id === pokemon.id);
  const isTeamFull = team.length >= 6;

  return (
    <Fragment>
      <div className="filter-container">
        <div className="buttons">
          <span className="big-button" />
          <span className="small-button red" />
          <span className="small-button yellow" />
          <span className="small-button green" />
        </div>
      </div>
      <div className="pokedex-screen">
        <div className="pokemon-info-container">
          <div className="header">
            <Link to="/" className="back btn">
              regresar
            </Link>

            {!isOnTeam && !isTeamFull && (
              <span className="add btn" onClick={addToTeam}>
                Agregar al equipo
              </span>
            )}
            {isOnTeam && (
              <span className="remove btn" onClick={removeFromTeam}>
                Quitar del equipo
              </span>
            )}
          </div>

          <h2 className="name">
            {pokemon.name} <span className="number">#{pokemon.id}</span>
          </h2>

          <div className="pokemon-info">
            <img className="pokemon-img" src={pokemon.image} alt="" />
            <div className="info">
              <Characteristics pokemon={pokemon} />
              <Stats pokemon={pokemon} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { PokemonInfo };
