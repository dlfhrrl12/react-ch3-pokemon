import styled from "styled-components";

// Detail Page 
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #FFE5B4; /* 연한 주황색 배경 */
  height: 100vh;
`;

// 포켓몬 이미지 배경
export const PokemonImgWrapper = styled.div`
  background-color: #FFFFFF; /* 이미지 배경 흰색 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

// 포켓몬 이미지 크기
export const PokemonImg = styled.img`
  width: 150px;
  height: 150px;
`;

// 포켓몬 이름
export const PokemonName = styled.h2`
  margin-top: 10px;
  font-size: 24px;
  color: #333;
`;

// 포켓몬 정보 태그
export const PokemonInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  background: none; /* 배경 없음 */
`;

// 포켓몬 속성 타입
export const PokemonTypes = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #4caf50;
`;

// 포켓몬 습성 및 정보
export const PokemonDescription = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #555;
  max-width: 300px;
`;

// 뒤로가기 버튼
export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background-color: darkred;
  }
`;