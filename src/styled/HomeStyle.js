import styled, { createGlobalStyle } from "styled-components";

// 홈화면 포켓몬 이미지 로고
export const PokemonImg = styled.img`
   width: 600px;
   height: 220px;
   margin-bottom: 20px;
   background-size: cover;
   background-position: center;
`;

// Dex.jsx 이동 버튼
export const DexLink = styled.button`
   padding: 10px 20px;
   font-size: 18px;
   cursor: pointer;
   border-radius: 5px;
   background-color: rgb(255, 0, 0);
   color: white;
   border: none;
`;

// Home 화면 스타일 중앙 지정
export const HomeStyle = createGlobalStyle`
   .poketHome{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
   }
`