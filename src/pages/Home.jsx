import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieService";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";


export default function Home({ searchResults }) {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
if (searchResults) {
setMovies(searchResults);
setLoading(false);
return;
}


async function fetchMovies() {
try {
const data = await getPopularMovies();
setMovies(data);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
}


fetchMovies();
}, [searchResults]);


if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;


return <MovieGrid movies={movies} />;
}