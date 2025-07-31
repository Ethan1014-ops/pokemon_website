import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:scale-105 transition-transform">
            <span className="text-white font-bold text-2xl">PokePage</span>
          </Link>
          
          <h1 className="text-4xl font-bold text-white text-center flex-1">
            PokePage
          </h1>
          
          <div className="w-32"></div>
        </div>
        
        <nav className="mt-4">
          <div className="flex justify-start space-x-8 ml-4">
            <Link
              to="/pokedex"
              className={`nav-button py-2 font-semibold transition-all hover:text-yellow-200 ${
                isActive('/pokedex') ? 'active text-yellow-200' : 'text-white'
              }`}
            >
              Pokedex
            </Link>
            
            <Link
              to="/atrapalos"
              className={`nav-button py-2 font-semibold transition-all hover:text-yellow-200 ${
                isActive('/atrapalos') ? 'active text-yellow-200' : 'text-white'
              }`}
            >
              Atrapalos
            </Link>
            
            <Link
              to="/tienda"
              className={`nav-button py-2 font-semibold transition-all hover:text-yellow-200 ${
                isActive('/tienda') ? 'active text-yellow-200' : 'text-white'
              }`}
            >
              Tienda
            </Link>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('comunidad')}
                className={`nav-button py-2 font-semibold transition-all hover:text-yellow-200 flex items-center relative ${
                  isActive('/comunidad') ? 'active text-yellow-200' : 'text-white'
                }`}
              >
                Comunidad
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 'comunidad' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'comunidad' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <Link 
                    to="/comunidad#discord" 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Discord
                  </Link>
                  <Link 
                    to="/comunidad#whatsapp" 
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100 transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    WhatsApp
                  </Link>
                  <Link 
                    to="/comunidad#pinterest" 
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-100 transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Pinterest
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;