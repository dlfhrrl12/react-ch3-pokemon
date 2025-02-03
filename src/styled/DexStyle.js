import styled from "styled-components";

export const DashStyle = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

export const DashBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   background-color: rgb(248, 248, 248);
   margin-bottom: 20px;
   border-radius: 10px;
`;

export const DashTitle = styled.h2`
   margin-bottom: 20px;
   color: red;
`

export const MyPokemonList = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 10px;
   width: 100%;
   justify-items: center;
`

export const MyPokemons = styled.div`
   width: 100px;
   height: 100px;
   background-color: rgb(255, 255, 255);
   border: 2px dashed rgb(204, 204, 204);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
`

export const Pokeball = styled.img`
   width: 50px;
   height: 50px;
`