import { Pokemon, IHome } from "./types";

export const fetchPokemons = async (
  limit: number = 16,
  offset: number = 0
): Promise<IHome> => {
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );

    let pokemonResults = await res.json();
    const { count, results } = pokemonResults;
    const responses = [];

    for (let item of results) {
      let res = await fetch(item.url);
      let results = await res.json();
      if (!results) {
        throw new Error("An Error ocuured please check your Network");
      }
      responses.push(results);
    }

    const pokemonData: Pokemon[] = responses.map((d) => ({
      id: d.id,
      name: d.name,
      weight: d.weight,
      image: d.sprites.other.home.front_default,
    }));
    return {
      count,
      data: pokemonData,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
