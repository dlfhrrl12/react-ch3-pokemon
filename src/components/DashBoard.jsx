
import { useState } from "react";
import { DashBox, DashTitle } from "../styled/DexStyle";
import { PokemonList } from "./PokemonList";
import { MyPokemonCards, MyPokemonList, MyPokemons, Pokeball, PokeDeleteBtn } from "../styled/MyPokemonCards";
import { PokemonID, PokemonsImg, PokemonsName } from "../styled/PokeListStyle";

export const DashBoard = () => {
    const [selectPokemon, setSelectPokemon] = useState([]); // 선택 사항
          
    const addPokemon = (pokemon) => {
        if (selectPokemon.length >= 6) { 
            alert("최대 6마리까지만 선택할 수 있습니다!");
            return;
        }
        if (selectPokemon.some(p => p.id === pokemon.id)) { 
            alert("이미 선택한 포켓몬입니다!");
            return;
        }
        setSelectPokemon([...selectPokemon, pokemon]);
    };
    
    const removePokemon = (pokemon) => {
        setSelectPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
    }
    
    return (
        <>
            <DashBox>
               <DashTitle>나만의 포켓몬 파트너</DashTitle> {/* 포켓몬 Title*/}
               <MyPokemonList> {/* DashBoard */}
               {Array(6).fill(null).map((_, index) => (
                        selectPokemon[index] ? ( 
                            <MyPokemonCards key={index}>  {/*선택된 경우 MyPokemonCards 사용 */}
                                <PokemonsImg src={selectPokemon[index].img_url} />
                                <PokemonsName>{selectPokemon[index].korean_name}</PokemonsName>
                                <PokemonID>
                                    {selectPokemon[index].id < 10 ? `No. 00${selectPokemon[index].id}` :
                                     selectPokemon[index].id < 100 ? `No. 00${selectPokemon[index].id}` :
                                     selectPokemon[index].id
                                    }
                                </PokemonID>
                                <PokeDeleteBtn onClick={() => removePokemon(selectPokemon[index])}>삭제</PokeDeleteBtn>
                            </MyPokemonCards>
                        ) : (
                            <MyPokemons key={index}>  {/*선택되지 않은 경우 MyPokemons 유지 */}
                                <Pokeball src="/pokeball.png" />
                            </MyPokemons>
                        )
                    ))}
               </MyPokemonList >
            </DashBox>
            <PokemonList addPokemon={addPokemon}/>
        </>
    );
}