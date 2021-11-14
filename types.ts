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
export interface IHome {
  data: Pokemon[];
  count: number;
}
export interface IStat {
  name: string;
  stat: number;
}

export interface IHomeState {
  end: number;
  start: number;
  limit: number;
  offset: number;
}

export enum ActionKind {
  NextPage = "NEXTPAGE",
  PreviousPage = "PREVIOUSPAGE",
}

export interface Action {
  type: ActionKind;
  payload: IHomeState;
}
