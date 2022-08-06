import React, { useState, useEffect, Fragment } from "react";
import "../../sass/Pokedex.scss";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Pokedex/PokemonCard";
import { Filter } from "./Filter";

function PokemonList() {
  const pokemons = useSelector((state: any) => state.pokemons);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id.toString().includes(search);
    });
    setFilteredPokemons(filteredPokemons);
  }, [search]);

  return (
    <Fragment>
      <div className="filter-container">
        <div className="buttons">
          <span className="big-button" />
          <span className="small-button red" />
          <span className="small-button yellow" />
          <span className="small-button green" />
        </div>
        <Filter search={search} handleSearch={handleSearch} />
      </div>

      <div className="pokedex-screen">
        <div className="pokedex-list">
          {filteredPokemons.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} isTeam={false} />;
          })}
        </div>
      </div>
    </Fragment>
  );
}

export { PokemonList };
