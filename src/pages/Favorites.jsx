import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";


export default function Favorites() {
const [favorites, setFavorites] = useState([]);


useEffect(() => {
const stored = JSON.parse(localStorage.getItem("favorites")) || [];
setFavorites(stored);
}, []);


return (
<div>
<h2>Your Favorites</h2>
<MovieGrid movies={favorites} />
</div>
);
}