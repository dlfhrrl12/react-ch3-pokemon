import styled from "styled-components";
import { Link } from "react-router-dom"; 
export const PokemonListBox = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   gap: 20px;
   background-color: rgb(240, 240, 240);
   padding: 20px;
   border: 1px solid rgb(221, 221, 221);
   border-radius: 10px;
`

export const PokemonCards = styled(Link)`
 border: 1px solid rgb(221, 221, 221);
 border-radius: 10px;
 background-color: white;
 overflow: hidden;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
 text-align: center;
 padding: 10px;
 cursor: pointer;
 transition: transform 0.2s, box-shadow 0.2s;
 text-decoration: none;
 transition: transform 0.3s ease, box-shadow 0.3s ease;  /* 부드러운 효과 */

&:hover {
    transform: translateY(-10px);  /*  마우스를 올리면 살짝 떠오름 */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;  /*  그림자 강화 */
}
`

export const PokemonsImg = styled.img`
   width: 100px;
   height: 100px;
`;

export const PokemonsInfo = styled.div`
   margin-top: 10px;
`

export const PokemonsName = styled.p`
   font-size: 14px;
   font-weight: bold;
   margin-top: 5px;
   margin-bottom: 5px;
   color: black;
`

export const PokemonID = styled.p`
   font-size: 12px;
   color: rgb(102, 102, 102);
   margin-top: 12px;
   margin-bottom: 12px;
`

export const PokeAddBtn = styled.button`
   margin-top: 10px;
   padding: 5px 10px;
   font-size: 12px;
   cursor: pointer;
   border: none;
   background-color: red;
   color: white;
   border-radius: 5px;
`

