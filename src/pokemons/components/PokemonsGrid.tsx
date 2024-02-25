import { SimplePokemon } from "..";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="flex flex-col items-center">
          <PokemonCard {...pokemon} />
        </div>
      ))}
    </div>
  );
};
