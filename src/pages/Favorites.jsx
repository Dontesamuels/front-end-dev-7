import { useMovies } from "../contexts/MovieContext";
import MovieGrid from "../components/MovieGrid";

export default function Favorites() {
  const { favorites } = useMovies();

  if (!favorites || favorites.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No favorites yet.</h2>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <MovieGrid movies={favorites} />
    </div>
  );
}