import { BackButton, DetailContainer, PokemonDescription, PokemonImg, PokemonImgWrapper, PokemonInfoBox, PokemonName, PokemonTypes } from "../styled/DetailPokemon";
import MOCK_DATA from "../data/MOCKDATA";
import { useNavigate, useParams }from "react-router-dom";
import { PokemonID } from "../styled/PokeListStyle";


export const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 포켓몬 id 값 찾기
  
  // 포켓몬 data 에서 id 정보 찾기
  const matchedPokemon = MOCK_DATA.find((pokemon) => String(pokemon.id) === String(id));
  
  if (!matchedPokemon) { // 예외 처리
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

  const { // 포켓몬 id 값의 다른 객체 정보들 
    korean_name, // 이름
    img_url, // 이미지
    types, // 속성 타입
    description,// 포켓몬 정보
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
           <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton> {/* 뒤로가기 기능 router-dom */}
       </DetailContainer>
   );
};
