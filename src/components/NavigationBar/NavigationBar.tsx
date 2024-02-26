import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../../assets/pokeball.png';

const NavigationBar: React.FC = () => {
  return (
    <nav className="mx-auto bg-yellow-400 flex justify-between h-12 items-center shadow-lg">
        <div className="mx-auto flex justify-between items-center w-9/12">
            <Link to="/" >
                <img 
                    src={ Pokeball } 
                    alt="Poke logo" 
                    className="w-10 h-10"
                />
            </Link>
            <div className="flex gap-5 items-center">
                <Link to="/" className="text-black hover:text-red-700 hover:underline">Pokedex</Link>
                <Link to="/favorite" className="text-black hover:text-red-700 hover:underline">Favorites</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar;

