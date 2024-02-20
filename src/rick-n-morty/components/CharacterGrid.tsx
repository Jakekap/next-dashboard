import { SimpleCharacter } from "..";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters: SimpleCharacter[];
}

export const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {characters.map((character) => (
        <div key={character.id} className="flex flex-col items-center">
          <CharacterCard {...character} />
        </div>
      ))}
    </div>
  );
};
