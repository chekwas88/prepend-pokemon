import { IPokemonDetail, Pokemon } from "../types";

interface ListResponse {
  count: number;
  data: Pokemon[];
}
export const mockedPokemons: ListResponse = {
  count: 16,
  data: [
    {
      name: "Charmander",
      id: 1,
      weight: 60,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    },
    {
      name: "Charizard",
      id: 2,
      weight: 60,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    },
  ],
};

export const mockedDetailPokemons: IPokemonDetail = {
  name: "Charizard",
  id: 1,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
  weight: 60,
  stats: [
    { name: "hp", stat: 62 },
    { name: "attack", stat: 25 },
  ],
  types: ["fire", "flying"],
  moves: ["mega-punch", "fire-punch"],
  species: "Charizard",
};
