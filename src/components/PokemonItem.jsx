import { PokeAddBtn, PokemonCards, PokemonID, PokemonsImg, PokemonsInfo, PokemonsName } from "../styled/PokeListStyle";

export const PokemonItem = ({ pokemon, onAddPokemon }) => {
   const pokemonID = pokemon.id < 10 ? `00${pokemon.id}` :
                     pokemon.id < 100 ? `0${pokemon.id}` :
                     pokemon.id;

   return (
       <PokemonCards key={pokemon.id} to={`/pokemon?pid=${pokemon.id}`} >
           <PokemonsImg src={pokemon.img_url} alt={pokemon.korean_name} />
           <PokemonsInfo>
               <PokemonsName>{pokemon.korean_name}</PokemonsName>
               <PokemonID>No. {pokemonID}</PokemonID>
               <PokeAddBtn onClick={(e) => {
                  e.preventDefault();
                  onAddPokemon(pokemon)}}>
                     추가
               </PokeAddBtn>
           </PokemonsInfo>
       </PokemonCards>
   );
};