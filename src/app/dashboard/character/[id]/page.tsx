import { Character } from "@/src/rick-n-morty";
import CharacterStatus from "@/src/rick-n-morty/components/CharacterStatus";
import type { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getCharacter(params.id);
  return { title: `#${id} | ${name}`, description: `Página de ${name}` };
}

const getCharacter = async (id: string): Promise<Character> => {
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      cache: "force-cache", //Cambiar en el futuro
    }
  ).then((res) => res.json());

  console.log("El personaje es: " + character);

  return character;
};

export default async function CharacterPage({ params }: Props) {
  const character = await getCharacter(params.id);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{character.id}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div className="relative">
              <Image
                src={character.image ?? ""}
                width={150}
                height={150}
                alt={`Imagen del ${character.name}`}
                className="rounded-full"
              />
              <CharacterStatus status={character.status} />
            </div>

            <h2 className="flex flex-wrap">
              <p className="mr-2 text-xl font-bold text-slate-700 capitalize">
                {character.name}
              </p>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Especie</p>
            <div className="text-base font-medium text-navy-700 flex">
              <p className="mr-2 capitalize">{character.species}</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Género</p>
            <span className="text-base font-medium text-navy-700 flex">
              {character.gender}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
