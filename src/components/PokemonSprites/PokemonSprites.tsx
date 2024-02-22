import React from 'react';
import { useGetPokemon } from '../../hooks/useGetPokemon';


interface PokemonSpritesProps {
    pokemonName?: string;
}

export const PokemonSprites: React.FC<PokemonSpritesProps>  = ({ pokemonName }) => {
    
    console.log(typeof pokemonName);
    

    const { pokemonData } = useGetPokemon( pokemonName );
    console.log({ pokemonData: pokemonData });
    
  
    return (
        <div className="flex flex-grow">
            <div>
                <h6 className="text-2xl text-center">Normal</h6>
                <div className="flex">
                    <img src={ pokemonData?.sprites?.front_default } alt={ pokemonData?.name ?? "" } className="mx-auto" />
                    <img src={ pokemonData?.sprites?.back_default } alt={ pokemonData?.name ?? "" } className="mx-auto" />
                </div>
            </div>

            <div>
                <h6 className="text-2xl text-center">Shiny</h6>
                <div className="flex">
                    <img src={ pokemonData?.sprites?.front_shiny } alt={ pokemonData?.name ?? "" } className="mx-auto" />
                    <img src={ pokemonData?.sprites?.back_shiny } alt={ pokemonData?.name ?? "" } className="mx-auto" />
                </div>
            </div>
        </div>


  )
}

