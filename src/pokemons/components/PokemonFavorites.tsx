"use client";
import { useState } from "react";
import { useAppSelector } from "@/src/store";
import { PokemonsGrid } from "@/src/pokemons";
import { FaRegHeart } from "react-icons/fa";

export const PokemonFavorites = () => {
  const favorites = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  //const [pokemons, setPokemons] = useState(favorites);

  return (
    <>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={favorites} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <FaRegHeart size={50} className="text-9xl text-red-500" />
      <p>No hay Pokémons favoritos</p>
    </div>
  );
};
