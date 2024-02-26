import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from './../constantes/url';
import { PokemonListItem } from './../interfaces/PokemonListItem';

interface Pokemon {
  pokemon: PokemonListItem;
}

interface TypeListInfo {
  pokemon: Pokemon[];
}

const useGetPokemonListByType = ( typeName: string ) => {

  const { data, isLoading, error }  = useQuery<TypeListInfo>({
        
    queryKey: [ 'pokemonListByType', typeName ],
    queryFn: async() => {
        const response = await fetch(`${ BASE_URL }type/${ typeName }`);

        if (!response) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        return data;
    }
});
  return {
    error: error?.message ?? null,
    isLoading,
    pokemonList: data?.pokemon ?? [],
  }
}

export default useGetPokemonListByType;
