import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokeAddBtn, PokemonCards, PokemonID, PokemonsImg, PokemonsInfo, PokemonsName } from "../styled/PokeListStyle";

export const PokemonItem = ({ pokemon }) => {
    const { addPokemon } = useContext(PokemonContext); 

    const pokemonID = pokemon.id < 10 ? `00${pokemon.id}` : // 포켓몬 화면 ID 구현
                      pokemon.id < 100 ? `0${pokemon.id}` : // 10 미만일 경우 001, 100 미만일 경우 010형식으로
                      pokemon.id;                           // 삼항연산자로 만듬

    return (
        <PokemonCards key={pokemon.id} to={`/pokemon/${pokemon.id}`} >
            <PokemonsImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonsInfo>
                <PokemonsName>{pokemon.korean_name}</PokemonsName>
                <PokemonID>No. {pokemonID}</PokemonID>
                <PokeAddBtn onClick={(e) => {
                    e.preventDefault(); // 새로고침 방지
                    addPokemon(pokemon); // 포켓몬 추가 기능
                }}>
                    추가
                </PokeAddBtn>
            </PokemonsInfo>
        </PokemonCards>
    );
};

