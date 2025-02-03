import { useNavigate } from "react-router-dom";
import { DexLink, HomeStyle, PokemonImg } from "../styled/HomeStyle";

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <>
        <HomeStyle />
            <div className="poketHome">
               <PokemonImg src="/PokemonTitle.png" />
               <DexLink onClick={() => {
                navigate("/Dex")
               }}>포켓몬 도감 시작하기</DexLink>
            </div>
        </>
    );
}