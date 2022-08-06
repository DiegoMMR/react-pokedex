export interface IPokemon {
  id: number;
  name: string;
  image: string;
  height: number;
  types: string[];
  stats: IStat[];
}

export interface IStat {
  name: string;
  value: number;
}
