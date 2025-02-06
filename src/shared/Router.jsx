import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import { PokemonDetail } from "../components/PokemonDetail";

export default function Router() {
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} /> {/* useParams 를 이용해 Detail 페이지로 이동 */}
         </Routes>
        </BrowserRouter>
    );
}