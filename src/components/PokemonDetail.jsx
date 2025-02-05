import { BackButton, DetailContainer, PokemonDescription, PokemonImg, PokemonImgWrapper, PokemonInfoBox, PokemonName, PokemonTypes } from "../styled/DetailPokemon";
import MOCK_DATA from "../data/MOCKDATA";
import { useNavigate, useParams }from "react-router-dom";
import { PokemonID } from "../styled/PokeListStyle";


export const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  
  const matchedPokemon = MOCK_DATA.find((pokemon) => String(pokemon.id) === String(id));
  
  if (!matchedPokemon) {
    return (
      <DetailContainer>
        <h2>해당 포켓몬을 찾을 수 없습니다.</h2>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </DetailContainer>
    );
  }
  
  const pokemonID = matchedPokemon.id < 10 ? `00${matchedPokemon.id}` :
                    matchedPokemon.id < 100 ? `0${matchedPokemon.id}` :
                    matchedPokemon.id;

  const {
    korean_name,
    img_url,
    types,
    description,
  } = matchedPokemon;

   return (
       <DetailContainer>
           <PokemonImgWrapper>
               <PokemonImg src={img_url} />
           </PokemonImgWrapper>
           <PokemonName>{korean_name}</PokemonName>
           <PokemonInfoBox>
               <PokemonTypes>타입: {types?.join(", ")}</PokemonTypes>
               <PokemonID style={{ fontSize: "20px" }}>No. {pokemonID}</PokemonID>
               <PokemonDescription>{description}</PokemonDescription>
           </PokemonInfoBox>
           <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
       </DetailContainer>
   );
};
