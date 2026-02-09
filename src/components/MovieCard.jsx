import { useState, useEffect } from "react";


const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";


export default function MovieCard({ movie }) {
const [isFavorite, setIsFavorite] = useState(false);


useEffect(() => {
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
setIsFavorite(favorites.some((fav) => fav.id === movie.id));
}, [movie.id]);


function toggleFavorite() {
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


if (isFavorite) {
favorites = favorites.filter((fav) => fav.id !== movie.id);
} else {
favorites.push(movie);
}


localStorage.setItem("favorites", JSON.stringify(favorites));
setIsFavorite(!isFavorite);
}


return (
<div>
<img src={`${IMAGE_BASE}${movie.poster_path}`} alt={movie.title} />
<h3>{movie.title}</h3>
<button onClick={toggleFavorite}>
{isFavorite ? "Remove Favorite" : "Add Favorite"}
</button>
</div>
);
}