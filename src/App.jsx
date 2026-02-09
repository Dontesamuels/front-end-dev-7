import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { searchMovies } from "./services/movieService";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


export default function App() {
const [searchResults, setSearchResults] = useState(null);


async function handleSearch(query) {
if (!query) return;


const results = await searchMovies(query);
setSearchResults(results);
}


return (
<BrowserRouter>
<Header onSearch={handleSearch} />


<Routes>
<Route path="/" element={<Home searchResults={searchResults} />} />
<Route path="/favorites" element={<Favorites />} />
</Routes>
</BrowserRouter>
);
}