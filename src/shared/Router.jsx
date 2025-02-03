import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";

export default function Router() {
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
         </Routes>
        </BrowserRouter>
    );
}