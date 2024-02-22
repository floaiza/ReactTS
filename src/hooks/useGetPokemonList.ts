import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constantes/url';
import { PokemonListItem } from '../interfaces/PokemonListItem';


// interface Pokemon {
//     name: string;
//     url: string;
// }


interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}



export const useGetPokemonList = () => {

    
    const [ url, setUrl ] = useState(`${BASE_URL}pokemon?limit=36`);

    const { data, isLoading, error  } = useQuery<PokemonList>({
        queryKey: ['pokemonList', url],
        queryFn: async() => {
            const response = await fetch(url);

            if (!response) {
                throw new Error("Network response was not ok");
            }
            //console.log({ response: response });
        
            return response.json();
        }
    });

    

    const goToNextPage = () => {
        if ( data?.next ) {
            setUrl( data.next )
        }
    }

    const goToPreviosPage = () => {
        if ( data?.previous ) {
            setUrl( data.previous )
        }
    }

    return {
        
        error: error?.message ?? null,
        goToNextPage: data?.next ? goToNextPage : undefined,
        goToPreviosPage: data?.previous ? goToPreviosPage : undefined,
        isLoading,
        pokemonList: data?.results ?? [],
    }
};

