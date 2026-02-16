import { createContext,useState,useContext } from "react";


// create the Moviewishlist

const MovieWishListcontext = createContext();

// create a custom hook for consuming the context
export function  useMovieWishList (){
    const context = useContext (MovieWishListcontext);
    if (!context){
        throw new Error ("use MovieWishList must be used within MovieWishListProvider");
        
    };
    return context;
};
// create the provider componet 
export function MovieWishListProvider ({children}){
    const [MovieWishList,setMovieWishList] = useState([]);

    const addToMovieWishList = (recipe) =>{
        if (!MovieWishList.some(r=> r.id === recipe.id)){
            setMovieWishList(prev =>[...prev,recipe]);
        }
    };
    const removeFromMovieWishList = (recipeId) =>{
        setMovieWishList(prev => prev.filter(recipe=> recipe.id !== recipeId));
    };
    const isinMovieWishList = (recipeId) =>{
        return MovieWishList.some(recipe => recipe.id === recipeId)
    };

    const value ={
        MovieWishList,
        addToMovieWishList,
        removeFromMovieWishList,
        isinMovieWishList
    };

    return (
        <MovieWishListcontext.Provider value = {value}>
            {children}
        </MovieWishListcontext.Provider>
    );
};

