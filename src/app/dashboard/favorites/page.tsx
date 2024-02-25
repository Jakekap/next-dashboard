import { PokemonFavorites } from "@/src/pokemons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite Pokémons",
  description: "Favorite Pokémons Page",
};

export default function CounterPage() {
  return (
    <div className="text-xl">
      <h1>Pokémones favoritos</h1>
      <PokemonFavorites />
    </div>
  );
}
