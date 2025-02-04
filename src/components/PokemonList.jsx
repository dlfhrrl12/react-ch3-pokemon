import { PokeAddBtn, PokemonCards, PokemonID, PokemonListBox, PokemonsImg, PokemonsInfo, PokemonsName } from "../styled/PokeListStyle";
import MOCK_DATA from "../data/MOCKDATA";

export const PokemonList = ({ addPokemon }) => {
      
    return (
        <>
            <PokemonListBox>
               {MOCK_DATA.map((pokemon) => {
                  const pokemonID = pokemon.id < 10 ? `00${pokemon.id}` :
                                    pokemon.id < 100 ? `0${pokemon.id}` :
                                    pokemon.id;
                  return(
                  <PokemonCards key={pokemon.id}>
                     <PokemonsImg src={pokemon.img_url}/>
                     <PokemonsInfo>
                        <PokemonsName>{pokemon.korean_name}</PokemonsName>
                        <PokemonID>No. {pokemonID}</PokemonID>
                        <PokeAddBtn onClick={() => addPokemon(pokemon)}>추가</PokeAddBtn>
                     </PokemonsInfo>
                  </PokemonCards>
                  );
               })}
            </PokemonListBox>
        </>
    );
}