import { useState } from "react";


export default function Header({ onSearch }) {
const [query, setQuery] = useState("");


function handleSubmit(e) {
e.preventDefault();
onSearch(query);
}


return (
<header>
<h1>MovieShelf</h1>


<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Search movies..."
value={query}
onChange={(e) => setQuery(e.target.value)}
/>
<button type="submit">Search</button>
</form>
</header>
);
}