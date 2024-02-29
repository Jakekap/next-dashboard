"use client";
import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "@/src/store";
import { PokemonsGrid, SimplePokemon } from "@/src/pokemons";
import { FaRegHeart } from "react-icons/fa";

export const PokemonFavorites = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(
    Object.values(favorites)
  );

  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if (isLoad.current === false && Object.values(favorites).length !== 0) {
      setPokemons(Object.values(favorites));
      isLoad.current = true;
    }
  }, [favorites]);

  console.log(pokemons, "pokemons");

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
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
