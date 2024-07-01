import { Pokemon } from "../../../types";
import { Item } from "./item";

interface ListProps {
  data: Pokemon[];
}

export function List({ data }: ListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap4">
      {data.map((pokemonData) => {
        return (
          <Item
            key={pokemonData.id}
            id={pokemonData.id}
            name={pokemonData.name}
            imageUrl={pokemonData.imageUrl}
          />
        );
      })}
    </div>
  );
}
