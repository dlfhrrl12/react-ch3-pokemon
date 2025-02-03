import { DashBox, DashTitle, MyPokemonList, MyPokemons, Pokeball } from "../styled/DexStyle";

export const DashBoard = () => {
    return (
        <>
            <DashBox>
               <DashTitle>나만의 포켓몬 파트너</DashTitle>
               <MyPokemonList>
               {Array(6).fill(null).map((_, index) => (
                    <MyPokemons key={index}>
                        <Pokeball src="/pokeball.png" />
                    </MyPokemons>
                ))}
               </MyPokemonList>
            </DashBox>
        </>
    );
}