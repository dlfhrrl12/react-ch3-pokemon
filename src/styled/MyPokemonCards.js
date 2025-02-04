import styled from "styled-components";

export const MyPokemonCards = styled.div`
 border: 1px solid rgb(221, 221, 221);
 display: flex;
 flex-direction: column;
 border-radius: 10px;
 background-color: white;
 overflow: hidden;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
 text-align: center;
 padding: 10px;
 cursor: pointer;
 transition: transform 0.2s, box-shadow 0.2s;
`

export const PokeDeleteBtn = styled.button`
   margin-top: 10px;
   padding: 5px 10px;
   font-size: 12px;
   cursor: pointer;
   border: none;
   background-color: red;
   color: white;
   border-radius: 5px;
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