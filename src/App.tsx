import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { list_pokemons } from "./store/actions";
import "./sass/App.scss";
import { getPokemons } from "./api/pokemon";

import { Pokedex } from "./components/Pokedex/Pokedex";
import { Team } from "./components/Team/Team";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const pokemons = await getPokemons();

      dispatch(list_pokemons(pokemons));
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="app-container">
        <Pokedex />
        <Team />
      </div>
    );
  }
}

export default App;
