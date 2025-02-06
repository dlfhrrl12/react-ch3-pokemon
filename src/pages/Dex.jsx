import { DashBoard } from "../components/DashBoard";
import { DashStyle } from "../styled/DexStyle";
import { PokemonContext } from "../context/PokemonContext"; 
import { PokemonList } from "../components/PokemonList"; 
import { useState } from "react";

export default function Dex() {
    const [selectPokemon, setSelectPokemon] = useState([]); // 선택된 포켓몬 저장

    const addPokemon = (pokemon) => {
        if (selectPokemon.length >= 6) { // 선택된 포켓몬이 6마리 이상이 될경우 경고문으로 실행 중지
            alert("6마리까지만 선택할 수 있습니다!");
            return;
        }

        if (selectPokemon.some(p => p.id === pokemon.id)) { // 선택된 포켓몬이 같은 포켓몬이 있을 경우 실행 중지
            alert("이미 추가된 포켓몬입니다!");
            return;
        }

        setSelectPokemon([...selectPokemon, pokemon]); // 위 내용에 걸리는 부분이 없으면 포켓문 추가
    };

    const removePokemon = (pokemon) => { // 삭제 버튼을 누르면 포켓몬 id를 구분해 filter 처리로 해서 포켓몬 삭제
        setSelectPokemon(selectPokemon.filter(p => p.id !== pokemon.id));
    };

    return (
        <PokemonContext.Provider value={{ selectPokemon, addPokemon, removePokemon }}> {/* Context로 addPokemon 와 removePokemon에 함수를 모든 컴포넌트에 전달 */}
            <DashStyle>
                <DashBoard />
                <PokemonList />
            </DashStyle>
        </PokemonContext.Provider>
    );
}
