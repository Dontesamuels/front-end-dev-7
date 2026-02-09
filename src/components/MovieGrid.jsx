import MovieCard from "./MovieCard";


export default function MovieGrid({ movies }) {
return (
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 150px)", gap: "1rem" }}>
{movies.map((movie) => (
<MovieCard key={movie.id} movie={movie} />
))}
</div>
);
}