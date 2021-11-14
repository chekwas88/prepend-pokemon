import { IPokemonDetail } from "../types";
import * as React from "react";

export default function Detail({ data }: { data: IPokemonDetail }) {
  const [showmore, setShowMore] = React.useState<boolean>(false);
  const limitedMoves = React.useMemo(
    () => data.moves.slice(0, 10),
    [data.moves]
  );
  return (
    <main className="bg-white px-4 pt-8 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid-cols-1 grid sm:grid-cols-2 sm:gap-4">
          <div>
            <img
              src={data.image}
              alt={data.name}
              className="flex-none  object-center object-contain bg-gray-100 rounded-lg"
            />
            <div className="flex mt-2">
              <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                <div className="flex">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="capitalize ml-2  text-gray-700">
                    {data.name}
                  </dd>
                </div>
                <div className="flex">
                  <dt className="font-medium text-gray-900">Specie</dt>
                  <dd className="ml-2 capitalize text-gray-700">
                    {data.species}
                  </dd>
                </div>
                <div className="flex">
                  <dt className="font-medium text-gray-900">Weight</dt>
                  <dd className="ml-2 text-gray-700">{data.weight}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900">Types</h4>
              <div
                data-testid="pok-types"
                className="grid pb-4 mt-2 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-5 "
              >
                {data.types.map((type) => (
                  <span
                    key={type}
                    className="p-1 capitalize rounded-sm bottom-1 text-center font-bold bg-gray-300 text-sm text-gray-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t py-4">
              <h4 className="font-medium text-gray-900">Stats</h4>
              <div
                data-testid="pok-stats"
                className="grid pb-4 mt-2 grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-3 xl:grid-cols-3"
              >
                {data.stats.map((stat) => (
                  <div className="flex" key={stat.name}>
                    <span className="p-1 capitalize rounded-sm bottom-1 text-center text-sm font-bold text-gray-900">
                      {`${stat.name}:`}
                    </span>
                    <span className="text-gray-500">{stat.stat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t py-4">
              <h4 className="font-medium text-gray-900">Moves</h4>
              {!showmore ? (
                <div
                  data-testid="pok-moves"
                  className="grid pb-4 mt-2 grid-cols-2 gap-x-2 gap-y-4 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {limitedMoves.map((move) => (
                    <span
                      key={move}
                      className="p-1 capitalize rounded-sm text-center bg-blue-500 font-bold text-sm text-white"
                    >
                      {move}
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={() => setShowMore(true)}
                    className="p-1 mt-0 ml-2 w-24 bg-gradient-to-r text-sm capitalize bg-gray-300 text-gray-600 font-medium rounded"
                  >
                    show more
                  </button>
                </div>
              ) : (
                <div className="grid pb-4 mt-2 grid-cols-2 gap-x-2 gap-y-4 lg:grid-cols-3 xl:grid-cols-4">
                  {data.moves.map((move) => (
                    <span
                      key={move}
                      className="p-1 capitalize rounded-sm text-center font-bold bg-blue-500 text-sm text-white"
                    >
                      {move}
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={() => setShowMore(false)}
                    className="p-1 w-full border bg-gradient-to-r text-sm capitalize bg-gray-300 text-gray-600 font-medium rounded shadow-sm flex justify-center items-center flex-1"
                  >
                    show less
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
