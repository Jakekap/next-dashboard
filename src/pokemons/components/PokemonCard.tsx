"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "..";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { toggleFavorite } from "@/src/store/pokemons/pokemons";

export const PokemonCard = (pokemon: SimplePokemon) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };
  return (
    <div className="mx-auto right-0 mt-2 w-60 shadow-lg">
      <div className="text-center p-6 bg-gray-800 border-b">
        <Image
          className="h-24 w-24 text-white mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={100}
          height={100}
          alt={name || "Pokemon"}
          priority={false}
        />
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
          {name}
        </p>
        <p className="text-sm text-gray-100">ID: {id}</p>
        <div className="mt-5">
          <Link
            href={"pokemons/" + name}
            className="border hover:bg-white hover:text-gray-800 transition-all rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
          >
            Ver detalles
          </Link>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="bg-white w-full px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 transition-all"
      >
        <div>
          {isFavorite ? (
            <FaHeart className="text-red-600" />
          ) : (
            <FaRegHeart className="text-red-600" />
          )}
        </div>
        <div className="text-left pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            {isFavorite ? "Dislike" : "Like"}
          </p>
          <p className="text-xs text-gray-500">
            {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
          </p>
        </div>
      </button>
    </div>
  );
};
