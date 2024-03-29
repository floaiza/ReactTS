import React, { useMemo } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { useFavoriteStore } from '../../../store/useFavoriteStore';


interface FavoriteButtonPorps {
    pokemonId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonPorps> = ({ pokemonId }) => {

    const [ favorites, addFavorite, deleteFavorite ] = useFavoriteStore( (state) => [ 
            state.favorites, 
            state.addFavorite, 
            state.deleteFavorite 
        ]);

        const isFavorite = useMemo( () => favorites.includes( pokemonId.toString() ), [ favorites, pokemonId ] );

        const onClick = () => {
            const idToModify = pokemonId.toString(); 
            isFavorite ? deleteFavorite( idToModify ) : addFavorite( idToModify )
        }

  return (
      <button 
        className="bg-white p-1 rounded-full absolute top-2 left-2"
        onClick={ onClick }
    >
        { isFavorite ? <FaHeart fill="#ef4444" /> : <FaRegHeart fill="#ef44444" /> }
      </button>
  )
}

