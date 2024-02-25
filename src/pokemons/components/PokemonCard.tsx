import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "..";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const PokemonCard = ({ id, name }: SimplePokemon) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            className="h-24 w-24 text-white mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
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
        <div className="border-b">
          <div className="px-4 py-2 flex items-center">
            <button>
              <FaRegHeart className="text-red-600" />
            </button>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Like
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
