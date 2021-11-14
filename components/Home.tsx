import * as React from "react";
import { Pokemon } from "../types";
import Link from "next/link";

export default function Home({ data }: { data: Pokemon[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 p-8 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {data.map((pok) => (
        <li key={pok.id} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img
              data-testid="pokemon-image"
              src={pok.image}
              alt={pok.name}
              className="object-contain pointer-events-none group-hover:opacity-75"
            />
            <Link href={`/pokemon/${pok.id}`} passHref>
              <a className="absolute inset-0  focus:outline-none" />
            </Link>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {pok.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
