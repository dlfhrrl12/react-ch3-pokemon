# 🐱‍🏍 React 포켓몬 프로젝트  

## 1. 프로젝트 소개  
이 프로젝트는 **React**를 활용하여 만든 포켓몬 관리 웹 애플리케이션입니다.  
- `styled-components`를 사용하여 **컴포넌트 UI 디자인**을 적용  
- `react-router-dom`을 이용해 **페이지 간 이동 처리**  
- `Context API`를 활용하여 **포켓몬 등록/삭제 기능** 구현  
- 등록된 포켓몬은 **포켓몬 DashBoard**에 나타나며, **최대 6마리까지만 등록 가능**  
- **같은 포켓몬 중복 등록 불가능** (이미 등록된 포켓몬 선택 시 경고 메시지 출력)  
- 포켓몬 카드를 클릭하면 **PokemonDetail 페이지로 이동**  

---

## 2. 프로젝트 구조  
react-ch3-pokemon │── index.html │── public/ // 이미지 파일 저장 │── src/ │ ├── components/ │ │ ├── DashBoard.jsx │ │ ├── PokemonDetail.jsx │ │ ├── PokemonList.jsx │ │ ├── PokemonItem.jsx │ ├── context/ │ │ ├── PokemonContext.jsx │ ├── data/ │ │ ├── MOCKDATA.js │ ├── pages/ │ │ ├── Dex.jsx │ │ ├── Home.jsx │ ├── shared/ │ │ ├── Router.jsx │ ├── styled/ │ │ ├── AppStyle.js │ │ ├── DetailPokemon.js │ │ ├── DexStyle.js │ │ ├── HomeStyle.js │ │ ├── MyPokemonCards.js │ │ ├── PokeListStyle.js

