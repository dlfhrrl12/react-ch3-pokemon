import { PokemonListBox } from "../styled/PokeListStyle";
import MOCK_DATA from "../data/MOCKDATA";
import { PokemonItem } from "./PokemonItem";

export const PokemonList = ({ addPokemon }) => {
      
    return (
        <>
            <PokemonListBox>
            {MOCK_DATA.map((pokemon) => (
                <PokemonItem
                    key={pokemon.id} 
                    pokemon={pokemon} 
                    onAddPokemon={addPokemon}  // addPokemon을 onAddPokemon prop으로 전달
                />
            ))}
            </PokemonListBox>
        </>
    );
}