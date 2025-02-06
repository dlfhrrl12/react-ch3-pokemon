import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext"; 
import { PokemonListBox } from "../styled/PokeListStyle";
import MOCK_DATA from "../data/MOCKDATA";
import { PokemonItem } from "./PokemonItem";

export const PokemonList = () => {
    const { addPokemon } = useContext(PokemonContext); // useContext로 Context 있는 addPokemon 함수 가져오기

    return (
        <PokemonListBox>
            {MOCK_DATA.map((pokemon) => ( // 포켓몬 data폴더 안에 있는 포켓몬 정보 출력 
                <PokemonItem key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} /> 
            ))}
        </PokemonListBox>
    );
};

