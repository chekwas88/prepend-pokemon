import * as React from "react";
import { fetchPokemons } from "../utils";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { useQuery, useQueryClient } from "react-query";
import { IHomeState, Action, ActionKind } from "../types";
import { Layout, Home, Pagination } from "../components";
import Loader from "react-loader-spinner";

const initialState: IHomeState = {
  start: 1,
  end: 16,
  offset: 0,
  limit: 16,
};

function reducer(state: IHomeState, action: Action): IHomeState {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.NextPage:
      return {
        ...state,
        ...payload,
      };

    case ActionKind.PreviousPage:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}

export default function HomePage({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [{ start, end, offset, limit }, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    ["pokemons", limit, offset],
    () => fetchPokemons(limit, offset),
    {
      initialData: pokemonData,
    }
  );

  React.useEffect(() => {
    if (end < pokemonData.count) {
      queryClient.prefetchQuery(
        ["pokemons", limit, offset + limit],
        async () => await fetchPokemons(limit, offset + limit)
      );
    }
  }, [limit, pokemonData.count, offset, end, queryClient]);

  const setNext = React.useCallback(() => {
    dispatch({
      type: ActionKind.NextPage,
      payload: {
        start: end + 1,
        offset: end,
        limit,
        end: Math.min(end + limit, pokemonData.count),
      },
    });
  }, [dispatch, pokemonData.count, end, limit]);

  const setPrevious = React.useCallback(() => {
    dispatch({
      type: ActionKind.PreviousPage,
      payload: {
        start: start - limit,
        offset: offset - limit,
        end: end - limit,
        limit,
      },
    });
  }, [dispatch, start, limit, offset, end]);
  if (isLoading) {
    return (
      <div>
        <Layout>
          <div className="m-auto -mt-12 h-screen flex flex-col items-center  justify-center">
            <Loader type="Puff" color="#00BFFF" height={60} width={60} />
          </div>
        </Layout>
      </div>
    );
  }
  return (
    <div>
      <Layout>
        <Home data={data.data} />
        <Pagination
          setNext={setNext}
          setPrevious={setPrevious}
          start={start}
          end={end}
          count={pokemonData.count}
        />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemonData = await fetchPokemons();

  return {
    props: {
      pokemonData,
    },
  };
};
