export interface Pokemon {
  name: string;
  image: string;
  weight: number;
  id: number;
}

export interface IPokemonDetail extends Pokemon {
  species: string;
  moves: string[];
  stats: IStat[];
  types: string[];
}

export interface IStat {
  name: string;
  stat: number;
}
