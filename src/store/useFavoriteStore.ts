import { create } from 'zustand';

interface favoriteStore {
    favorites: string[];
    addFavorite: ( id: string ) => void;
    deleteFavorite: ( id: string ) => void;
}

export const useFavoriteStore = create<favoriteStore>( (set)  => ({
    favorites:  localStorage.getItem("favorite-pokemons")?.split(",") || [],
    addFavorite: ( id: string ) => {
        set((state) => {
            const favorites = [ ...state.favorites, id ];
            console.log({ favorites: favorites });
            
            // if ( favorites.length == 0 ) {
            //     localStorage.setItem("favorite-pokemons", favorites.join(""));
            // }
            localStorage.setItem("favorite-pokemons", favorites.join(","));

            return { favorites }
        });
    },
    deleteFavorite: ( id: string ) => {
        set( (state) => {
            const favorites = state.favorites.filter( (favorite) => favorite !== id);
            localStorage.setItem("favorite-pokemons", favorites.join(","));
            
            return { favorites }
        });
    }
}));