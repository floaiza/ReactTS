import React from 'react';
import { useFavoriteStore } from '../../store/useFavoriteStore';
import { Grid } from '../shared/Grid/Grid';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const FavoritePokemon: React.FC = () => {

    const favoriteIds = useFavoriteStore( (state) => state.favorites );

  return (
    <Grid>
      { favoriteIds.map( (favoriteId) => <PokemonCard key={ favoriteId } pokemonId={ Number(favoriteId) } /> ) }
    </Grid>
  )
}

