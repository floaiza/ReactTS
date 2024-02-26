import React from 'react';
import { useParams } from 'react-router-dom';
import useGetPokemonListByType from '../../hooks/useGetPokemonListByType';
import { Grid } from '../shared/Grid/Grid';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonListByType: React.FC = () => {

    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType( typeName ?? '' );



  return (
    <Grid>
      {
        pokemonList.map((pokemon) => <PokemonCard key={ pokemon?.pokemon.name } pokemon={ pokemon?.pokemon } />)
      }
    </Grid>
  )
}

