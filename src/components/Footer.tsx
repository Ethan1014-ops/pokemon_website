import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">PokePage</h3>
            <p className="text-gray-400 mt-2">Tu guía completa del mundo Pokémon</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://pokemon.fandom.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Fandom
            </a>
            <Link 
              to="/comunidad" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Soporte
            </Link>
            <Link 
              to="/comunidad" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Síguenos
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; 2025 PokePage. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;