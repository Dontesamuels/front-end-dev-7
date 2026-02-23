import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { searchMovies } from "./services/movieService";
import { MovieProvider } from "./contexts/MovieContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist ";

export default function App() {
  const [searchResults, setSearchResults] = useState(null);

  async function handleSearch(query) {
    if (!query) return;

    const results = await searchMovies(query);
    setSearchResults(results);
  }

  return (
    <MovieProvider>
      <BrowserRouter>
        <Header onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}
