import React, { useState } from 'react';
import Modal from 'react-modal';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { useSearchStore } from '../../store/useSearchStore';

const SearchModal: React.FC = () => {

    const [ isOpen, closeModal ] = useSearchStore((state) => [ state.isOpen, state.closeModal ]);

    const [ filter, setFilter ] = useState("");
    const [ currentSearch, setCurrentSearch ] = useState("");

    const { pokemonData } = useGetPokemon( currentSearch );

    const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setFilter( event.target.value );
    }

    const onClickSearch= () => {
        setCurrentSearch( filter.toLowerCase() );
    }

    const handleCloseModal = () => {
        setFilter("");
        setCurrentSearch("");
        closeModal();
;    }

  return (
    <Modal
        className="w-6/12 h-4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
        isOpen={ isOpen }
        onRequestClose={ handleCloseModal }
    >
      <h6>Search</h6>
      <input
        className="border p-2"
        type="text"
        value={ filter }
        onChange={ handleInputChange }
      />

        <button
            onClick={ onClickSearch }
        >
            Search
        </button>

        {
            pokemonData?.id && <PokemonCard pokemonId={ pokemonData?.id } />
        }

    </Modal>
  )
}

export default SearchModal
