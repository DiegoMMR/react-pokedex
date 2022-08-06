import React from "react";
import "../../sass/Loader.scss";
import Pokeball from "../../assets/pokeball.png";

function Loader() {
  return (
    <div className="loader">
      <img className="rotating" src={Pokeball} alt="" />
    </div>
  );
}

export { Loader };
