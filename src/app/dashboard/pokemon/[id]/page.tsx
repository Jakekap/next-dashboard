import { Pokemon } from "@/src/pokemons";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const staticPokemons = Array.from({ length: 20 }).map((_, i) => `${i + 1}`);
  return staticPokemons.map((id) => ({ id: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);
  return { title: `#${id} | ${name}`, description: `Página de ${name}` };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  })
    .then((res) => res.json())
    .then((res) => (res.error ? notFound() : res));
  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div className="relative">
              <Image
                src={pokemon.sprites.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del ${pokemon.name}`}
                className="rounded-full"
              />
            </div>

            <h2 className="flex flex-wrap">
              <p className="mr-2 text-xl font-bold text-slate-700 capitalize">
                {pokemon.name}
              </p>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Especie</p>
            <div className="text-base font-medium text-navy-700 flex"></div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Género</p>
            <span className="text-base font-medium text-navy-700 flex"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
