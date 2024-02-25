import { Pokemons, SimplePokemon, PokemonsGrid } from "@/src/pokemons";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "152 Pokémons",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const getPokemons = async (): Promise<SimplePokemon[]> => {
  const data: Pokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150"
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => {
    const urlId = pokemon.url.split("/")[6];
    return {
      id: urlId,
      name: pokemon.name,
    };
  });

  //throw new Error("Error al obtener los personajes");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
