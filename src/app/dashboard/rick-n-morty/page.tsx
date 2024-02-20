import { Characters, SimpleCharacter, CharacterGrid } from "@/src/rick-n-morty";

const getCharacters = async (): Promise<SimpleCharacter[]> => {
  const data: Characters = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  ).then((res) => res.json());

  const characters: SimpleCharacter[] = data.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));

  //throw new Error("Error al obtener los personajes");

  return characters;
};

export default async function RickNMortyPage() {
  const characters = await getCharacters();

  return (
    <div className="flex flex-col">
      <CharacterGrid characters={characters} />
    </div>
  );
}
