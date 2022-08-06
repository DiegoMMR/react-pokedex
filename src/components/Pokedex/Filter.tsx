import React from "react";
import "../../sass/Filter.scss";

interface IProps {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Filter({ search, handleSearch }: IProps) {
  return <input type="text" value={search} onChange={handleSearch} placeholder="Que pokemon buscas..." />;
}

export { Filter };
