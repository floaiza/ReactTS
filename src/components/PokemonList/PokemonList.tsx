import React from 'react';
import { useGetPokemonList } from '../../hooks/useGetPokemonList';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Grid } from '../shared/Grid/Grid';


const PekemonList: React.FC = () => {

    
    const { pokemonList, goToNextPage, goToPreviosPage } = useGetPokemonList();

    //console.log({ response: pokemonList });
    return (
        <Grid goToNextPage={goToNextPage } goToPreviosPage={ goToPreviosPage }>
            {
                pokemonList.map((pokemon) => <PokemonCard key={ pokemon?.name } pokemon={ pokemon } />)
            }
        </Grid>
    )
}

export default PekemonList;