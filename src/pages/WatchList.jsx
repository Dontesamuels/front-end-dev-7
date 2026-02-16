import { useMovies } from "../contexts/MovieContext";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useMovies();

  if (watchlist.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your watchlist is empty.</h2>;
  }

  return (
    <div className="movie-grid">
      {watchlist.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <button onClick={() => removeFromWatchlist(movie.id)}>
            Remove from Watchlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
