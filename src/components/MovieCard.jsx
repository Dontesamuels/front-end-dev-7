import { useMovies } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useMovies();

  const inWatchlist = isInWatchlist(movie.id);

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>

      <button
        onClick={() =>
          inWatchlist
            ? removeFromWatchlist(movie.id)
            : addToWatchlist(movie)
        }
      >
        {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}

export default MovieCard;
