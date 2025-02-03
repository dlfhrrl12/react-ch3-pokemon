import { DashBoard } from "../components/DashBoard";
import { PokemonList } from "../components/PokemonList";
import { DashStyle } from "../styled/DexStyle";

export default function Dex() {
    return (
        <>
            <DashStyle>
                <DashBoard />
                <PokemonList />
            </DashStyle>
        </>
    );
}