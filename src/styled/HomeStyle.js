import styled, { createGlobalStyle } from "styled-components";

export const PokemonImg = styled.img`
   width: 600px;
   height: 220px;
   margin-bottom: 20px;
   background-size: cover;
   background-position: center;
`;

export const DexLink = styled.button`
   padding: 10px 20px;
   font-size: 18px;
   cursor: pointer;
   border-radius: 5px;
   background-color: rgb(255, 0, 0);
   color: white;
   border: none;
`;

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