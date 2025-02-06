import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext"; 
import { DashBox, DashTitle } from "../styled/DexStyle";
import { MyPokemonCards, MyPokemonList, MyPokemons, Pokeball, PokeDeleteBtn } from "../styled/MyPokemonCards";
import { PokemonID, PokemonsImg, PokemonsName } from "../styled/PokeListStyle";

export const DashBoard = () => {
    const { selectPokemon, removePokemon } = useContext(PokemonContext);

    return (
        <DashBox>
            <DashTitle>나만의 포켓몬 파트너</DashTitle>
            <MyPokemonList>
                {Array(6).fill(null).map((_, index) => ( // 배열의 6개 공간을 만들고 fill로 null 해서 공간을 비워 둔다. "_" 사용하지 않음을 의미
                    selectPokemon?.[index] ? (  // 포켓몬이 선택 됬을 경우 포켓몬 이미지 No. 이름 
                        <MyPokemonCards key={index}>
                            <PokemonsImg src={selectPokemon[index].img_url} />
                            <PokemonsName>{selectPokemon[index].korean_name}</PokemonsName>
                            <PokemonID>
                                {selectPokemon[index].id < 10 ? `No. 00${selectPokemon[index].id}` :
                                 selectPokemon[index].id < 100 ? `No. 0${selectPokemon[index].id}` :
                                 `No. ${selectPokemon[index].id}`}
                            </PokemonID>
                            <PokeDeleteBtn onClick={() => removePokemon(selectPokemon[index])}>삭제</PokeDeleteBtn>
                        </MyPokemonCards>
                    ) : ( // 선택 되지 않을 경우 빈공간 이미지 표시
                        <MyPokemons key={index}>
                            <Pokeball src="/pokeball.png" />
                        </MyPokemons>
                    )
                ))}
            </MyPokemonList>
        </DashBox>
    );
};
